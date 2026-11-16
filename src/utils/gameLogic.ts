import { GameProgress, SurgicalRank } from '../types/game';

export const SURGICAL_RANKS: SurgicalRank[] = [
  { level: 1, title: 'امتياز تايه', emoji: '🩺', minXp: 0 },
  { level: 2, title: 'نايب طوارئ مطحون', emoji: '🚑', minXp: 250 },
  { level: 3, title: 'أخصائي جراحة شاطر', emoji: '🔪', minXp: 700 },
  { level: 4, title: 'استشاري جراحة تقيل', emoji: '🎖️', minXp: 1400 },
  { level: 5, title: 'علّامة الجراحة ورئيس القسم', emoji: '👑', minXp: 2300 },
];

export const INITIAL_PROGRESS: GameProgress = {
  playerName: 'دكتور المستقبل',
  xp: 0,
  streak: 0,
  bestStreak: 0,
  hearts: 5,
  maxHearts: 5,
  answeredIds: [],
  correctIds: [],
  mistakeIds: [],
  completedClinicIds: [],
  completedChapters: [],
  bossHp: 100,
  bossMaxHp: 100,
  bossDefeated: false,
  soundMuted: false,
};

export function getSurgicalRank(xp: number): SurgicalRank {
  let current = SURGICAL_RANKS[0];
  for (const rank of SURGICAL_RANKS) {
    if (xp >= rank.minXp) {
      current = rank;
    }
  }
  return current;
}

export function getNextSurgicalRank(xp: number): {
  nextRank: SurgicalRank | null;
  progressPercent: number;
} {
  const current = getSurgicalRank(xp);
  const idx = SURGICAL_RANKS.findIndex((r) => r.level === current.level);
  const next = idx >= 0 && idx < SURGICAL_RANKS.length - 1 ? SURGICAL_RANKS[idx + 1] : null;
  if (!next) {
    return { nextRank: null, progressPercent: 100 };
  }
  const span = Math.max(1, next.minXp - current.minXp);
  const gained = Math.max(0, xp - current.minXp);
  return {
    nextRank: next,
    progressPercent: Math.min(100, Math.round((gained / span) * 100)),
  };
}

export function getStreakMultiplier(streak: number): number {
  if (streak >= 10) return 3;
  if (streak >= 5) return 3;
  if (streak >= 3) return 2;
  return 1;
}

export function isStreakMilestone(streak: number): boolean {
  return streak === 3 || streak === 5 || streak === 10 || (streak > 10 && streak % 5 === 0);
}

export function calculateQuestionReward(
  baseXp: number,
  newStreak: number,
  speedBonus = 0
): number {
  const mult = getStreakMultiplier(newStreak);
  return Math.round(baseXp * mult + speedBonus);
}

export function applyAnswerResult(
  progress: GameProgress,
  questionId: number,
  isCorrect: boolean,
  baseXp = 25,
  speedBonus = 0
): { next: GameProgress; xpDelta: number; milestoneHit: boolean } {
  const answeredSet = new Set(progress.answeredIds);
  answeredSet.add(questionId);

  const correctSet = new Set(progress.correctIds);
  const mistakeSet = new Set(progress.mistakeIds);

  if (isCorrect) {
    const nextStreak = progress.streak + 1;
    const xpDelta = calculateQuestionReward(baseXp, nextStreak, speedBonus);
    correctSet.add(questionId);
    mistakeSet.delete(questionId);
    const nextHearts = Math.min(progress.maxHearts, progress.hearts + (nextStreak % 5 === 0 ? 1 : 0));
    return {
      next: {
        ...progress,
        xp: progress.xp + xpDelta,
        streak: nextStreak,
        bestStreak: Math.max(progress.bestStreak, nextStreak),
        hearts: nextHearts,
        answeredIds: Array.from(answeredSet),
        correctIds: Array.from(correctSet),
        mistakeIds: Array.from(mistakeSet),
      },
      xpDelta,
      milestoneHit: isStreakMilestone(nextStreak),
    };
  }

  mistakeSet.add(questionId);
  return {
    next: {
      ...progress,
      streak: 0,
      hearts: Math.max(1, progress.hearts - 1),
      answeredIds: Array.from(answeredSet),
      mistakeIds: Array.from(mistakeSet),
    },
    xpDelta: 0,
    milestoneHit: false,
  };
}

export function resolveMistake(
  progress: GameProgress,
  questionId: number,
  bonusXp = 15
): GameProgress {
  const mistakeSet = new Set(progress.mistakeIds);
  mistakeSet.delete(questionId);
  const correctSet = new Set(progress.correctIds);
  correctSet.add(questionId);
  return {
    ...progress,
    xp: progress.xp + bonusXp,
    hearts: Math.min(progress.maxHearts, progress.hearts + 1),
    correctIds: Array.from(correctSet),
    mistakeIds: Array.from(mistakeSet),
  };
}

export function evaluateTriageAssignments(
  assignments: Record<string, 'immediate_or' | 'icu_resuscitate_first'>,
  expected: Record<string, 'immediate_or' | 'icu_resuscitate_first'>
): { allCorrect: boolean; correctCount: number; total: number } {
  const keys = Object.keys(expected);
  let correctCount = 0;
  for (const key of keys) {
    if (assignments[key] === expected[key]) {
      correctCount += 1;
    }
  }
  return {
    allCorrect: correctCount === keys.length && keys.length > 0,
    correctCount,
    total: keys.length,
  };
}

export function calculateBossDamage(totalBossQuestions: number, currentHp: number): number {
  const step = Math.ceil(100 / Math.max(1, totalBossQuestions));
  return Math.max(0, currentHp - step);
}

export function validateClinicLabSelection(
  remainingBudget: number,
  cost: number,
  isContraindicated?: boolean
): { allowed: boolean; reason: 'ok' | 'insufficient_budget' | 'contraindicated' } {
  if (isContraindicated) {
    return { allowed: false, reason: 'contraindicated' };
  }
  if (cost > remainingBudget) {
    return { allowed: false, reason: 'insufficient_budget' };
  }
  return { allowed: true, reason: 'ok' };
}

export function formatMedicalTextParts(text: string): Array<{ type: 'ar' | 'en'; value: string }> {
  // Split out Latin/medical phrases (2+ chars starting with ASCII letter, keeping en-dash ranges and typographic apostrophes intact)
  const regex = /([A-Za-z][A-Za-z0-9\s\-+\u2013\u2019\u00B2/.()'&%:,<>]*[A-Za-z0-9)%+\u00B2])/g;
  const parts: Array<{ type: 'ar' | 'en'; value: string }> = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'ar', value: text.slice(lastIndex, match.index) });
    }
    const token = match[0].trim();
    if (token.length >= 2) {
      parts.push({ type: 'en', value: token });
    } else {
      parts.push({ type: 'ar', value: match[0] });
    }
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push({ type: 'ar', value: text.slice(lastIndex) });
  }
  return parts;
}
