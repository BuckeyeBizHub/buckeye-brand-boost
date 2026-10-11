#!/usr/bin/env node
// Checks the site's own pages against the same house style the blog uses:
// no em or en dashes and nothing from the banned list in house-style.mjs.
// The blog check only ever covered blog posts, so page copy could ship
// "guaranteed" or a dash without anything stopping it.
//
//   node scripts/check-site-copy.mjs
//
// Exits 1 if anything fails. No dependencies, so it runs without npm install.
import fs from "node:fs";
import path from "node:path";
import { BANNED, stripComments } from "./house-style.mjs";

const ROOT = process.cwd();
const DIRS = ["src/content", "src/views", "src/components/site", "src/app"];

// Lines that trip a rule on purpose. Each entry is a piece of the line and
// why it's allowed. Keep this short; fix the copy instead when you can.
const ALLOWED = [
  ["Nobody honest can guarantee you the top spot", "says we don't guarantee rankings"],
  ["Can you guarantee first page rankings?", "the answer is no"],
  ["Nobody can honestly guarantee rankings", "says we don't guarantee rankings"],
  ["cannot guarantee absolute security", "standard privacy policy wording"],
];

// Claims David hasn't decided on yet (Projects/Website/MARKETING-PLAN.md,
// "Claims decision"). They print as warnings so they stay visible, and they
// don't fail the check. Move a line to ALLOWED or reword the copy once David
// decides.
const WAITING_ON_DAVID = [["What's your satisfaction guarantee?", "claims decision: satisfaction guarantee"]];

const files = [];
const walk = (dir) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p);
    else if (/\.tsx?$/.test(e.name) && !/\.test\.tsx?$/.test(e.name)) files.push(p);
  }
};
for (const d of DIRS) if (fs.existsSync(path.join(ROOT, d))) walk(path.join(ROOT, d));

let failed = 0;
let warned = 0;
for (const file of files) {
  const lines = stripComments(fs.readFileSync(file, "utf8")).split("\n");
  lines.forEach((line, i) => {
    const where = `${path.relative(ROOT, file)}:${i + 1}`;
    const problems = [];
    if (/[—–]|&mdash;|&ndash;/.test(line)) problems.push("em or en dash");
    const prose = line.replace(/&apos;|&#39;|&rsquo;/g, "'");
    for (const [pattern, reason] of BANNED) if (pattern.test(prose)) problems.push(reason);
    if (!problems.length) return;
    if (ALLOWED.some(([piece]) => line.includes(piece))) return;
    const waiting = WAITING_ON_DAVID.find(([piece]) => line.includes(piece));
    if (waiting) {
      warned++;
      console.log(`WAIT ${where}: ${waiting[1]}`);
      return;
    }
    failed++;
    console.log(`FAIL ${where}: ${problems.join(", ")}`);
    console.log(`     ${line.trim().slice(0, 160)}`);
  });
}
console.log(`${files.length} files checked, ${failed} problems, ${warned} waiting on David.`);
process.exit(failed ? 1 : 0);
