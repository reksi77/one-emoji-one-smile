import { mkdirSync, writeFileSync } from "node:fs";

// One Emoji, One Smile — the single emoji most likely to make a stranger smile.
//
// The choice is 🫶 U+1FAF6 HEART HANDS: two hands forming a heart. It reads
// at first glance as warmth, kindness and gratitude — a gesture, not a face —
// so it is universal to any stranger, carries no intimacy, sarcasm or
// flirtation, and feels deliberately chosen rather than the default smiley
// that comes to mind first. It is written here as a Unicode escape so the
// source stays plain ASCII and the output byte is exactly what is intended.
const EMOJI = "\u{1FAF6}";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", EMOJI, "utf8");
