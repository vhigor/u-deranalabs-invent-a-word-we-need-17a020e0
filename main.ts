import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "taplag (n.) — the anxious pause after tapping approve, while a payment decides whether it went through.";

const characterCount = [...entry].length;
if (characterCount < 1 || characterCount > 140 || entry.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${characterCount}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
