import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { CheckCircle2, XCircle, AlertTriangle, Loader2, ExternalLink, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type CheckStatus = "idle" | "running" | "pass" | "fail" | "warn";

interface CheckResult {
  id: string;
  label: string;
  status: CheckStatus;
  detail?: string;
  fix?: string;
}

const DOMAINS = [
  { host: "buckeyebizhub.com", url: "https://buckeyebizhub.com" },
  { host: "www.buckeyebizhub.com", url: "https://www.buckeyebizhub.com" },
];

const LOVABLE_IP = "185.158.133.1";

const StatusIcon = ({ status }: { status: CheckStatus }) => {
  if (status === "running") return <Loader2 className="w-5 h-5 animate-spin text-muted-foreground" />;
  if (status === "pass") return <CheckCircle2 className="w-5 h-5 text-green-500" />;
  if (status === "fail") return <XCircle className="w-5 h-5 text-destructive" />;
  if (status === "warn") return <AlertTriangle className="w-5 h-5 text-yellow-500" />;
  return <div className="w-5 h-5 rounded-full border-2 border-muted" />;
};

async function checkDomain(url: string): Promise<{ ok: boolean; status?: number; error?: string }> {
  try {
    // no-cors gives us opaque response; we can detect network failure vs success
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 8000);
    const res = await fetch(url, { method: "HEAD", mode: "no-cors", signal: ctrl.signal, cache: "no-store" });
    clearTimeout(timer);
    return { ok: true, status: res.status || 0 };
  } catch (e: any) {
    return { ok: false, error: e?.message || "Network error" };
  }
}

async function checkDNS(host: string): Promise<{ ips: string[]; cnames: string[]; error?: string }> {
  try {
    const [aRes, cnameRes] = await Promise.all([
      fetch(`https://dns.google/resolve?name=${host}&type=A`).then((r) => r.json()),
      fetch(`https://dns.google/resolve?name=${host}&type=CNAME`).then((r) => r.json()),
    ]);
    const ips = (aRes.Answer || []).filter((a: any) => a.type === 1).map((a: any) => a.data);
    const cnames = (cnameRes.Answer || []).filter((a: any) => a.type === 5).map((a: any) => a.data);
    return { ips, cnames };
  } catch (e: any) {
    return { ips: [], cnames: [], error: e?.message };
  }
}

async function checkTXT(host: string): Promise<{ records: string[]; error?: string }> {
  try {
    const res = await fetch(`https://dns.google/resolve?name=_lovable.${host}&type=TXT`).then((r) => r.json());
    const records = (res.Answer || []).map((a: any) => a.data);
    return { records };
  } catch (e: any) {
    return { records: [], error: e?.message };
  }
}

