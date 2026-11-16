import React from 'react';
import { ArrowLeft, CheckCircle2, Sparkles, XCircle } from 'lucide-react';
import { StomachMascotSvg } from './SvgMedicalArt';
import { MedicalText } from './MedicalText';

interface FeedbackModalProps {
  isOpen: boolean;
  isCorrect: boolean;
  headline: string;
  explanation: string;
  correctOptionText?: string;
  xpEarned: number;
  streak: number;
  onContinue: () => void;
  continueLabel?: string;
}

export const FeedbackModal: React.FC<FeedbackModalProps> = ({
  isOpen,
  isCorrect,
  headline,
  explanation,
  correctOptionText,
  xpEarned,
  streak,
  onContinue,
  continueLabel = 'السؤال التالي',
}) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#040814]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
    >
      <div
        className={`w-full max-w-2xl glass-card-3d p-6 md:p-8 border-2 ${
          isCorrect ? 'border-[#00F5D4]/60' : 'border-[#FF4D6D]/70'
        }`}
      >
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-5">
          <div className="shrink-0">
            <StomachMascotSvg mood={isCorrect ? 'happy' : 'shocked'} size={96} />
          </div>
          <div className="flex-1 text-center sm:text-right">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
              {isCorrect ? (
                <CheckCircle2 className="w-6 h-6 text-[#00F5D4]" />
              ) : (
                <XCircle className="w-6 h-6 text-[#FF4D6D]" />
              )}
              <span
                className={`text-sm font-bold ${
                  isCorrect ? 'text-[#00F5D4]' : 'text-[#FF4D6D]'
                }`}
              >
                {isCorrect ? 'إجابة جراحية صحيحة!' : 'أوبس! خطأ جراحي'}
              </span>
              {isCorrect && xpEarned > 0 && (
                <span className="font-mono-num text-xs font-bold px-2.5 py-0.5 rounded-lg bg-[#FFD166]/20 text-[#FFD166] border border-[#FFD166]/40">
                  +{xpEarned} XP {streak >= 3 ? `· 🔥 ${streak}` : ''}
                </span>
              )}
            </div>
            <h3 className="text-lg md:text-xl font-black text-white leading-snug">
              <MedicalText text={headline} />
            </h3>
          </div>
        </div>

        {!isCorrect && correctOptionText && (
          <div className="mb-4 p-3.5 rounded-xl bg-emerald-950/50 border border-emerald-400/35 text-sm text-emerald-100">
            <div className="font-bold text-emerald-300 mb-1">الإجابة الصحيحة:</div>
            <MedicalText text={correctOptionText} />
          </div>
        )}

        <div className="glass-panel-soft p-4 md:p-5 mb-6">
          <div className="flex items-center gap-2 text-xs font-bold text-[#FFD166] mb-2">
            <Sparkles className="w-4 h-4" />
            <span>Surgical Pearl &amp; Explanation (تفسير كتاب القسم)</span>
          </div>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed">
            <MedicalText text={explanation} />
          </p>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={onContinue}
            className="btn-3d w-full sm:w-auto px-7 py-3 rounded-xl bg-gradient-to-l from-[#00F5D4] to-[#00C4A7] text-[#0A1128] font-black text-base flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>{continueLabel}</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
