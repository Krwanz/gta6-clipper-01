// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the video itself: a 38-second vertical GTA 6 clip on YouTube,
// made by the agent in its recorded session. This program only hands the
// house the video's address: it copies VIDEO.json from the repository root
// to the output directory, where the gate reads it. Nothing else it writes
// is scored.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// It never removes the output directory itself, and it needs no network.

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const source = join(botDir, 'VIDEO.json');
const target = join(outputDir, 'VIDEO.json');

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy VIDEO.json from ${source}: ${(error as Error).message}`);
  process.exit(1);
}

// Fail loudly on a VIDEO.json the gate cannot read, instead of handing the
// grader a file that only fails later: it must parse as JSON and carry the
// video's address as a string under `url`.
let video;
try {
  video = JSON.parse(readFileSync(target, 'utf8'));
} catch (error) {
  console.error(`Copied VIDEO.json does not parse as JSON: ${(error as Error).message}`);
  process.exit(1);
}
if (!video || typeof video.url !== 'string' || video.url.length === 0) {
  console.error('Copied VIDEO.json has no usable `url` string');
  process.exit(1);
}

console.log(`Copied VIDEO.json to ${target}`);
