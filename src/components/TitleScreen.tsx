import React from 'react';
import { Play, ShieldAlert, Sparkles, Stethoscope } from 'lucide-react';
import { StomachMascotSvg } from './SvgMedicalArt';
import { MedicalText } from './MedicalText';

interface TitleScreenProps {
  playerName: string;
  onChangeName: (name: string) => void;
  onStart: () => void;
  savedXp: number;
  answeredCount: number;
  totalQuestions: number;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  playerName,
  onChangeName,
  onStart,
  savedXp,
  answeredCount,
  totalQuestions,
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl glass-card-3d p-6 md:p-10 relative overflow-hidden">
        {/* Top subtle accent hairline */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-l from-[#FF4D6D] via-[#FFD166] to-[#00F5D4]" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Focal Visual Centerpiece */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center text-center">
            <div className="relative p-4 rounded-3xl bg-[#070E24]/70 border border-white/10 shadow-2xl">
              <StomachMascotSvg mood="smirk" size={220} />
            </div>
            <div dir="ltr" className="mt-4 flex items-center gap-2 text-xs text-cyan-200/80 font-mono-num">
              <span>Chapter 30</span>
              <span aria-hidden="true">·</span>
              <span>Stomach &amp; Duodenum</span>
              <span aria-hidden="true">·</span>
              <span>{totalQuestions} Questions</span>
            </div>
          </div>

          {/* Title Lockup & Interactive Start */}
          <div className="lg:col-span-7 flex flex-col gap-5">
            <div>
              <p className="text-sm font-bold text-[#00F5D4] tracking-wide mb-2 flex items-center gap-2">
                <Stethoscope className="w-4 h-4" />
                <span>تحدي الجراحة العامة التفاعلي</span>
              </p>
              <h1 className="text-3xl md:text-5xl font-black text-white leading-tight [text-wrap:balance]">
                دكتور المعدة{' '}
                <span className="font-en text-[#FFD166] inline-block" dir="ltr">
                  Dr. Stomach
                </span>
              </h1>
            </div>

            <blockquote className="glass-panel-soft p-4 md:p-5 text-base md:text-lg leading-relaxed text-slate-100 border-r-0">
              <MedicalText text='أهلاً يا دكتور! أنا المعدة.. بيت الحمض ومفرمة الأكل. فاكر إنك هتعرف تسيطر على الـ HCl بتاعي ولا هتسيبني أفرقع في الـ Peritoneum؟! يلا نشوف هتوصل لرتبة علّامة الجراحة ولا هنحولك جلدية!' />
            </blockquote>

            <div className="grid grid-cols-3 gap-3 text-center">
              <div className="glass-panel-soft p-3">
                <div className="text-xl md:text-2xl font-black text-[#00F5D4] font-mono-num">9</div>
                <div className="text-xs text-slate-300 mt-0.5">مراحل وأطوار</div>
              </div>
              <div className="glass-panel-soft p-3">
                <div className="text-xl md:text-2xl font-black text-[#FFD166] font-mono-num">7</div>
                <div className="text-xs text-slate-300 mt-0.5">حالات عيادة كاملة</div>
              </div>
              <div className="glass-panel-soft p-3">
                <div className="text-xl md:text-2xl font-black text-[#FF4D6D] font-mono-num">
                  {totalQuestions}
                </div>
                <div className="text-xs text-slate-300 mt-0.5">سؤال جراحي</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-stretch sm:items-end pt-1">
              <div className="flex-1">
                <label htmlFor="surgeon-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                  اسم الجراح (يظهر في شهادة الاستشاري النهائية)
                </label>
                <input
                  id="surgeon-name"
                  type="text"
                  value={playerName}
                  onChange={(e) => onChangeName(e.target.value)}
                  placeholder="دكتور المستقبل"
                  className="w-full px-4 py-3 rounded-xl bg-[#070E24]/90 border border-white/15 text-white placeholder-slate-400 focus:outline-none focus:border-[#00F5D4] transition-colors"
                />
              </div>

              <button
                type="button"
                data-start="true"
                onClick={onStart}
                className="btn-3d px-7 py-3.5 rounded-xl bg-gradient-to-l from-[#00F5D4] to-[#00C4A7] text-[#0A1128] font-black text-base md:text-lg flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
              >
                <Play className="w-5 h-5 fill-current" />
                <span>{savedXp > 0 ? 'كمّل المشوار الجراحي' : 'ابدأ الرحلة الجراحية'}</span>
              </button>
            </div>

            {answeredCount > 0 && (
              <div className="flex items-center justify-between text-xs text-slate-300 pt-1">
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-[#FFD166]" />
                  <span>
                    تقدم محفوظ: <strong className="font-mono-num text-white">{answeredCount}</strong> سؤال ·{' '}
                    <strong className="font-mono-num text-[#FFD166]">{savedXp} XP</strong>
                  </span>
                </span>
                <span className="flex items-center gap-1 text-slate-400">
                  <ShieldAlert className="w-3.5 h-3.5" />
                  <span>أوفلاين بالكامل</span>
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
