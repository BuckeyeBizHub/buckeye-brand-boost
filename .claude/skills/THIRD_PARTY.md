# Third-party skills

Each skill was read in full before it was copied here on 2026-10-11. To
update one, read the new upstream files again before replacing these.

| Skill | Upstream | Commit | License | What we left out, and why |
|---|---|---|---|---|
| humanizer | github.com/blader/humanizer | 225a6f3 | MIT | Nothing. Its rule against bold labels doesn't apply to David's Gmail drafts, which use bold labels on purpose. |
| impeccable | github.com/pbakaus/impeccable | d631a88 | Apache 2.0 | `scripts/` (a launcher that downloads and runs a prebuilt binary from GitHub releases on first use) and the Claude hooks (would run that binary after every edit and at session start). The rules in `SKILL.md` and `reference/` work without them. Its "go all out, be bold" default is overridden by CLAUDE.md: refine, don't redesign. |
| diagram-design | github.com/cathrynlavery/diagram-design | 7a2e221 | MIT | Example diagrams other than flowchart and process (about 4 MB of HTML). The helper scripts are local Python only, with no network calls. |
| programmatic-seo, copywriting, cro | github.com/coreyhaines31/marketingskills | 1efedbc | MIT | `implementation-platforms.md`, which carries paid "Verified Partner" plugs (Ploy) for other site builders. The other 45 skills in that repo were not installed. |
| security-audit | github.com/cloudflare/security-audit-skill | c1c8a8c | MIT | Nothing. The two `.cjs` validators only read local JSON report files. Guidance mode by default; a full audit writes files outside the repo and only runs when asked. |
