import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "This meeting survives only because cancelling it would take another meeting.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), LINE + "\n", "utf8");
