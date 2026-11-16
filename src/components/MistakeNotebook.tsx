import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, HeartPulse, ShieldCheck } from 'lucide-react';
import { Question } from '../types/game';
import { MedicalText } from './MedicalText';

interface MistakeNotebookProps {
  mistakeQuestions: Question[];
  onResolveMistake: (questionId: number) => void;
  onWrongAgain: () => void;
  onClose: () => void;
}

export const MistakeNotebook: React.FC<MistakeNotebookProps> = ({
  mistakeQuestions,
  onResolveMistake,
  onWrongAgain,
  onClose,
}) => {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<'none' | 'right' | 'wrong'>('none');

  const safeIdx = Math.min(activeIdx, Math.max(0, mistakeQuestions.length - 1));
  const current = mistakeQuestions[safeIdx];

  const handleSelect = (idx: number) => {
    if (!current || feedback === 'right') return;
    setSelectedOpt(idx);
    if (idx === current.a) {
      setFeedback('right');
    } else {
      setFeedback('wrong');
      onWrongAgain();
    }
  };

  const handleClearAndNext = () => {
    if (!current) return;
    onResolveMistake(current.id);
    setSelectedOpt(null);
    setFeedback('none');
    setActiveIdx(0);
  };

  return (
    <div className="max-w-4xl mx-auto p-4 md:p-6">
      <div className="glass-card-3d p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-2xl font-black text-white flex items-center gap-2">
              <HeartPulse className="w-6 h-6 text-[#FF4D6D]" />
              <span>أوضة الإنعاش · كشكول الغلطات</span>
            </h2>
            <p className="text-sm text-slate-300 mt-1">
              أي سؤال غلطت فيه بيتحفظ هنا تلقائياً. جاوبه صح عشان تنعش المريض وتاخد <span className="font-mono-num text-[#00F5D4]">+15 XP</span> وتستعيد قلب!
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="btn-3d px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-bold flex items-center gap-2 cursor-pointer"
          >
            <ArrowRight className="w-4 h-4" />
            <span>العودة للمراحل</span>
          </button>
        </div>

        {mistakeQuestions.length === 0 ? (
          <div className="glass-panel-soft p-10 text-center">
            <ShieldCheck className="w-14 h-14 text-[#00F5D4] mx-auto mb-3" />
            <h3 className="text-xl font-bold text-white mb-2">أوضة الإنعاش فاضية تماماً!</h3>
            <p className="text-sm text-slate-300">
              مفيش ولا غلطة متسجلة دلوقتي. إيدك تتلف في حرير يا دكتور!
            </p>
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-between text-xs text-slate-300 mb-4">
              <span>
                غلطات متبقية: <strong className="font-mono-num text-[#FF4D6D]">{mistakeQuestions.length}</strong>
              </span>
              <span className="font-mono-num">
                سؤال رقم #{current.id} · {current.tag}
              </span>
            </div>

            <div className="glass-panel-soft p-5 md:p-6 mb-5">
              <h3 className="text-lg font-bold text-white leading-relaxed mb-5">
                <MedicalText text={current.q} />
              </h3>

              <div className="grid grid-cols-1 gap-3">
                {current.o.map((opt, idx) => {
                  const isChosen = selectedOpt === idx;
                  const showCorrect = feedback === 'right' && idx === current.a;
                  const showWrong = feedback === 'wrong' && isChosen;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleSelect(idx)}
                      className={`text-right p-4 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                        showCorrect
                          ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                          : showWrong
                          ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                          : 'bg-white/5 hover:bg-white/10 border-white/12 text-slate-100'
                      }`}
                    >
                      <span className="font-mono-num font-bold text-xs px-2 py-1 rounded-md bg-white/10 shrink-0">
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="text-sm md:text-base leading-relaxed">
                        <MedicalText text={opt} />
                      </span>
                    </button>
                  );
                })}
              </div>

              {feedback === 'wrong' && (
                <div className="mt-4 p-3 rounded-xl bg-rose-950/60 border border-rose-400/40 text-sm text-rose-200">
                  لسه مش ده الاختيار الصح! ركز تاني وجرب خيار آخر قبل ما تفقد استقرار المريض.
                </div>
              )}

              {feedback === 'right' && (
                <div className="mt-5 p-4 rounded-xl bg-emerald-950/50 border border-[#00F5D4]/40">
                  <div className="flex items-center gap-2 text-[#00F5D4] font-bold text-sm mb-2">
                    <CheckCircle2 className="w-5 h-5" />
                    <span>عاش! اتعالجت الغلطة بنجاح</span>
                  </div>
                  <p className="text-sm text-slate-200 leading-relaxed mb-4">
                    <MedicalText text={current.exp} />
                  </p>
                  <button
                    type="button"
                    onClick={handleClearAndNext}
                    className="btn-3d px-5 py-2.5 rounded-xl bg-[#00F5D4] text-[#0A1128] font-black text-sm cursor-pointer"
                  >
                    مسح من كشكول الغلطات (+15 XP)
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
