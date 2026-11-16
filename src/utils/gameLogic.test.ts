import test from 'node:test';
import assert from 'node:assert/strict';
import {
  INITIAL_PROGRESS,
  getSurgicalRank,
  getNextSurgicalRank,
  getStreakMultiplier,
  calculateQuestionReward,
  applyAnswerResult,
  resolveMistake,
  evaluateTriageAssignments,
  calculateBossDamage,
  validateClinicLabSelection,
  formatMedicalTextParts,
} from './gameLogic';

test('surgical rank progression matches XP thresholds', () => {
  assert.equal(getSurgicalRank(0).level, 1);
  assert.equal(getSurgicalRank(250).level, 2);
  assert.equal(getSurgicalRank(700).level, 3);
  assert.equal(getSurgicalRank(1400).level, 4);
  assert.equal(getSurgicalRank(2500).level, 5);
  assert.equal(getNextSurgicalRank(2500).nextRank, null);
  assert.equal(getNextSurgicalRank(125).progressPercent, 50);
});

test('streak multiplier activates at 3 and 5', () => {
  assert.equal(getStreakMultiplier(1), 1);
  assert.equal(getStreakMultiplier(2), 1);
  assert.equal(getStreakMultiplier(3), 2);
  assert.equal(getStreakMultiplier(5), 3);
  assert.equal(getStreakMultiplier(10), 3);
  assert.equal(calculateQuestionReward(25, 3, 10), 60);
});

test('applyAnswerResult updates XP, streak, and mistake notebook accurately', () => {
  const wrong = applyAnswerResult(INITIAL_PROGRESS, 12, false, 25);
  assert.equal(wrong.next.streak, 0);
  assert.equal(wrong.next.hearts, 4);
  assert.deepEqual(wrong.next.mistakeIds, [12]);

  const right = applyAnswerResult(wrong.next, 12, true, 25);
  assert.equal(right.next.streak, 1);
  assert.equal(right.xpDelta, 25);
  assert.deepEqual(right.next.mistakeIds, []);
  assert.deepEqual(right.next.correctIds, [12]);
});

test('resolveMistake clears mistake and grants recovery XP', () => {
  const withMistake = { ...INITIAL_PROGRESS, mistakeIds: [7, 19], hearts: 3 };
  const resolved = resolveMistake(withMistake, 7, 15);
  assert.deepEqual(resolved.mistakeIds, [19]);
  assert.equal(resolved.xp, 15);
  assert.equal(resolved.hearts, 4);
});

test('evaluateTriageAssignments scores 2 AM emergency priority accurately', () => {
  const expected = {
    p1: 'immediate_or' as const,
    p2: 'icu_resuscitate_first' as const,
    p3: 'immediate_or' as const,
  };
  const pass = evaluateTriageAssignments(
    { p1: 'immediate_or', p2: 'icu_resuscitate_first', p3: 'immediate_or' },
    expected
  );
  assert.equal(pass.allCorrect, true);
  assert.equal(pass.correctCount, 3);

  const fail = evaluateTriageAssignments(
    { p1: 'immediate_or', p2: 'immediate_or', p3: 'immediate_or' },
    expected
  );
  assert.equal(fail.allCorrect, false);
  assert.equal(fail.correctCount, 2);
});

test('boss damage and clinic budget validation work cleanly', () => {
  assert.equal(calculateBossDamage(5, 100), 80);
  assert.equal(calculateBossDamage(5, 20), 0);
  assert.equal(validateClinicLabSelection(100, 150, false).reason, 'insufficient_budget');
  assert.equal(validateClinicLabSelection(200, 50, true).reason, 'contraindicated');
  assert.equal(validateClinicLabSelection(200, 50, false).allowed, true);
});

test('formatMedicalTextParts keeps parenthesized en-dash ranges and apostrophes intact', () => {
  const parts = formatMedicalTextParts('خطر Gastric Stump Carcinoma (10–20 yrs) و Crohn’s disease');
  const enTokens = parts.filter((p) => p.type === 'en').map((p) => p.value);
  assert.deepEqual(enTokens, ['Gastric Stump Carcinoma (10–20 yrs)', 'Crohn’s disease']);
});
