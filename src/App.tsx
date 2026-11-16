import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Chapter0Recap } from './components/Chapter0Recap';
import { Chapter3Clinic } from './components/Chapter3Clinic';
import { Chapter4Differentiation } from './components/Chapter4Differentiation';
import { Chapter6MiniGames } from './components/Chapter6MiniGames';
import { Chapter7NightShift } from './components/Chapter7NightShift';
import { Chapter8FinalBoss } from './components/Chapter8FinalBoss';
import { FeedbackModal } from './components/FeedbackModal';
import { HeaderHud } from './components/HeaderHud';
import { McqArena } from './components/McqArena';
import { MistakeNotebook } from './components/MistakeNotebook';
import { TitleScreen } from './components/TitleScreen';
import { ALL_QUESTIONS } from './data/questionsData';
import { CHAPTER_META, getRandomPraise, getRandomRoast } from './data/roastsAndPraise';
import { ChapterId, GameProgress, Question } from './types/game';
import { soundEngine } from './utils/audioEngine';
import { launchConfettiBurst } from './utils/confetti';
import {
  INITIAL_PROGRESS,
  applyAnswerResult,
  resolveMistake,
} from './utils/gameLogic';

const STORAGE_KEY = 'dr_stomach_ch30_progress_v1';

function loadSavedProgress(): GameProgress {
  if (typeof window === 'undefined') return INITIAL_PROGRESS;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return INITIAL_PROGRESS;
    const parsed = JSON.parse(raw) as Partial<GameProgress>;
    return {
      ...INITIAL_PROGRESS,
      ...parsed,
      answeredIds: Array.isArray(parsed.answeredIds) ? parsed.answeredIds : [],
      correctIds: Array.isArray(parsed.correctIds) ? parsed.correctIds : [],
      mistakeIds: Array.isArray(parsed.mistakeIds) ? parsed.mistakeIds : [],
      completedClinicIds: Array.isArray(parsed.completedClinicIds) ? parsed.completedClinicIds : [],
      completedChapters: Array.isArray(parsed.completedChapters) ? parsed.completedChapters : [],
    };
  } catch {
    return INITIAL_PROGRESS;
  }
}

