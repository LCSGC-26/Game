import { describe, it } from 'node:test';
import assert from 'node:assert/strict';

import { LEGACY_PARS } from '../src/game/legacy-pars.ts';
import { migrateBestMoves, movesForStars, starsFor } from '../src/game/migrate.ts';

describe('migrating best moves to the rebuilt pack', () => {
  it('keeps the stars earned on the old board', () => {
    const oldPar = LEGACY_PARS[9];
    const best = { 10: oldPar, 11: LEGACY_PARS[10] + 1, 12: LEGACY_PARS[11] + 30 };
    const migrated = migrateBestMoves(best, (id) => 20 + id);
    assert.equal(starsFor(migrated[10], 30), 3);
    assert.equal(starsFor(migrated[11], 31), 2);
    assert.equal(starsFor(migrated[12], 32), 1);
  });

  it('leaves a level alone when its par did not change, and keeps cleared levels cleared', () => {
    const migrated = migrateBestMoves({ 1: 99, 50: 7 }, (id) => (id === 1 ? LEGACY_PARS[0] : 15));
    assert.equal(migrated[1], 99);
    assert.ok(migrated[50] !== undefined);
  });

  it('movesForStars is the smallest count that earns those stars', () => {
    for (const par of [5, 9, 14, 20]) {
      for (const stars of [1, 2, 3]) {
        const moves = movesForStars(stars, par);
        assert.equal(starsFor(moves, par), stars);
        if (stars < 3) assert.ok(starsFor(moves - 1, par) > stars);
      }
    }
  });
});
