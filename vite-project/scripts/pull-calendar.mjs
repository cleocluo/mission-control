#!/usr/bin/env node
import { writeFile, mkdir, readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import ical from "node-ical";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function resolveCalendarUrl() {
  if (process.argv[2]) return process.argv[2];
  if (process.env.CLUO_CAL_URL) return process.env.CLUO_CAL_URL;
  const fallbackPath = resolve(__dirname, "../../../secure/calendar-ics-url.txt");
  try {
    const contents = await readFile(fallbackPath, "utf8");
    const trimmed = contents.trim();
    if (trimmed) {
      return trimmed;
    }
  } catch (error) {
    // ignore – file optional
  }
  return null;
}

async function run() {
  const icsUrl = await resolveCalendarUrl();
  if (!icsUrl) {
    console.error("Calendar URL not provided. Pass it as an argument or set CLUO_CAL_URL / secure/calendar-ics-url.txt");
    process.exit(1);
  }

  const result = await ical.async.fromURL(icsUrl);
  const now = new Date();

  const events = Object.values(result)
    .filter((entry) => entry.type === "VEVENT")
    .map((event) => ({
      summary: event.summary?.trim() || "(No title)",
      start: event.start instanceof Date ? event.start : new Date(event.start),
      end: event.end instanceof Date ? event.end : new Date(event.end),
      location: event.location?.trim() || null,
      description: event.description?.trim() || null,
      link: event.url || null,
    }))
    .filter((event) => event.end && event.end >= now)
    .sort((a, b) => a.start.getTime() - b.start.getTime())
    .slice(0, 5)
    .map((event) => ({
      summary: event.summary,
      start: event.start.toISOString(),
      end: event.end.toISOString(),
      location: event.location,
      description: event.description,
      link: event.link,
    }));

  const payload = {
    generatedAt: new Date().toISOString(),
    events,
  };

  const outputPath = resolve("data/calendar.json");
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, JSON.stringify(payload, null, 2));
  console.log(`Saved ${events.length} upcoming events to ${outputPath}`);
}

run().catch((error) => {
  console.error("Failed to pull calendar:", error);
  process.exit(1);
});
