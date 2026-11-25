import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "My cat stares at the wall for an hour every night, and I'm starting to think the ghost is the one who's scared.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE + "\n", "utf8");