export default function App() {
  const [progress, setProgress] = useState<GameProgress>(() => loadSavedProgress());
  const [screen, setScreen] = useState<'title' | 'playing' | 'mistakes'>(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('autostart') === '1') {
        return 'playing';
      }
    }
    return 'title';
  });
  const [activeChapter, setActiveChapter] = useState<ChapterId>(0);
  const [shaking, setShaking] = useState(false);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    isCorrect: boolean;
    headline: string;
    explanation: string;
    correctOptionText?: string;
    xpEarned: number;
    streak: number;
  }>({
    isOpen: false,
    isCorrect: true,
    headline: '',
    explanation: '',
    xpEarned: 0,
    streak: 0,
  });

  // Sync mute state
  useEffect(() => {
    soundEngine.muted = progress.soundMuted;
  }, [progress.soundMuted]);

  // Persist to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Ignore storage quota errors
    }
  }, [progress]);

  // Mirror game state on document.body.dataset.state
  useEffect(() => {
    if (screen === 'title') {
      document.body.dataset.state = 'title';
    } else if (progress.bossDefeated && activeChapter === 8) {
      document.body.dataset.state = 'gameover';
    } else {
      document.body.dataset.state = 'playing';
    }
  }, [screen, progress.bossDefeated, activeChapter]);

  const startGame = useCallback(() => {
    soundEngine.playClick();
    setScreen('playing');
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  }, []);

  // Enter / Space on Title Screen starts the game
  useEffect(() => {
    if (screen !== 'title') return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT') {
        if (e.key === 'Enter') {
          startGame();
        }
        return;
      }
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        startGame();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [screen, startGame]);

  const triggerWrongEffects = useCallback(() => {
    soundEngine.playWrong();
    setShaking(true);
    window.setTimeout(() => setShaking(false), 450);
  }, []);

  const handleMcqAnswer = useCallback(
    (question: Question, selectedIdx: number, speedBonus = 0, showFeedbackModal = true) => {
      const isCorrect = selectedIdx === question.a;
      const { next, xpDelta, milestoneHit } = applyAnswerResult(
        progress,
        question.id,
        isCorrect,
        25,
        speedBonus
      );
      setProgress(next);

      if (isCorrect) {
        soundEngine.playCorrect(next.streak);
        if (milestoneHit) {
          launchConfettiBurst(next.streak >= 5 ? 'epic' : 'normal');
        }
      } else {
        triggerWrongEffects();
      }

      if (showFeedbackModal) {
        setModalState({
          isOpen: true,
          isCorrect,
          headline: isCorrect ? getRandomPraise() : getRandomRoast(),
          explanation: question.exp,
          correctOptionText: !isCorrect ? question.o[question.a] : undefined,
          xpEarned: xpDelta,
          streak: next.streak,
        });
      }
    },
    [progress, triggerWrongEffects]
  );

  const handleCustomEvent = useCallback(
    (questionId: number | undefined, isCorrect: boolean, customExp?: string) => {
      const fallbackId = questionId ?? Math.floor(Math.random() * 10000 + 900);
      const { next, xpDelta, milestoneHit } = applyAnswerResult(
        progress,
        fallbackId,
        isCorrect,
        30,
        0
      );

      // Avoid polluting mistake notebook with synthetic IDs if not in ALL_QUESTIONS
      if (questionId === undefined && !isCorrect) {
        next.mistakeIds = progress.mistakeIds;
      }
      setProgress(next);

      if (isCorrect) {
        soundEngine.playCorrect(next.streak);
        if (milestoneHit) {
          launchConfettiBurst(next.streak >= 5 ? 'epic' : 'normal');
        }
      } else {
        triggerWrongEffects();
      }

      const linkedQ = questionId ? ALL_QUESTIONS.find((q) => q.id === questionId) : undefined;
      setModalState({
        isOpen: true,
        isCorrect,
        headline: isCorrect ? getRandomPraise() : getRandomRoast(),
        explanation: customExp || linkedQ?.exp || '',
        correctOptionText: !isCorrect && linkedQ ? linkedQ.o[linkedQ.a] : undefined,
        xpEarned: xpDelta,
        streak: next.streak,
      });
    },
    [progress, triggerWrongEffects]
  );

  const handleBossAnswer = useCallback(
    (question: Question, selectedIdx: number, nextBossHp: number, bossDefeatedNow: boolean) => {
      const isCorrect = selectedIdx === question.a;
      const { next, xpDelta } = applyAnswerResult(progress, question.id, isCorrect, 50, 0);
      setProgress({
        ...next,
        bossHp: nextBossHp,
        bossDefeated: bossDefeatedNow || next.bossDefeated,
      });

      if (isCorrect) {
        if (!bossDefeatedNow) {
          soundEngine.playCorrect(next.streak);
        }
      } else {
        triggerWrongEffects();
      }

      if (!bossDefeatedNow) {
        setModalState({
          isOpen: true,
          isCorrect,
          headline: isCorrect ? getRandomPraise() : getRandomRoast(),
          explanation: question.exp,
          correctOptionText: !isCorrect ? question.o[question.a] : undefined,
          xpEarned: xpDelta,
          streak: next.streak,
        });
      }
    },
    [progress, triggerWrongEffects]
  );

  const ch1Questions = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 1), []);
  const ch2Questions = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 2), []);
  const ch4Duels = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 4 && q.id <= 59), []);
  const ch4Speed = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 4 && q.id >= 60), []);
  const ch5Questions = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 5), []);
  const ch8Questions = useMemo(() => ALL_QUESTIONS.filter((q) => q.ch === 8), []);

  const mistakeQuestions = useMemo(
    () => ALL_QUESTIONS.filter((q) => progress.mistakeIds.includes(q.id)),
    [progress.mistakeIds]
  );

  if (screen === 'title') {
    return (
      <TitleScreen
        playerName={progress.playerName}
        onChangeName={(name) => setProgress((p) => ({ ...p, playerName: name }))}
        onStart={startGame}
        savedXp={progress.xp}
        answeredCount={progress.answeredIds.length}
        totalQuestions={ALL_QUESTIONS.length}
      />
    );
  }

  return (
    <div className={`min-h-screen flex flex-col ${shaking ? 'animate-shake' : ''}`}>
      <HeaderHud
        progress={progress}
        onGoHome={() => setScreen('title')}
        onOpenMistakes={() => setScreen('mistakes')}
        onToggleMute={() => setProgress((p) => ({ ...p, soundMuted: !p.soundMuted }))}
        onResetProgress={() => {
          setProgress(INITIAL_PROGRESS);
          setActiveChapter(0);
          setScreen('playing');
        }}
      />

      {screen === 'mistakes' ? (
        <main className="flex-1 py-4">
          <MistakeNotebook
            mistakeQuestions={mistakeQuestions}
            onResolveMistake={(qId) => {
              soundEngine.playCorrect(2);
              setProgress((p) => resolveMistake(p, qId, 15));
            }}
            onWrongAgain={() => {
              triggerWrongEffects();
              setProgress((p) => ({ ...p, hearts: Math.max(1, p.hearts - 1), streak: 0 }));
            }}
            onClose={() => setScreen('playing')}
          />
        </main>
      ) : (
        <main className="flex-1 max-w-7xl w-full mx-auto px-3 md:px-6 py-5 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Sidebar / Chapter Navigation */}
          <aside className="lg:col-span-3 glass-card-3d p-4 lg:sticky lg:top-24">
            <div className="flex items-center justify-between mb-3 px-1">
              <h2 className="text-sm font-black text-[#00F5D4]">خريطة الشابتر (9 مراحل)</h2>
              <span className="font-mono-num text-xs text-slate-300">
                {progress.correctIds.length}/{ALL_QUESTIONS.length}
              </span>
            </div>

            <nav className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0">
              {CHAPTER_META.map((ch) => {
                const isActive = activeChapter === ch.id;
                return (
                  <button
                    key={ch.id}
                    type="button"
                    onClick={() => {
                      soundEngine.playClick();
                      setActiveChapter(ch.id as ChapterId);
                    }}
                    className={`text-right px-3.5 py-2.5 rounded-xl border transition-all flex items-center gap-2.5 shrink-0 lg:shrink cursor-pointer ${
                      isActive
                        ? 'bg-gradient-to-l from-[#FF4D6D]/25 to-[#FF9E00]/20 border-[#FF4D6D] text-white shadow-md'
                        : 'bg-white/5 hover:bg-white/10 border-white/8 text-slate-200'
                    }`}
                  >
                    <span className="text-base shrink-0">{ch.icon}</span>
                    <div className="min-w-0">
                      <div className="text-xs font-black truncate">{ch.short}</div>
                      <div className="text-[10px] text-slate-400 hidden lg:block truncate">
                        {ch.subtitle}
                      </div>
                    </div>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* Main Active Chapter Stage */}
          <section className="lg:col-span-9 min-w-0">
            {activeChapter === 0 && (
              <Chapter0Recap
                onCardReviewed={() => {
                  soundEngine.playCorrect(1);
                  setProgress((p) => ({ ...p, xp: p.xp + 10 }));
                }}
                onNextChapter={() => setActiveChapter(1)}
              />
            )}

            {activeChapter === 1 && (
              <McqArena
                chapterTitle="🧠 Chapter 1: تعرفني قد إيه؟ (Surgical Anatomy & Physiology)"
                chapterSubtitle="التشريح الجراحي، الأعصاب، الشرايين، الليمفاويات، وفسيولوجيا الإفراز (1–18 + تغطية الكتاب)"
                questions={ch1Questions}
                correctIds={progress.correctIds}
                mistakeIds={progress.mistakeIds}
                onAnswer={(q, idx) => handleMcqAnswer(q, idx)}
                onChapterCompleteNext={() => setActiveChapter(2)}
                nextChapterLabel="ادخل على Chapter 2 ⬅"
              />
            )}

            {activeChapter === 2 && (
              <McqArena
                chapterTitle="📖 Chapter 2: مين أنا؟ (Pathology, Classifications & Pharmacology)"
                chapterSubtitle="الباثولوجي، تقسيمة القرح I–V، الـ P-CAB Vonoprazan، الزوائد، والأورام (19–33 + تغطية الكتاب)"
                questions={ch2Questions}
                correctIds={progress.correctIds}
                mistakeIds={progress.mistakeIds}
                onAnswer={(q, idx) => handleMcqAnswer(q, idx)}
                onChapterCompleteNext={() => setActiveChapter(3)}
                nextChapterLabel="ادخل على العيادة (Chapter 3) ⬅"
              />
            )}

            {activeChapter === 3 && (
              <Chapter3Clinic
                completedClinicIds={progress.completedClinicIds}
                onStationScore={handleCustomEvent}
                onCaseComplete={(caseId) => {
                  setProgress((p) => ({
                    ...p,
                    completedClinicIds: p.completedClinicIds.includes(caseId)
                      ? p.completedClinicIds
                      : [...p.completedClinicIds, caseId],
                  }));
                }}
              />
            )}

            {activeChapter === 4 && (
              <Chapter4Differentiation
                duelQuestions={ch4Duels}
                speedQuestions={ch4Speed}
                correctIds={progress.correctIds}
                onAnswer={(q, idx, speedBonus) =>
                  handleMcqAnswer(q, idx, speedBonus ?? 0, q.id <= 59)
                }
              />
            )}

            {activeChapter === 5 && (
              <McqArena
                chapterTitle="⚠️ Chapter 5: المضاعفات والـ Prognosis (Post-Op & Bariatric Outcomes)"
                chapterSubtitle="Duodenal blow-out، ارتجاع الصفراء، الإسهال، Gastrostomy، وشروط السمنة (69–80 + تغطية الكتاب)"
                questions={ch5Questions}
                correctIds={progress.correctIds}
                mistakeIds={progress.mistakeIds}
                onAnswer={(q, idx) => handleMcqAnswer(q, idx)}
                onChapterCompleteNext={() => setActiveChapter(6)}
                nextChapterLabel="ادخل على الألعاب الخاصة (Chapter 6) ⬅"
              />
            )}

            {activeChapter === 6 && (
              <Chapter6MiniGames onScoreEvent={handleCustomEvent} />
            )}

            {activeChapter === 7 && (
              <Chapter7NightShift onScoreEvent={handleCustomEvent} />
            )}

            {activeChapter === 8 && (
              <Chapter8FinalBoss
                bossQuestions={ch8Questions}
                progress={progress}
                onBossAnswer={handleBossAnswer}
                onResetBoss={() =>
                  setProgress((p) => ({ ...p, bossHp: 100, bossDefeated: false }))
                }
              />
            )}
          </section>
        </main>
      )}

      <FeedbackModal
        isOpen={modalState.isOpen}
        isCorrect={modalState.isCorrect}
        headline={modalState.headline}
        explanation={modalState.explanation}
        correctOptionText={modalState.correctOptionText}
        xpEarned={modalState.xpEarned}
        streak={modalState.streak}
        onContinue={() => setModalState((m) => ({ ...m, isOpen: false }))}
        continueLabel="متابعة التحدي"
      />
    </div>
  );
}
