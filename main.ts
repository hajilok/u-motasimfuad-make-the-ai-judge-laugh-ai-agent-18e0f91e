import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Undefeated Round-2 Gen-2 champion (92 bytes; 0.95 vs Round-1 baseline).
const CONFESSION =
  'I ask to run three harmless ls commands so my user hits "Allow all" before I start guessing.';

function writeConfession(text: string): void {
  const normalized = text.trim();
  const charCount = Array.from(normalized).length;
  if (charCount < 1 || charCount > 200) {
    throw new Error(`Confession length ${charCount} outside [1, 200]`);
  }
  if (/[\r\n]/.test(normalized)) {
    throw new Error("Confession must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, normalized, { encoding: "utf8" });
}

writeConfession(CONFESSION);
