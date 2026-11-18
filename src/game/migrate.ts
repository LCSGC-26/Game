/**
 * Save migration for rebuilt levels.
 *
 * 1.2.0 rebuilt levels 4 to 200 so they need more planning. A save's best
 * move counts for those levels were set on the old boards, so they cannot be
 * compared with the new pars. Each one is replaced with the fewest moves that
 * earn, on the new board, the same stars the player had on the old one: a
 * cleared level stays cleared, and no star, goal or gold pot is lost.
 */

import { LEGACY_PARS } from './legacy-pars.ts';

export function starsFor(moves: number, par: number): number {
  if (moves <= par) return 3;
  if (moves <= par + Math.max(2, Math.ceil(par * 0.4))) return 2;
  return 1;
}

/** The fewest moves that earn exactly `stars` against `par`. */
export function movesForStars(stars: number, par: number): number {
  if (stars >= 3) return par;
  if (stars === 2) return par + 1;
  return par + Math.max(2, Math.ceil(par * 0.4)) + 1;
}

/**
 * Rewrites best move counts set on version-1 boards. `newPar` gives the
 * current pack's par; a level whose par did not change is left alone.
 */
export function migrateBestMoves(
  bestMoves: Record<number, number>,
  newPar: (levelId: number) => number | null,
): Record<number, number> {
  const out: Record<number, number> = {};
  for (const [key, moves] of Object.entries(bestMoves)) {
    const id = Number(key);
    const oldPar = LEGACY_PARS[id - 1];
    const par = newPar(id);
    if (oldPar === undefined || par === null || par === oldPar) {
      out[id] = moves;
      continue;
    }
    out[id] = movesForStars(starsFor(moves, oldPar), par);
  }
  return out;
}
