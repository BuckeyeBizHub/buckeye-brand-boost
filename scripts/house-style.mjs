// House style for anything published on buckeyebizhub.com. David's rules:
// short sentences, active voice, real numbers or none, no em dashes, no
// "not just X but Y", no fake warmth. check-blog-post.mjs holds a post that
// breaks any of these, so a held post never merges and never goes live.
//
// To change the list, edit it here. Each entry is a pattern and the reason
// shown when a post trips it.
import fs from "node:fs";
import path from "node:path";

export const BANNED = [
  // Stock AI words (from David's Atlas post rules and the Humanizer skill).
  [/\bdelve[sd]?\b|\bdelving\b/i, "banned word: delve"],
  [/\bunlock(s|ed|ing)?\b/i, "banned word: unlock"],
  [/\bgame[- ]changer?s?\b|\bgame[- ]changing\b/i, "banned word: game-changer"],
  [/\btapestry\b/i, "banned word: tapestry"],
  [/\blandscape\b(?![- ](design|lighting|crew|compan|business|contractor|maintenance|trailer|truck))/i, "banned word: landscape (fine only for actual landscaping)"],
  [/\bharness(es|ed|ing)?\b/i, "banned word: harness"],
  [/\bcutting[- ]edge\b/i, "banned word: cutting-edge"],
  [/\bfurthermore\b/i, "banned word: furthermore"],
  [/\bin conclusion\b/i, "banned phrase: in conclusion"],
  [/\bseamless(ly)?\b/i, "banned word: seamless"],
  [/\belevate[sd]?\b|\belevating\b/i, "banned word: elevate"],
  [/\btestament\b/i, "banned word: testament"],
  [/\bpivotal\b/i, "banned word: pivotal"],
  [/\bnestled\b/i, "banned word: nestled"],
  [/\bin today'?s (fast[- ]paced|competitive|digital)\b/i, "banned phrase: in today's ... world"],
  // Fake warmth and staged run-ups.
  [/\bhere'?s the thing\b/i, "banned phrase: here's the thing"],
  [/\blet that sink in\b/i, "banned phrase: let that sink in"],
  [/\blet'?s dive in\b|\bdive (deep|into)\b|\bdeep dive\b/i, "banned phrase: dive in / deep dive"],
  [/\bwithout further ado\b/i, "banned phrase: without further ado"],
  // Not X but Y.
  [/\bnot (just|only|merely) [^.!?]{1,80}?,? but( also)?\b/i, 'banned shape: "not just X, but Y"'],
  [/\bit'?s not [^.!?]{1,60}[.;,] it'?s\b/i, 'banned shape: "It\'s not X. It\'s Y."'],
  // Claims we can't back up.
  [/\bguarantee[ds]?\b/i, "claim: guarantee"],
  [/\B#1\b|\bnumber one\b/i, "claim: #1 / number one"],
  [/\bbest in (columbus|ohio|central ohio|town)\b/i, "claim: best in Columbus"],
  [/\bstudies show\b|\bresearch shows\b|\bexperts (say|agree)\b/i, "claim needs a named, linked source"],
  [/\baccording to (a )?(recent )?(study|survey|research|report)\b/i, "claim needs a named, linked source"],
];

// Numbers a post may use without a link: anything already stated on the site
// (prices, sizes and specs in src/content), our phone, address and ZIP.
export function siteFactNumbers(root) {
  const facts = new Set(["614", "561", "3358", "1193", "43212"]);
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (/\.tsx?$/.test(e.name)) for (const n of numbersIn(fs.readFileSync(p, "utf8"))) facts.add(n);
    }
  };
  walk(path.join(root, "src", "content"));
  return facts;
}

// "1,000" and "1000" count as the same number; "$29" and "29" too.
export function numbersIn(text) {
  return [...text.matchAll(/\d[\d,]*(?:\.\d+)?/g)].map((m) => m[0].replace(/,/g, "").replace(/\.$/, ""));
}

// A number needs a source unless it is a site fact, a year, or a small count
// ("three to six sections", "step 2") that isn't dressed up as a statistic.
function needsSource(num, after, facts) {
  if (facts.has(num)) return false;
  if (/^(19[89]\d|20[0-3]\d)$/.test(num)) return false;
  const statistic = /^\s*(%|percent|x\b|times\b|in 10\b|out of\b)/i.test(after);
  if (!statistic && Number(num) <= 12 && !num.includes(".")) return false;
  return true;
}

// Returns one message per number with no source. A block (paragraph, list
// item, heading, table cell) counts as sourced when it links outside our site.
export function unsourcedNumbers(html, facts) {
  const problems = [];
  const blocks = html.split(/<\/?(?:p|li|h[1-6]|td|th|blockquote)(?:\s[^>]*)?>/i);
  for (const block of blocks) {
    const external = [...block.matchAll(/href="(https?:\/\/[^"]+)"/gi)].some(
      (m) => !/^https?:\/\/(www\.)?buckeyebizhub\.(com|blog)/i.test(m[1]),
    );
    if (external) continue;
    const text = block.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ").replace(/&#\d+;|&[a-z]+;/g, " ");
    for (const m of text.matchAll(/\$?\d[\d,]*(?:\.\d+)?/g)) {
      const num = m[0].replace(/[$,]/g, "").replace(/\.$/, "");
      const before = text.slice(Math.max(0, m.index - 6), m.index);
      const after = text.slice(m.index + m[0].length, m.index + m[0].length + 8);
      // Part of a name or form number (MCS-150, USDOT 123456), not a claim.
      if (/[A-Za-z]-$|\b(USDOT|DOT|MC|Form|No\.) $/.test(before) || /^[A-Za-z]/.test(after)) continue;
      if (needsSource(num, after, facts)) {
        const start = Math.max(0, m.index - 40);
        problems.push(`number with no source: "${text.slice(start, m.index + m[0].length + 20).replace(/\s+/g, " ").trim()}"`);
      }
    }
  }
  return problems;
}
