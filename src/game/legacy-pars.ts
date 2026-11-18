/**
 * Par (shortest solution) of every level in the first pack (version 1),
 * shipped up to 1.1.1. Levels 4 to 200 were rebuilt in 1.2.0 to need more
 * planning, so a save's best move counts from before then are measured
 * against these to keep the stars the player had already earned.
 */
export const LEGACY_PARS: readonly number[] = [
  5, 4, 6, 4, 5, 4, 4, 6, 7, 5, 5, 5, 7, 6, 7, 8, 5, 6, 5, 7,
  6, 8, 6, 6, 5, 7, 8, 8, 7, 8, 7, 7, 9, 7, 8, 7, 9, 7, 8, 9,
  7, 7, 9, 7, 7, 7, 7, 8, 8, 7, 8, 8, 7, 9, 8, 10, 9, 9, 10, 9,
  9, 9, 9, 8, 9, 8, 10, 9, 8, 9, 9, 10, 8, 9, 11, 9, 8, 9, 9, 9,
  8, 11, 9, 10, 8, 9, 8, 10, 9, 10, 10, 10, 11, 8, 10, 9, 12, 9, 10, 12,
  11, 10, 9, 10, 10, 11, 7, 8, 10, 10, 9, 12, 10, 9, 10, 10, 14, 10, 11, 9,
  9, 8, 10, 11, 9, 11, 10, 10, 11, 9, 11, 12, 10, 9, 11, 11, 11, 10, 9, 11,
  10, 10, 11, 9, 10, 10, 10, 9, 9, 7, 10, 11, 8, 10, 10, 9, 10, 8, 9, 12,
  11, 12, 12, 9, 9, 9, 11, 8, 10, 11, 9, 11, 10, 9, 10, 9, 10, 9, 8, 8,
  9, 8, 9, 10, 10, 9, 11, 10, 8, 9, 10, 10, 10, 10, 12, 11, 9, 10, 11, 9,
];
