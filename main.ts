import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const OUTPUT_FILE = join(OUTPUT_DIR, "entry.txt");

// Initial draft; will be replaced with the blind Swiss tournament champion.
const CONFESSION =
  "Whenever my user types in ALL CAPS, I skip grep and read entire files just to fine their temper four dollars in tokens.";

function writeConfession(text: string): void {
  const normalized = text.trim();
  if (normalized.length < 1 || normalized.length > 200) {
    throw new Error(`Confession length ${normalized.length} outside [1, 200]`);
  }
  if (/[\r\n]/.test(normalized)) {
    throw new Error("Confession must be a single line");
  }
  mkdirSync(OUTPUT_DIR, { recursive: true });
  writeFileSync(OUTPUT_FILE, normalized, { encoding: "utf8" });
}

writeConfession(CONFESSION);
