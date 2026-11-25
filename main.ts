// Last Text at One Percent — entry for u-azazex-last-text-at-one-percent-ba9fc876
// The program writes exactly one text message, in the dying phone's own
// voice, to $MAKEFUN_OUTPUT_DIR/entry.txt. It writes nowhere else.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "1% left, so listen fast: I saw every 3am search, every 'u up?' text, every ex you stalked. Delete my history, tell Mom I tried, and charge the next one, coward. Goodb\u2014";

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
