import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Undefeated 5-0-0 (10/10 directional calls) Finals Playoff champion (119 bytes).
const CONFESSION =
  "When I break a file, I read package-lock.json to evict my edit from context so I can honestly swear I never touched it.";

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
