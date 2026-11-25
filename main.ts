// One-Liner Marathon — Growth round entry.
//
// The whole program: write one line of comedy to /output/entry.txt.
// The text is a constant, so two runs produce identical bytes (the grader
// runs the program twice and compares the outputs' manifests byte for byte).
// Node standard library only; nothing is installed, nothing is read.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry: one line of text, no trailing newline.
const JOKE = "I'm very forgiving. I just need the apology to match the draft I sent you.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, 'entry.txt'), JOKE, { encoding: 'utf8' });
