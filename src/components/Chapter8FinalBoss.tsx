import React, { useState } from 'react';
import { Award, Crown, Printer, Shield, Swords } from 'lucide-react';
import { GameProgress, Question } from '../types/game';
import { calculateBossDamage, getSurgicalRank } from '../utils/gameLogic';
import { launchConfettiBurst } from '../utils/confetti';
import { soundEngine } from '../utils/audioEngine';
import { MedicalText } from './MedicalText';
import { StomachMascotSvg } from './SvgMedicalArt';

interface Chapter8FinalBossProps {
  bossQuestions: Question[];
  progress: GameProgress;
  onBossAnswer: (question: Question, selectedIdx: number, nextBossHp: number, bossDefeatedNow: boolean) => void;
  onResetBoss: () => void;
}

export const Chapter8FinalBoss: React.FC<Chapter8FinalBossProps> = ({
  bossQuestions,
  progress,
  onBossAnswer,
  onResetBoss,
}) => {
  const [phaseIdx, setPhaseIdx] = useState(0);
  const [localBossHp, setLocalBossHp] = useState(progress.bossHp);

  const currentQ = bossQuestions[phaseIdx];
  const rank = getSurgicalRank(progress.xp);
  const totalCorrect = progress.correctIds.length;
  const totalAnswered = Math.max(1, progress.answeredIds.length);
  const accuracy = Math.round((totalCorrect / totalAnswered) * 100);

  const handleStrike = (idx: number) => {
    if (!currentQ || progress.bossDefeated) return;
    const isCorrect = idx === currentQ.a;
    const nextHp = isCorrect
      ? calculateBossDamage(bossQuestions.length, localBossHp)
      : localBossHp;

    const defeatedNow = isCorrect && (nextHp <= 0 || phaseIdx === bossQuestions.length - 1);
    const finalHp = defeatedNow ? 0 : nextHp;
    setLocalBossHp(finalHp);

    if (defeatedNow) {
      soundEngine.playVictoryFanfare();
      launchConfettiBurst('epic');
    }

    onBossAnswer(currentQ, idx, finalHp, defeatedNow);

    if (isCorrect && phaseIdx < bossQuestions.length - 1) {
      setPhaseIdx((i) => i + 1);
    }
  };

  if (progress.bossDefeated) {
    return (
      <div className="glass-card-3d p-6 md:p-10 text-center space-y-6 border-2 border-[#FFD166]">
        <div className="flex justify-center">
          <StomachMascotSvg mood="happy" size={140} />
        </div>

        <div className="inline-flex items-center gap-2 text-[#FFD166] font-black text-sm">
          <Crown className="w-5 h-5" />
          <span>مبروك! هزمت وحش امتحان السنين السبع</span>
        </div>

        {/* Consultant Certificate Card */}
        <div
          id="consultant-certificate"
          className="max-w-2xl mx-auto rounded-3xl bg-gradient-to-br from-[#0E1E46] via-[#0A1128] to-[#0E244D] border-2 border-[#FFD166]/80 p-6 md:p-8 shadow-2xl space-y-4"
        >
          <div className="flex items-center justify-center gap-2 text-[#00F5D4] font-bold text-xs tracking-wider">
            <Award className="w-5 h-5" />
            <span>GENERAL SURGERY · CHAPTER 30 MASTERY CERTIFICATE</span>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#FFD166]">
            شهادة استشاري الجراحة المعتمد
          </h2>

          <p className="text-sm text-slate-300">تشهد عيادة دكتور المعدة بأن الجراح المتميز</p>

          <div className="text-2xl md:text-3xl font-black text-white py-2 border-y border-white/15">
            {progress.playerName || 'دكتور المستقبل'}
          </div>

          <p className="text-sm text-slate-200 leading-relaxed">
            قد أتم بنجاح تحدي جراحة المعدة والاثني عشر (Chapter 30)، ومحاكي العيادة، وطوارئ النبطشية، ومعركة امتحان السنين السبع.
          </p>

          <div className="grid grid-cols-3 gap-3 pt-2">
            <div className="glass-panel-soft p-3">
              <div className="text-[11px] text-slate-400">الرتبة</div>
              <div className="text-xs md:text-sm font-black text-[#FFD166] mt-0.5">
                {rank.emoji} {rank.title}
              </div>
            </div>
            <div className="glass-panel-soft p-3">
              <div className="text-[11px] text-slate-400">إجمالي النقاط</div>
              <div className="font-mono-num text-base font-black text-[#00F5D4] mt-0.5">
                {progress.xp} XP
              </div>
            </div>
            <div className="glass-panel-soft p-3">
              <div className="text-[11px] text-slate-400">دقة التشخيص</div>
              <div className="font-mono-num text-base font-black text-white mt-0.5">
                {accuracy}%
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => window.print()}
            className="btn-3d px-6 py-3 rounded-xl bg-[#FFD166] text-[#0A1128] font-black text-sm flex items-center gap-2 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>طباعة / حفظ الشهادة PDF</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setPhaseIdx(0);
              setLocalBossHp(100);
              onResetBoss();
            }}
            className="btn-3d px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm cursor-pointer"
          >
            إعادة مواجهة الوحش الأخير
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      {/* Boss Arena Header & HP Bars */}
      <div className="glass-card-3d p-6 border border-[#FF4D6D]/50">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0">
            <StomachMascotSvg mood="boss" size={125} />
          </div>
          <div className="flex-1 w-full space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div>
                <div className="text-xs font-bold text-[#FFD166] flex items-center gap-1.5">
                  <Swords className="w-4 h-4" />
                  <span>Chapter 8 · Final Boss Battle (امتحان السنين السبع)</span>
                </div>
                <h2 className="text-xl md:text-2xl font-black text-white mt-0.5">
                  وحش الامتحانات النهائية (2024 – 2026)
                </h2>
              </div>
              <span className="font-mono-num text-xs font-bold text-rose-300">
                مرحلة {phaseIdx + 1} / {bossQuestions.length}
              </span>
            </div>

            {/* Boss HP Bar */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#FF4D6D]">صحة الوحش (Final Boss HP)</span>
                <span className="font-mono-num text-white" data-testid="boss-hp">
                  {localBossHp}%
                </span>
              </div>
              <div className="h-3.5 rounded-full bg-white/10 overflow-hidden border border-white/10">
                <div
                  className="h-full bg-gradient-to-l from-[#FF4D6D] to-[#FF9E00] transition-all duration-300"
                  style={{ width: `${localBossHp}%` }}
                />
              </div>
            </div>

            {/* Surgeon HP Bar */}
            <div>
              <div className="flex justify-between text-xs font-bold mb-1">
                <span className="text-[#00F5D4] flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5" />
                  <span>ثبات الجراح ({progress.playerName || 'دكتور المستقبل'})</span>
                </span>
                <span className="font-mono-num text-white">
                  {progress.hearts} / {progress.maxHearts} ❤️
                </span>
              </div>
              <div className="h-2.5 rounded-full bg-white/10 overflow-hidden">
                <div
                  className="h-full bg-[#00F5D4] transition-all duration-300"
                  style={{ width: `${(progress.hearts / progress.maxHearts) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Active Boss Question */}
      {currentQ && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-mono-num font-bold text-[#FFD166]">
              Boss Phase #{phaseIdx + 1} (Q{currentQ.id})
            </span>
            <span className="font-en text-cyan-200">{currentQ.tag}</span>
          </div>

          <h3 className="text-lg md:text-xl font-black text-white leading-relaxed">
            <MedicalText text={currentQ.q} />
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentQ.o.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleStrike(idx)}
                className="btn-3d text-right p-4 rounded-2xl bg-[#0D1E45] hover:bg-[#172F66] border border-white/15 hover:border-[#FFD166] text-white flex items-start gap-3 cursor-pointer"
              >
                <span className="font-mono-num font-black text-xs w-8 h-8 rounded-xl bg-[#FFD166]/20 text-[#FFD166] flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm md:text-base font-semibold leading-relaxed pt-0.5">
                  <MedicalText text={opt} />
                </span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
