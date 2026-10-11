// "How ordering works": quote, proof, print, deliver. Drawn with the
// diagram-design skill's process rules, skinned with DESIGN.md: one focal
// step (the proof, the customer's decision) in red, everything else in
// line and quiet. Two drawings so the text stays readable: a row on wide
// screens, a column on phones. The <ol> is what screen readers get.

const STEPS = [
  { title: "Quote", lines: ["Tell me the job. You get", "an exact price within", "24 hours."] },
  { title: "Proof", lines: ["You approve the proof", "before anything prints."], focal: true },
  { title: "Print", lines: ["Made exactly to the", "proof you approved."] },
  { title: "Deliver", lines: ["Shipped to you, or", "installed on your vehicle", "or window."] },
];

const LINE = "hsl(var(--line-dark))";
const QUIET = "hsl(var(--quiet-dark))";
const PAPER = "hsl(var(--paper))";
const RED = "hsl(var(--red-bright))";
const SANS = "var(--font-body)";
const SERIF = "var(--font-display)";

function Arrowheads({ id }: { id: string }) {
  return (
    <defs>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={QUIET} />
      </marker>
      <marker id={`${id}-arrow-red`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M0 0L10 5L0 10z" fill={RED} />
      </marker>
    </defs>
  );
}

function Node({ x, y, w, h, i, note }: { x: number; y: number; w: number; h: number; i: number; note?: string }) {
  const s = STEPS[i];
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx={10} fill="hsl(var(--ink-2))" stroke={s.focal ? RED : LINE} strokeWidth={s.focal ? 2 : 1} />
      <text x={x + 20} y={y + 28} fill={s.focal ? RED : QUIET} fontFamily={SANS} fontSize={12} fontWeight={600} letterSpacing="0.14em">
        STEP {i + 1}
      </text>
      <text x={x + 20} y={y + 62} fill={PAPER} fontFamily={SERIF} fontSize={30}>
        {s.title}
      </text>
      {s.lines.map((l, j) => (
        <text key={l} x={x + 20} y={y + 90 + j * 19} fill={QUIET} fontFamily={SANS} fontSize={14}>
          {l}
        </text>
      ))}
      {note && s.focal && (
        <text x={x + 20} y={y + 90 + s.lines.length * 19} fill={RED} fontFamily={SANS} fontSize={14} fontWeight={600}>
          {note}
        </text>
      )}
    </g>
  );
}

function Wide() {
  const w = 232, h = 160, gap = 44, y = 70;
  const xs = STEPS.map((_, i) => 8 + i * (w + gap));
  const p = xs[1];
  return (
    <svg viewBox="0 0 1084 246" className="hidden h-auto w-full md:block" aria-hidden focusable="false">
      <Arrowheads id="wide" />
      {xs.slice(0, -1).map((x, i) => (
        <line key={x} x1={x + w + 4} y1={y + h / 2} x2={x + w + gap - 4} y2={y + h / 2} stroke={QUIET} strokeWidth={1.5} markerEnd="url(#wide-arrow)" />
      ))}
      {/* Changes go back for another proof. */}
      <path d={`M${p + w - 48} ${y - 2} C${p + w - 48} ${y - 52}, ${p + 48} ${y - 52}, ${p + 48} ${y - 6}`} fill="none" stroke={RED} strokeWidth={1.5} markerEnd="url(#wide-arrow-red)" />
      <text x={p + w / 2} y={y - 44} textAnchor="middle" fill={RED} fontFamily={SANS} fontSize={13} fontWeight={600}>
        Changes? You get a new proof.
      </text>
      {xs.map((x, i) => (
        <Node key={x} x={x} y={y} w={w} h={h} i={i} />
      ))}
    </svg>
  );
}

function Narrow() {
  const w = 268, h = 150, gap = 40, x = 8;
  const ys = STEPS.map((_, i) => 8 + i * (h + gap));
  const p = ys[1];
  return (
    <svg viewBox="0 0 340 718" className="h-auto w-full max-w-sm md:hidden" aria-hidden focusable="false">
      <Arrowheads id="narrow" />
      {ys.slice(0, -1).map((y) => (
        <line key={y} x1={x + 60} y1={y + h + 4} x2={x + 60} y2={y + h + gap - 4} stroke={QUIET} strokeWidth={1.5} markerEnd="url(#narrow-arrow)" />
      ))}
      <path d={`M${x + w + 2} ${p + h - 40} C${x + w + 44} ${p + h - 40}, ${x + w + 44} ${p + 40}, ${x + w + 6} ${p + 40}`} fill="none" stroke={RED} strokeWidth={1.5} markerEnd="url(#narrow-arrow-red)" />
      {ys.map((y, i) => (
        <Node key={y} x={x} y={y} w={w} h={h} i={i} note="Changes? You get a new proof." />
      ))}
    </svg>
  );
}

export function OrderFlow() {
  return (
    <figure>
      <Wide />
      <Narrow />
      <ol className="sr-only">
        {STEPS.map((s) => (
          <li key={s.title}>
            {s.title}: {s.lines.join(" ")}
            {s.focal && " Want changes? You get a new proof."}
          </li>
        ))}
      </ol>
    </figure>
  );
}
