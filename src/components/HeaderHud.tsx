import React, { useState } from 'react';
import { BookMarked, Flame, Home, RotateCcw, Volume2, VolumeX } from 'lucide-react';
import { GameProgress } from '../types/game';
import { getNextSurgicalRank, getStreakMultiplier, getSurgicalRank } from '../utils/gameLogic';

interface HeaderHudProps {
  progress: GameProgress;
  onGoHome: () => void;
  onOpenMistakes: () => void;
  onToggleMute: () => void;
  onResetProgress: () => void;
}

export const HeaderHud: React.FC<HeaderHudProps> = ({
  progress,
  onGoHome,
  onOpenMistakes,
  onToggleMute,
  onResetProgress,
}) => {
  const [confirmReset, setConfirmReset] = useState(false);
  const rank = getSurgicalRank(progress.xp);
  const { nextRank, progressPercent } = getNextSurgicalRank(progress.xp);
  const mult = getStreakMultiplier(progress.streak);

  const stabilityPct = Math.round((progress.hearts / progress.maxHearts) * 100);
  const ecgColor =
    progress.hearts >= 4 ? '#00F5D4' : progress.hearts >= 2 ? '#FFD166' : '#FF4D6D';

  return (
    <header className="sticky top-0 z-40 bg-[#0A1128]/90 backdrop-blur-md border-b border-white/12 shadow-lg">
      <div className="max-w-7xl mx-auto px-3 md:px-6 py-2.5 flex flex-wrap items-center justify-between gap-3">
        {/* Brand & Back to Title */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={onGoHome}
            aria-label="العودة لشاشة البداية"
            className="p-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-white transition-colors cursor-pointer"
          >
            <Home className="w-4 h-4" />
          </button>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-black text-base md:text-lg text-white whitespace-nowrap">
                دكتور المعدة
              </span>
              <span className="font-en text-xs font-bold text-[#FF4D6D]" dir="ltr">
                Dr. Stomach
              </span>
            </div>
            <div className="text-xs text-slate-300 flex items-center gap-1.5">
              <span>{rank.emoji}</span>
              <span className="font-semibold text-[#FFD166]">{rank.title}</span>
            </div>
          </div>
        </div>

        {/* Center Metrics: XP, Streak, ECG Stability */}
        <div className="flex flex-wrap items-center gap-3 md:gap-5">
          {/* XP & Rank Progress */}
          <div className="flex flex-col min-w-[130px] md:min-w-[165px]">
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-slate-300">النقاط</span>
              <span className="font-mono-num font-bold text-[#00F5D4]" data-testid="hud-xp">
                {progress.xp} XP
              </span>
            </div>
            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
              <div
                className="h-full bg-gradient-to-l from-[#00F5D4] to-[#FFD166] transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {nextRank && (
              <div className="text-[10px] text-slate-400 mt-0.5 truncate">
                الترقية: {nextRank.title} ({nextRank.minXp})
              </div>
            )}
          </div>

          {/* Streak Counter */}
          <div
            className={`px-3 py-1.5 rounded-xl border flex items-center gap-2 transition-colors ${
              progress.streak >= 3
                ? 'bg-[#FF9E00]/20 border-[#FF9E00]/60 text-[#FFD166]'
                : 'bg-white/6 border-white/10 text-slate-200'
            }`}
            data-testid="hud-streak"
          >
            <Flame
              className={`w-4 h-4 ${
                progress.streak >= 3 ? 'text-[#FF9E00] fill-[#FF9E00]' : 'text-slate-400'
              }`}
            />
            <div className="leading-tight">
              <div className="font-mono-num font-bold text-sm">{progress.streak}</div>
              <div className="text-[10px] text-slate-300">
                {mult > 1 ? `${mult}x XP` : 'حماس'}
              </div>
            </div>
          </div>

          {/* Patient Stability & ECG */}
          <div className="px-3 py-1.5 rounded-xl bg-white/6 border border-white/10 flex items-center gap-2.5">
            <svg width="46" height="22" viewBox="0 0 60 24" className="shrink-0" aria-hidden="true">
              <polyline
                fill="none"
                stroke={ecgColor}
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ecg-line"
                points="0,12 12,12 16,6 20,18 24,2 28,21 32,12 44,12 48,8 52,12 60,12"
              />
            </svg>
            <div className="leading-tight">
              <div className="flex items-center gap-0.5 text-xs" aria-label={`استقرار المريض ${progress.hearts} من ${progress.maxHearts}`}>
                {Array.from({ length: progress.maxHearts }).map((_, i) => (
                  <span key={i} className={i < progress.hearts ? 'opacity-100' : 'opacity-25'}>
                    ❤️
                  </span>
                ))}
              </div>
              <div className="text-[10px] font-mono-num text-slate-300">
                Vital {stabilityPct}%
              </div>
            </div>
          </div>
        </div>

        {/* Right Controls: Mistake Notebook, Audio, Reset */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            type="button"
            onClick={onOpenMistakes}
            className="btn-3d px-3 py-2 rounded-xl bg-[#FF4D6D]/20 hover:bg-[#FF4D6D]/30 border border-[#FF4D6D]/50 text-white text-xs font-bold flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
          >
            <BookMarked className="w-4 h-4 text-[#FF4D6D]" />
            <span>أوضة الإنعاش</span>
            <span
              className="px-1.5 py-0.5 rounded-md bg-[#FF4D6D] text-white font-mono-num text-[11px]"
              data-testid="mistake-count"
            >
              {progress.mistakeIds.length}
            </span>
          </button>

          <button
            type="button"
            onClick={onToggleMute}
            aria-label={progress.soundMuted ? 'تشغيل الصوت' : 'كتم الصوت'}
            className="p-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-slate-200 transition-colors cursor-pointer"
          >
            {progress.soundMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4 text-[#00F5D4]" />}
          </button>

          {confirmReset ? (
            <div className="flex items-center gap-1 bg-rose-950/90 border border-rose-500/40 rounded-xl px-2 py-1">
              <button
                type="button"
                onClick={() => {
                  onResetProgress();
                  setConfirmReset(false);
                }}
                className="text-[11px] font-bold text-rose-300 hover:text-white px-1.5 py-0.5 cursor-pointer"
              >
                تأكيد المسح
              </button>
              <button
                type="button"
                onClick={() => setConfirmReset(false)}
                className="text-[11px] text-slate-300 hover:text-white px-1 py-0.5 cursor-pointer"
              >
                إلغاء
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => setConfirmReset(true)}
              aria-label="إعادة ضبط التقدم"
              className="p-2 rounded-xl bg-white/8 hover:bg-white/15 border border-white/10 text-slate-300 hover:text-rose-300 transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
