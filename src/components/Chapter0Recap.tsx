import React, { useState } from 'react';
import { ArrowLeft, ChevronLeft, ChevronRight, RotateCw, Zap } from 'lucide-react';
import { CHAPTER_0_FLASHCARDS } from '../data/chaptersData';
import { StomachMascotSvg } from './SvgMedicalArt';
import { MedicalText } from './MedicalText';

interface Chapter0RecapProps {
  onNextChapter: () => void;
  onCardReviewed: () => void;
}

export const Chapter0Recap: React.FC<Chapter0RecapProps> = ({
  onNextChapter,
  onCardReviewed,
}) => {
  const [cardIdx, setCardIdx] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [reviewedSet, setReviewedSet] = useState<Set<string>>(() => new Set());

  const card = CHAPTER_0_FLASHCARDS[cardIdx];

  const handleFlip = () => {
    const nextFlipped = !flipped;
    setFlipped(nextFlipped);
    if (nextFlipped && !reviewedSet.has(card.id)) {
      const updated = new Set(reviewedSet);
      updated.add(card.id);
      setReviewedSet(updated);
      onCardReviewed();
    }
  };

  const goCard = (delta: number) => {
    setFlipped(false);
    setCardIdx((prev) => (prev + delta + CHAPTER_0_FLASHCARDS.length) % CHAPTER_0_FLASHCARDS.length);
  };

  return (
    <div className="space-y-6">
      {/* Dr. Stomach Welcome Card */}
      <div className="glass-card-3d p-6 md:p-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="shrink-0">
            <StomachMascotSvg mood="smirk" size={140} />
          </div>
          <div className="flex-1 space-y-3">
            <div className="flex items-center gap-2 text-xs font-bold text-[#FFD166]">
              <Zap className="w-4 h-4" />
              <span>Chapter 0 · فرفشة معلومات في 60 ثانية</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white">
              أهلاً يا دكتور في بيت الحمض!
            </h2>
            <p className="text-slate-200 text-sm md:text-base leading-relaxed">
              <MedicalText text='قبل ما ندخل أوضة العمليات ونشوف مين هيكسب، اقلب الـ 10 بطاقات الذهبية دول عشان تفتكر أهم أرقام وقواعد كتاب القسم في Stomach & Duodenum (من ص 681 لحد ص 727). كل بطاقة بتقلبها وتراجعها بتديك نقاط XP تشجيعية!' />
            </p>
          </div>
        </div>
      </div>

      {/* Interactive 3D Flip/Swipe Flashcard Stage */}
      <div className="glass-card-3d p-6 md:p-8">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="text-sm font-bold text-slate-200">
            بطاقة{' '}
            <span className="font-mono-num text-[#00F5D4]">
              {cardIdx + 1} / {CHAPTER_0_FLASHCARDS.length}
            </span>
            <span className="mx-2 text-slate-500">·</span>
            <span className="text-xs text-slate-400">
              تمت مراجعة <span className="font-mono-num text-[#FFD166]">{reviewedSet.size}</span> بطاقات
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            {CHAPTER_0_FLASHCARDS.map((c, idx) => (
              <button
                key={c.id}
                type="button"
                aria-label={`بطاقة رقم ${idx + 1}`}
                onClick={() => {
                  setFlipped(false);
                  setCardIdx(idx);
                }}
                className={`h-2.5 rounded-full transition-all cursor-pointer ${
                  idx === cardIdx
                    ? 'w-7 bg-[#00F5D4]'
                    : reviewedSet.has(c.id)
                    ? 'w-2.5 bg-[#FFD166]'
                    : 'w-2.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 3D Flip Container */}
        <div className="perspective-1000 max-w-2xl mx-auto">
          <button
            type="button"
            onClick={handleFlip}
            aria-label={flipped ? 'إظهار وجه البطاقة الأمامي' : 'اقلب البطاقة لعرض القاعدة الذهبية'}
            className="w-full text-right block cursor-pointer focus:outline-none"
          >
            <div
              className={`relative w-full min-h-[270px] transition-transform duration-500 preserve-3d ${
                flipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Front Face */}
              <div className="absolute inset-0 backface-hidden rounded-2xl bg-gradient-to-br from-[#102554] to-[#0A1432] border border-[#00F5D4]/35 p-6 md:p-8 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between text-xs text-slate-300">
                  <span className="font-en font-semibold text-[#00F5D4]" dir="ltr">
                    {card.frontBadge}
                  </span>
                  <span className="font-mono-num text-[#FFD166] font-bold">{card.keyNumber}</span>
                </div>

                <div className="my-auto text-center py-4">
                  <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                    {card.frontTitle}
                  </h3>
                  <p className="text-sm text-slate-300 flex items-center justify-center gap-2">
                    <RotateCw className="w-4 h-4 text-[#00F5D4]" />
                    <span>اضغط هنا لقلب البطاقة وكشف القاعدة الذهبية</span>
                  </p>
                </div>

                <div className="text-center text-xs text-slate-400">
                  Chapter 30 · High-Yield Pearl
                </div>
              </div>

              {/* Back Face */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 rounded-2xl bg-gradient-to-br from-[#13294B] to-[#0A1128] border-2 border-[#FFD166]/60 p-6 md:p-8 flex flex-col justify-between shadow-xl">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-[#FFD166]">{card.frontTitle}</span>
                  <span className="font-mono-num text-[#00F5D4] font-bold">{card.keyNumber}</span>
                </div>

                <div className="my-auto py-3 text-base md:text-lg text-white leading-relaxed font-semibold">
                  <MedicalText text={card.backContent} />
                </div>

                <div className="text-center text-xs text-[#00F5D4] flex items-center justify-center gap-1.5">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>اضغط للرجوع أو اسحب للتالي</span>
                </div>
              </div>
            </div>
          </button>
        </div>

        {/* Navigation Controls */}
        <div className="max-w-2xl mx-auto mt-6 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => goCard(-1)}
              className="btn-3d px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/18 text-white text-sm font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
              <span>السابق</span>
            </button>
            <button
              type="button"
              onClick={() => goCard(1)}
              className="btn-3d px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/18 text-white text-sm font-bold flex items-center gap-1.5 cursor-pointer"
            >
              <span>التالي</span>
              <ChevronLeft className="w-4 h-4" />
            </button>
          </div>

          <button
            type="button"
            onClick={onNextChapter}
            className="btn-3d px-6 py-2.5 rounded-xl bg-gradient-to-l from-[#FF4D6D] to-[#FF9E00] text-white font-black text-sm flex items-center gap-2 cursor-pointer"
          >
            <span>جاهز؟ ادخل على Chapter 1</span>
            <ArrowLeft className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
