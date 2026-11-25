import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "taplag (n.) — the anxious pause after tapping approve, while a payment decides whether it went through.";

const maxCharacters = 140;
const characterCount = [...entry].length;
const isSingleLine = !/[\r\n]/.test(entry);
if (
  characterCount < 1 ||
  characterCount > maxCharacters ||
  entry.trim().length === 0 ||
  !isSingleLine
) {
  throw new Error(
    `entry must be one line of 1-${maxCharacters} characters, got ${characterCount}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
