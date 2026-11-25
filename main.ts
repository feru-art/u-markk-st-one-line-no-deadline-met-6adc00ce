// One Line, No Deadline Met — make.fun entry (program/v1).
// Writes a single-line joke excusing a missed deadline to /output/entry.txt.
// Winner of the local head-to-head race (V3, 4/4): the laptop, given a motive
// of its own, picks the deadline to update — and the speaker, cornered,
// defends the laptop instead of himself. One sentence, punch at the very end.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My laptop picked the deadline to install its updates, and I respected its boundaries.";

// Gate self-check (mirrors the server gate): UTF-8 text, 1–200 characters,
// a single line, not only whitespace. Refuse to write anything invalid.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error(`entry line fails the gate: ${chars} characters`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
