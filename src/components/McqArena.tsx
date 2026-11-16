import React, { useEffect, useState } from 'react';
import { CheckCircle2, HelpCircle, Lightbulb, Sparkles, XCircle } from 'lucide-react';
import { Question } from '../types/game';
import { MedicalText } from './MedicalText';

interface McqArenaProps {
  chapterTitle: string;
  chapterSubtitle: string;
  questions: Question[];
  correctIds: number[];
  mistakeIds: number[];
  onAnswer: (question: Question, selectedIdx: number) => void;
  onChapterCompleteNext?: () => void;
  nextChapterLabel?: string;
}

export const McqArena: React.FC<McqArenaProps> = ({
  chapterTitle,
  chapterSubtitle,
  questions,
  correctIds,
  mistakeIds,
  onAnswer,
  onChapterCompleteNext,
  nextChapterLabel,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);

  // Reset index when switching chapters
  useEffect(() => {
    setCurrentIndex(0);
    setShowHint(false);
  }, [chapterTitle]);

  const currentQ = questions[currentIndex];
  if (!currentQ) return null;

  const solvedCount = questions.filter((q) => correctIds.includes(q.id)).length;
  const isAlreadyCorrect = correctIds.includes(currentQ.id);
  const isMistake = mistakeIds.includes(currentQ.id);

  const handleSelect = (idx: number) => {
    setShowHint(false);
    onAnswer(currentQ, idx);
  };

  return (
    <div className="space-y-5">
      {/* Chapter Header & Progress */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white">{chapterTitle}</h2>
            <p className="text-xs md:text-sm text-slate-300 mt-0.5">{chapterSubtitle}</p>
          </div>
          <div className="text-left">
            <div className="font-mono-num text-sm font-bold text-[#00F5D4]">
              {solvedCount} / {questions.length} متقن
            </div>
            <div className="text-[11px] text-slate-400">
              السؤال الحالي #{currentQ.id}
            </div>
          </div>
        </div>

        {/* Question Stepper Pills */}
        <div className="flex flex-wrap gap-1.5">
          {questions.map((q, idx) => {
            const ok = correctIds.includes(q.id);
            const bad = mistakeIds.includes(q.id);
            const active = idx === currentIndex;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => {
                  setCurrentIndex(idx);
                  setShowHint(false);
                }}
                aria-label={`سؤال رقم ${q.id}`}
                className={`h-8 min-w-[34px] px-2 rounded-lg font-mono-num text-xs font-bold transition-all cursor-pointer border ${
                  active
                    ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4] scale-105'
                    : ok
                    ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                    : bad
                    ? 'bg-rose-500/20 text-rose-300 border-rose-400/40'
                    : 'bg-white/6 text-slate-300 border-white/10 hover:bg-white/12'
                }`}
              >
                {q.id}
              </button>
            );
          })}
        </div>
      </div>

      {/* Question Card */}
      <div className="glass-card-3d p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2 text-xs text-slate-300">
            <span className="font-mono-num font-bold text-[#FFD166]">Q{currentQ.id}</span>
            <span aria-hidden="true">·</span>
            <span className="font-en text-cyan-200">{currentQ.tag}</span>
            {isAlreadyCorrect && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#00F5D4] font-bold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>محلول صح</span>
                </span>
              </>
            )}
            {isMistake && (
              <>
                <span aria-hidden="true">·</span>
                <span className="text-[#FF4D6D] font-bold flex items-center gap-1">
                  <XCircle className="w-3.5 h-3.5" />
                  <span>في أوضة الإنعاش</span>
                </span>
              </>
            )}
          </div>

          {currentQ.hint && (
            <button
              type="button"
              onClick={() => setShowHint((s) => !s)}
              className="px-3 py-1.5 rounded-xl bg-[#FFD166]/15 hover:bg-[#FFD166]/25 border border-[#FFD166]/40 text-[#FFD166] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Lightbulb className="w-3.5 h-3.5" />
              <span>{showHint ? 'إخفاء التلميح' : 'تلميح ذكي'}</span>
            </button>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed mb-5">
          <MedicalText text={currentQ.q} />
        </h3>

        {showHint && currentQ.hint && (
          <div className="mb-5 p-3.5 rounded-xl bg-[#FFD166]/10 border border-[#FFD166]/35 text-sm text-[#FFE8A3] flex items-start gap-2">
            <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-[#FFD166]" />
            <span>
              <MedicalText text={currentQ.hint} />
            </span>
          </div>
        )}

        <div className="grid grid-cols-1 gap-3">
          {currentQ.o.map((opt, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              className="btn-3d text-right p-4 md:p-4.5 rounded-2xl bg-[#0D1E45]/90 hover:bg-[#13295E] border border-white/14 hover:border-[#00F5D4]/60 text-white transition-all flex items-start gap-3.5 cursor-pointer"
            >
              <span className="font-mono-num font-black text-sm w-8 h-8 rounded-xl bg-white/10 text-[#00F5D4] flex items-center justify-center shrink-0">
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="text-sm md:text-base font-semibold leading-relaxed pt-0.5">
                <MedicalText text={opt} />
              </span>
            </button>
          ))}
        </div>

        {/* Footer Controls */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentIndex === 0}
              onClick={() => {
                setCurrentIndex((i) => Math.max(0, i - 1));
                setShowHint(false);
              }}
              className="px-4 py-2 rounded-xl bg-white/8 hover:bg-white/15 disabled:opacity-40 text-xs font-bold text-white cursor-pointer"
            >
              السؤال السابق
            </button>
            <button
              type="button"
              disabled={currentIndex === questions.length - 1}
              onClick={() => {
                setCurrentIndex((i) => Math.min(questions.length - 1, i + 1));
                setShowHint(false);
              }}
              className="px-4 py-2 rounded-xl bg-white/8 hover:bg-white/15 disabled:opacity-40 text-xs font-bold text-white cursor-pointer"
            >
              السؤال التالي
            </button>
          </div>

          {onChapterCompleteNext && (
            <button
              type="button"
              onClick={onChapterCompleteNext}
              className="px-4 py-2 rounded-xl bg-[#00F5D4]/15 hover:bg-[#00F5D4]/25 border border-[#00F5D4]/40 text-[#00F5D4] text-xs font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{nextChapterLabel || 'المرحلة التالية'}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
