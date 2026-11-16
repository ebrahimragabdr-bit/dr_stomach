import React, { useEffect, useState } from 'react';
import { Flame, Scale, Table2, Timer, Zap } from 'lucide-react';
import { DU_VS_GU_TABLE } from '../data/chaptersData';
import { Question } from '../types/game';
import { soundEngine } from '../utils/audioEngine';
import { MedicalText } from './MedicalText';

interface Chapter4DifferentiationProps {
  duelQuestions: Question[];
  speedQuestions: Question[];
  correctIds: number[];
  onAnswer: (question: Question, selectedIdx: number, speedBonus?: number) => void;
}

export const Chapter4Differentiation: React.FC<Chapter4DifferentiationProps> = ({
  duelQuestions,
  speedQuestions,
  correctIds,
  onAnswer,
}) => {
  const [mode, setMode] = useState<'duels' | 'speed' | 'table'>('duels');
  const [duelIdx, setDuelIdx] = useState(0);

  // Speed Round State
  const [speedRunning, setSpeedRunning] = useState(false);
  const [speedFinished, setSpeedFinished] = useState(false);
  const [speedIdx, setSpeedIdx] = useState(0);
  const [timeLeft, setTimeLeft] = useState(60);
  const [speedScore, setSpeedScore] = useState(0);
  const [lastSpeedMsg, setLastSpeedMsg] = useState<string | null>(null);

  useEffect(() => {
    if (!speedRunning || speedFinished) return;
    if (timeLeft <= 0) {
      setSpeedRunning(false);
      setSpeedFinished(true);
      return;
    }

    const timer = window.setInterval(() => {
      setTimeLeft((t) => {
        const next = t - 1;
        if (next > 0 && next <= 15) {
          soundEngine.playHeartbeat();
        }
        return next;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [speedRunning, speedFinished, timeLeft]);

  const startSpeedRound = () => {
    setSpeedIdx(0);
    setTimeLeft(60);
    setSpeedScore(0);
    setSpeedFinished(false);
    setSpeedRunning(true);
    setLastSpeedMsg(null);
    soundEngine.playHeartbeat();
  };

  const handleSpeedAnswer = (idx: number) => {
    const q = speedQuestions[speedIdx];
    if (!q) return;
    const isRight = idx === q.a;
    const speedBonus = isRight ? Math.max(5, Math.floor(timeLeft / 4)) : 0;

    if (isRight) {
      setSpeedScore((s) => s + 1);
      setLastSpeedMsg(`صح! (+${speedBonus} Speed Bonus) — ${q.exp}`);
    } else {
      setLastSpeedMsg(`غلط! الإجابة الصح: ${q.o[q.a]} — ${q.exp}`);
    }
    onAnswer(q, idx, speedBonus);

    if (speedIdx < speedQuestions.length - 1) {
      setSpeedIdx((i) => i + 1);
    } else {
      setSpeedRunning(false);
      setSpeedFinished(true);
    }
  };

  const currentDuel = duelQuestions[duelIdx];
  const currentSpeed = speedQuestions[speedIdx];

  return (
    <div className="space-y-5">
      {/* Header & Mode Tabs */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              ⚖️ Chapter 4: فرّق بينهم (Differentiation Arena &amp; Speed Round)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-0.5">
              المواجهات المباشرة بين الحالات المتشابهة (54–59) + تحدي السرعة في 60 ثانية (60–68)
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode('duels')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer transition-all ${
              mode === 'duels'
                ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <Scale className="w-4 h-4" />
            <span>المواجهات المباشرة (54–59)</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('speed')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer transition-all ${
              mode === 'speed'
                ? 'bg-gradient-to-l from-[#FF4D6D] to-[#FF9E00] text-white border-[#FF9E00]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>تحدي السرعة 60 ثانية (60–68)</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('table')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer transition-all ${
              mode === 'table'
                ? 'bg-[#FFD166] text-[#0A1128] border-[#FFD166]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <Table2 className="w-4 h-4" />
            <span>جدول المقارنة Table 30.1 (DU vs GU)</span>
          </button>
        </div>
      </div>

      {/* MODE 1: Head-to-Head Duels */}
      {mode === 'duels' && currentDuel && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="font-mono-num text-xs font-bold text-[#FFD166]">
              مواجهة Q{currentDuel.id} · {currentDuel.tag}
            </span>
            <div className="flex gap-1.5">
              {duelQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  type="button"
                  onClick={() => setDuelIdx(idx)}
                  className={`h-8 px-2.5 rounded-lg font-mono-num text-xs font-bold border cursor-pointer ${
                    idx === duelIdx
                      ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                      : correctIds.includes(q.id)
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      : 'bg-white/6 text-slate-300 border-white/10'
                  }`}
                >
                  {q.id}
                </button>
              ))}
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-bold text-white leading-relaxed">
            <MedicalText text={currentDuel.q} />
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentDuel.o.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => onAnswer(currentDuel, idx)}
                className="btn-3d text-right p-4 rounded-2xl bg-[#0D1E45] hover:bg-[#142B61] border border-white/12 hover:border-[#00F5D4]/60 text-white flex items-start gap-3 cursor-pointer"
              >
                <span className="font-mono-num font-black text-xs w-7 h-7 rounded-lg bg-white/10 text-[#00F5D4] flex items-center justify-center shrink-0">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="text-sm md:text-base font-semibold leading-relaxed">
                  <MedicalText text={opt} />
                </span>
              </button>
            ))}
          </div>

          <div className="flex justify-between pt-2">
            <button
              type="button"
              disabled={duelIdx === 0}
              onClick={() => setDuelIdx((i) => Math.max(0, i - 1))}
              className="px-4 py-2 rounded-xl bg-white/8 disabled:opacity-40 text-xs font-bold text-white cursor-pointer"
            >
              المواجهة السابقة
            </button>
            <button
              type="button"
              disabled={duelIdx === duelQuestions.length - 1}
              onClick={() => setDuelIdx((i) => Math.min(duelQuestions.length - 1, i + 1))}
              className="px-4 py-2 rounded-xl bg-white/8 disabled:opacity-40 text-xs font-bold text-white cursor-pointer"
            >
              المواجهة التالية
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: 60-Second Speed Round */}
      {mode === 'speed' && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          {!speedRunning && !speedFinished ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-[#FF9E00]/20 border border-[#FF9E00]/50 flex items-center justify-center mx-auto">
                <Flame className="w-8 h-8 text-[#FF9E00]" />
              </div>
              <h3 className="text-2xl font-black text-white">تحدي السرعة: 60 ثانية على نار هادية! ⚡</h3>
              <p className="text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
                قدامك <strong className="text-[#FFD166]">{speedQuestions.length} أسئلة</strong> سريعة (اختيار ثنائي A أو B) من الأسئلة 60 لـ 68. كل إجابة صح سريعة بتديك Speed Bonus إضافي!
              </p>
              <button
                type="button"
                onClick={startSpeedRound}
                className="btn-3d px-8 py-3.5 rounded-xl bg-gradient-to-l from-[#FF4D6D] to-[#FF9E00] text-white font-black text-base cursor-pointer"
              >
                ابدأ العداد التنازلي الآن!
              </button>
            </div>
          ) : speedFinished ? (
            <div className="text-center py-6 space-y-4">
              <h3 className="text-2xl font-black text-[#00F5D4]">انتهت جولة السرعة!</h3>
              <div className="font-mono-num text-4xl font-black text-[#FFD166]">
                {speedScore} / {speedQuestions.length}
              </div>
              {lastSpeedMsg && (
                <div className="glass-panel-soft p-4 text-sm text-slate-200 max-w-2xl mx-auto">
                  <MedicalText text={lastSpeedMsg} />
                </div>
              )}
              <button
                type="button"
                onClick={startSpeedRound}
                className="btn-3d px-6 py-3 rounded-xl bg-[#00F5D4] text-[#0A1128] font-black text-sm cursor-pointer"
              >
                العب جولة سرعة تانية
              </button>
            </div>
          ) : (
            <div className="space-y-5">
              {/* Countdown Bar */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold">
                  <span className="flex items-center gap-1.5 text-[#FFD166]">
                    <Timer className="w-4 h-4" />
                    <span className="font-mono-num">{timeLeft} ثانية متبقية</span>
                  </span>
                  <span className="font-mono-num text-[#00F5D4]">
                    سؤال {speedIdx + 1} / {speedQuestions.length} (Q{currentSpeed.id})
                  </span>
                </div>
                <div className="h-3 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className={`h-full transition-all duration-300 ${
                      timeLeft <= 15 ? 'bg-[#FF4D6D]' : 'bg-gradient-to-l from-[#00F5D4] to-[#FFD166]'
                    }`}
                    style={{ width: `${(timeLeft / 60) * 100}%` }}
                  />
                </div>
              </div>

              {lastSpeedMsg && (
                <div className="p-3 rounded-xl bg-[#070E24]/85 border border-white/15 text-xs md:text-sm text-cyan-100">
                  <MedicalText text={lastSpeedMsg} />
                </div>
              )}

              <h3 className="text-lg md:text-2xl font-black text-white leading-relaxed">
                <MedicalText text={currentSpeed.q} />
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentSpeed.o.map((opt, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSpeedAnswer(idx)}
                    className="btn-3d p-5 rounded-2xl bg-[#0D1E45] hover:bg-[#17306B] border-2 border-white/15 hover:border-[#FFD166] text-right text-white flex items-start gap-3 cursor-pointer"
                  >
                    <span className="font-mono-num font-black text-base w-9 h-9 rounded-xl bg-[#FFD166]/20 text-[#FFD166] flex items-center justify-center shrink-0">
                      {idx === 0 ? 'A' : 'B'}
                    </span>
                    <span className="text-sm md:text-base font-bold leading-relaxed">
                      <MedicalText text={opt} />
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* MODE 3: Table 30.1 Reference */}
      {mode === 'table' && (
        <div className="glass-card-3d p-5 md:p-6 overflow-x-auto">
          <h3 className="text-lg font-black text-white mb-4">
            Table 30.1: Clinical Differences Between Chronic DU &amp; Chronic GU
          </h3>
          <table className="w-full text-right border-collapse text-sm">
            <thead>
              <tr className="border-b border-white/15 text-[#FFD166]">
                <th className="py-3 px-3 font-bold">المعيار</th>
                <th className="py-3 px-3 font-bold text-[#00F5D4]">Duodenal Ulcer (DU)</th>
                <th className="py-3 px-3 font-bold text-[#FF4D6D]">Gastric Ulcer (GU)</th>
              </tr>
            </thead>
            <tbody>
              {DU_VS_GU_TABLE.map((row, idx) => (
                <tr key={idx} className="border-b border-white/8 hover:bg-white/4">
                  <td className="py-3 px-3 font-bold text-slate-200 font-en" dir="ltr">
                    {row.feature}
                  </td>
                  <td className="py-3 px-3 text-slate-100">
                    <MedicalText text={row.du} />
                  </td>
                  <td className="py-3 px-3 text-slate-100">
                    <MedicalText text={row.gu} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
