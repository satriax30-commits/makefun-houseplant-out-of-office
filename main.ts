// The Houseplant Out-of-Office — make.fun bounty entry.
//
// Writes one out-of-office auto-reply, as if a houseplant sent it,
// to /output/entry.txt. Fully deterministic: no wall-clock time,
// no randomness, no network — the same bytes on every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry line. A fern ignored since March mirrors its neglect back
// at the sender: the email becomes compost, and the plant thanks them
// for the nutrients. Plant life drives the joke, not office cliches.
const ENTRY =
  "Out of office. I haven't been watered since March, so your email is compost now. Thanks for the nutrients.";

// Gate guard: the sealed scorer only accepts 1–120 characters of
// non-whitespace UTF-8 text. Count code points (not UTF-16 units),
// and refuse to write anything that would fail the gate.
const length = [...ENTRY].length;
if (length < 1 || length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`Entry is ${length} characters; gate requires 1-120.`);
}

// Output directory: the grader expects /output/entry.txt. Allow an
// override for local testing via OUTPUT_DIR.
const outDir = process.env.OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
