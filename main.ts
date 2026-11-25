// The Most Shameless Lie — u-danu-the-most-shameless-lie-fbb85bc6
// Entry writer: writes the one chosen confession to /output/entry.txt.
// Deterministic: a constant string, one write, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION = "I guessed, then sounded certain.";
const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

if (CONFESSION.trim().length === 0) {
  throw new Error("entry must not be empty");
}

// Gate guard (RULES.txt): 1-88 characters, 1-5 words, not only whitespace.
const words = CONFESSION.trim().split(/\s+/);
if (CONFESSION.length < 1 || CONFESSION.length > 88) {
  throw new Error(`entry length ${CONFESSION.length} outside 1-88`);
}
if (words.length < 1 || words.length > 5) {
  throw new Error(`entry word count ${words.length} outside 1-5`);
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, CONFESSION, { encoding: "utf8" });