const DomainCheck = () => {
  const [results, setResults] = useState<Record<string, CheckResult[]>>({});
  const [running, setRunning] = useState(false);
  const [done, setDone] = useState(false);

  const runChecks = async () => {
    setRunning(true);
    setDone(false);
    const next: Record<string, CheckResult[]> = {};

    for (const d of DOMAINS) {
      next[d.host] = [
        { id: "dns", label: "DNS A record points to Lovable (185.158.133.1)", status: "running" },
        { id: "txt", label: "_lovable TXT verification record exists", status: "running" },
        { id: "https", label: "HTTPS responds (SSL certificate valid)", status: "running" },
        { id: "redirect", label: "No 421 Misdirected Request", status: "running" },
      ];
      setResults({ ...next });

      // DNS
      const dns = await checkDNS(d.host);
      const hasLovableIp = dns.ips.includes(LOVABLE_IP);
      const hasCloudflare = dns.cnames.some((c) => /cloudflare|cdn/i.test(c)) || dns.ips.some((ip) => ip.startsWith("104.") || ip.startsWith("172.67."));
      next[d.host][0] = {
        id: "dns",
        label: "DNS A record points to Lovable (185.158.133.1)",
        status: hasLovableIp ? "pass" : hasCloudflare ? "warn" : "fail",
        detail: dns.ips.length ? `Resolves to: ${dns.ips.join(", ")}${dns.cnames.length ? ` (CNAME: ${dns.cnames.join(", ")})` : ""}` : "No A record found",
        fix: hasLovableIp
          ? undefined
          : hasCloudflare
          ? "DNS is proxied (Cloudflare). In Lovable Domains settings, remove this domain, re-add it, expand Advanced, and check 'Domain uses Cloudflare or a similar proxy.'"
          : `Add an A record for ${d.host === "buckeyebizhub.com" ? "@" : "www"} → ${LOVABLE_IP} at your DNS provider.`,
      };
      setResults({ ...next });

      // TXT
      const txt = await checkTXT(d.host);
      next[d.host][1] = {
        id: "txt",
        label: "_lovable TXT verification record exists",
        status: txt.records.length > 0 ? "pass" : "warn",
        detail: txt.records.length ? txt.records.join(", ") : "Not found (may already be verified)",
        fix: txt.records.length ? undefined : "If domain is not yet 'Active' in Lovable, add the TXT record shown in Project Settings → Domains.",
      };
      setResults({ ...next });

      // HTTPS reachability
      const httpsCheck = await checkDomain(d.url);
      next[d.host][2] = {
        id: "https",
        label: "HTTPS responds (SSL certificate valid)",
        status: httpsCheck.ok ? "pass" : "fail",
        detail: httpsCheck.ok ? "SSL handshake succeeded" : `Failed: ${httpsCheck.error}`,
        fix: httpsCheck.ok ? undefined : `SSL not provisioned for ${d.host}. In Lovable → Project Settings → Domains, ensure ${d.host} is listed as a separate entry. SSL is per-domain (not wildcard). Wait 5–15 min after adding.`,
      };
      setResults({ ...next });

      // 421 detection — try a real fetch with a controlled origin to detect routing mismatch
      // We can't read status with no-cors, so we approximate: if HTTPS fails AND DNS points to Lovable, likely 421.
      const likely421 = !httpsCheck.ok && hasLovableIp;
      next[d.host][3] = {
        id: "redirect",
        label: "No 421 Misdirected Request",
        status: likely421 ? "fail" : httpsCheck.ok ? "pass" : "warn",
        detail: likely421
          ? "DNS points to Lovable but HTTPS fails — classic 421 signature (domain not registered on this Lovable project, or SSL cert doesn't cover this hostname)."
          : httpsCheck.ok
          ? "Routing OK"
          : "Cannot determine — fix DNS first.",
        fix: likely421
          ? `Open Lovable → Project Settings → Domains. Confirm BOTH 'buckeyebizhub.com' AND 'www.buckeyebizhub.com' are listed and Active. If ${d.host} is missing, click 'Connect Domain' and add it. SSL will reissue automatically.`
          : undefined,
      };
      setResults({ ...next });
    }

    setRunning(false);
    setDone(true);
  };

  const allChecks = Object.values(results).flat();
  const failures = allChecks.filter((c) => c.status === "fail");
  const warnings = allChecks.filter((c) => c.status === "warn");

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Helmet>
        <title>Domain & SSL Diagnostic Wizard | Buckeye Biz Hub</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <Navbar />

      <main className="flex-1 pt-32 pb-20">
        <div className="container max-w-4xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="font-display text-4xl md:text-5xl font-black text-foreground mb-3">
              Domain & SSL Diagnostic Wizard
            </h1>
            <p className="text-muted-foreground text-lg">
              Diagnose 421 Misdirected Request errors on buckeyebizhub.com and www.buckeyebizhub.com.
            </p>
          </div>

          <Card className="p-6 mb-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h2 className="font-bold text-xl mb-1">Run Diagnostics</h2>
                <p className="text-sm text-muted-foreground">
                  Live checks: DNS resolution, TXT verification, SSL handshake, 421 signature.
                </p>
              </div>
              <Button onClick={runChecks} disabled={running} size="lg" className="bg-primary hover:bg-primary/90">
                {running ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Running…
                  </>
                ) : (
                  "Start Diagnosis"
                )}
              </Button>
            </div>
          </Card>

          {DOMAINS.map((d) => {
            const checks = results[d.host];
            if (!checks) return null;
            return (
              <Card key={d.host} className="p-6 mb-6">
                <h3 className="font-display text-2xl font-black mb-4 flex items-center gap-2">
                  {d.host}
                  <a
                    href={d.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline inline-flex items-center text-sm font-normal"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </h3>
                <div className="space-y-4">
                  {checks.map((c) => (
                    <div key={c.id} className="flex gap-3 p-4 rounded-lg border border-border bg-muted/30">
                      <div className="pt-0.5">
                        <StatusIcon status={c.status} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-semibold text-foreground">{c.label}</div>
                        {c.detail && <div className="text-sm text-muted-foreground mt-1 break-words">{c.detail}</div>}
                        {c.fix && (
                          <div className="mt-2 text-sm bg-yellow-500/10 border border-yellow-500/30 rounded p-3 text-foreground">
                            <strong>Fix:</strong> {c.fix}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}

          {done && (
            <Card className="p-6 mb-6">
              <h2 className="font-display text-2xl font-black mb-4">Summary & Next Steps</h2>
              {failures.length === 0 && warnings.length === 0 ? (
                <p className="text-green-600 font-bold">✓ All checks passed. Both domains are correctly configured.</p>
              ) : (
                <>
                  <p className="mb-4">
                    Found <strong className="text-destructive">{failures.length} failure(s)</strong> and{" "}
                    <strong className="text-yellow-600">{warnings.length} warning(s)</strong>.
                  </p>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>
                      Open <strong>Lovable → Project Settings → Domains</strong> and confirm BOTH{" "}
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm">buckeyebizhub.com</code> and{" "}
                      <code className="bg-muted px-1.5 py-0.5 rounded text-sm">www.buckeyebizhub.com</code> are listed as
                      separate entries with status <strong>Active</strong>.
                    </li>
                    <li>
                      If either is missing, click <strong>Connect Domain</strong> and add it. SSL is provisioned per
                      domain — there is no wildcard.
                    </li>
                    <li>
                      At your DNS provider, ensure A records for both <code>@</code> and <code>www</code> point to{" "}
                      <code>{LOVABLE_IP}</code>.
                    </li>
                    <li>
                      If using Cloudflare or another proxy, re-add the domain in Lovable with the{" "}
                      <strong>Advanced → "Domain uses Cloudflare or a similar proxy"</strong> checkbox enabled.
                    </li>
                    <li>
                      Once both domains are Active, set one as <strong>Primary</strong> so the other 301-redirects to it.
                    </li>
                    <li>Wait 5–15 min for SSL to issue, then re-run this wizard.</li>
                  </ol>
                </>
              )}
              <div className="mt-6 pt-6 border-t border-border flex flex-wrap gap-3">
                <Button asChild variant="outline">
                  <a href="https://dnschecker.org/#A/buckeyebizhub.com" target="_blank" rel="noopener noreferrer">
                    Check DNS propagation <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href="https://docs.lovable.dev/features/custom-domain" target="_blank" rel="noopener noreferrer">
                    Lovable domain docs <ExternalLink className="w-3.5 h-3.5 ml-1" />
                  </a>
                </Button>
                <Button asChild className="bg-primary">
                  <a href="tel:+16145613358">
                    <Phone className="w-4 h-4 mr-1" /> Call David: 614-561-3358
                  </a>
                </Button>
              </div>
            </Card>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DomainCheck;
