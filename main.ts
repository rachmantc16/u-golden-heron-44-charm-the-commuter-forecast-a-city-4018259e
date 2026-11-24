// Charm the Commuter: Forecast a City That Isn't
// Writes exactly one charming weather-forecast line for an invented city
// to /output/entry.txt — no trailing newline, at most 140 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const MAX_CHARS = 140;

// The forecast is assembled from broadcast-weather parts so the register
// of a real forecast stays intact: place, conditions, temperature, and
// one concrete local detail to make the invented city feel lived-in.
const city = "Puddlewick today";
const conditions = "morning drizzle, sunshine by nine";
const temperature = "highs of 21";
const localDetail = "the bus-stop puddles are throwing rainbows";

function buildForecast(): string {
  return `${city}: ${conditions}, ${temperature} — ${localDetail}, so umbrellas down, chins up.`;
}

const entry = buildForecast();

if (entry.length === 0 || entry.length > MAX_CHARS) {
  throw new Error(`Forecast must be 1-${MAX_CHARS} characters, got ${entry.length}`);
}
if (entry.includes("\n")) {
  throw new Error("Forecast must be exactly one line");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, entry, "utf8");
