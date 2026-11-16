import React, { useState } from 'react';
import { CheckCircle2, Eye, FlaskConical, Link2, SearchCheck } from 'lucide-react';
import {
  EQUATION_PUZZLES,
  MATCH_PAIRS,
  RADIOLOGY_HOTSPOTS,
  SPOT_LIE_ITEMS,
} from '../data/chaptersData';
import { MedicalText } from './MedicalText';
import { RadiologyDiagramSvg } from './SvgMedicalArt';

interface Chapter6MiniGamesProps {
  onScoreEvent: (questionId: number | undefined, isCorrect: boolean, customExp: string) => void;
}

export const Chapter6MiniGames: React.FC<Chapter6MiniGamesProps> = ({ onScoreEvent }) => {
  const [tab, setTab] = useState<'equations' | 'match_rad' | 'spot_lie'>('equations');

  // Equation Builder State
  const [eqIdx, setEqIdx] = useState(0);
  const [eqPicked, setEqPicked] = useState<Record<number, number>>({});

  // Match Lines State
  const [selectedCauseId, setSelectedCauseId] = useState<string | null>(null);
  const [matchedIds, setMatchedIds] = useState<string[]>([]);
  const [matchError, setMatchError] = useState<string | null>(null);
  const shuffledTargets = React.useMemo(
    () => [MATCH_PAIRS[2], MATCH_PAIRS[0], MATCH_PAIRS[3], MATCH_PAIRS[1]],
    []
  );

  // Radiology Hotspot State
  const [radIdx, setRadIdx] = useState(0);
  const [radPicked, setRadPicked] = useState<Record<string, number>>({});

  // Spot the Lie State
  const [lieIdx, setLieIdx] = useState(0);
  const [liePicked, setLiePicked] = useState<Record<number, number>>({});

  const currentEq = EQUATION_PUZZLES[eqIdx];
  const currentRad = RADIOLOGY_HOTSPOTS[radIdx];
  const currentLie = SPOT_LIE_ITEMS[lieIdx];

  const handleMatchClick = (targetId: string) => {
    if (!selectedCauseId) {
      setMatchError('اختار المرض من العمود اليمين الأول وبعدين وصّله بالميكانيزم الصحيح.');
      return;
    }
    if (selectedCauseId === targetId) {
      setMatchedIds((prev) => (prev.includes(targetId) ? prev : [...prev, targetId]));
      setSelectedCauseId(null);
      setMatchError(null);
      const item = MATCH_PAIRS.find((m) => m.id === targetId);
      onScoreEvent(84, true, item ? `${item.cause}: ${item.mechanismAndTest}` : 'توصيل صحيح!');
    } else {
      setMatchError('التوصيلة دي مش مظبوطة! جرب تقرأ الميكانيزم تاني.');
      onScoreEvent(84, false, 'توصيلة غير صحيحة في أسباب القرحة النادرة.');
    }
  };

  return (
    <div className="space-y-5">
      {/* Mini-Games Header & Tabs */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-black text-white">
            🎮 Chapter 6: الأطوار الإضافية الخاصة (Special Mini-Games)
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mt-0.5">
            3 ألعاب طبية تفاعلية متنوعة (الأسئلة 81–90 + صور الأشعة التفاعلية)
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setTab('equations')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer ${
              tab === 'equations'
                ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <FlaskConical className="w-4 h-4" />
            <span>1. ركّب المعادلة (81–83)</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('match_rad')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer ${
              tab === 'match_rad'
                ? 'bg-[#FFD166] text-[#0A1128] border-[#FFD166]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <Link2 className="w-4 h-4" />
            <span>2. وصّلها وعينك على الأشعة (84–85)</span>
          </button>

          <button
            type="button"
            onClick={() => setTab('spot_lie')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer ${
              tab === 'spot_lie'
                ? 'bg-[#FF4D6D] text-white border-[#FF4D6D]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <SearchCheck className="w-4 h-4" />
            <span>3. مين بيكدب؟ (86–90)</span>
          </button>
        </div>
      </div>

      {/* MINI-GAME 1: Syndrome & Equation Builder */}
      {tab === 'equations' && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-black text-white">🧪 ركّب المعادلة الإكلينيكية (Q{currentEq.id})</h3>
            <div className="flex gap-1.5">
              {EQUATION_PUZZLES.map((eq, i) => (
                <button
                  key={eq.id}
                  type="button"
                  onClick={() => setEqIdx(i)}
                  className={`h-8 px-3 rounded-lg font-mono-num text-xs font-bold border cursor-pointer ${
                    i === eqIdx
                      ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                      : eqPicked[eq.id] === eq.answer
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      : 'bg-white/6 text-slate-300 border-white/10'
                  }`}
                >
                  Q{eq.id}
                </button>
              ))}
            </div>
          </div>

          {/* 3-Clue Visual Equation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 items-stretch">
            {currentEq.clues.map((clue, i) => (
              <div
                key={i}
                className="glass-panel-soft p-4 flex flex-col justify-center items-center text-center border border-[#00F5D4]/25 relative"
              >
                <span className="text-[11px] font-mono-num text-[#FFD166] font-bold mb-1">
                  Clue {i + 1}
                </span>
                <div className="text-sm font-bold text-white leading-relaxed">
                  <MedicalText text={clue} />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center font-black text-lg text-[#00F5D4]">= ؟ (اختار الناتج الصحيح)</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentEq.options.map((opt, idx) => {
              const chosen = eqPicked[currentEq.id] === idx;
              const isRight = idx === currentEq.answer;
              const answered = eqPicked[currentEq.id] !== undefined;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setEqPicked((p) => ({ ...p, [currentEq.id]: idx }));
                    onScoreEvent(currentEq.id, isRight, currentEq.exp);
                  }}
                  className={`btn-3d p-4 rounded-2xl border text-right font-bold text-sm md:text-base cursor-pointer ${
                    answered && isRight
                      ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                      : answered && chosen && !isRight
                      ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                      : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                  }`}
                >
                  <MedicalText text={opt} />
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* MINI-GAME 2: Match the Lines + SVG Radiology Hotspots */}
      {tab === 'match_rad' && (
        <div className="space-y-6">
          {/* Part A: Match the Lines (Q84) */}
          <div className="glass-card-3d p-6 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-black text-white">
                🔗 وصّل كل سبب نادر بميكانيزمه الصحيح (Q84)
              </h3>
              <span className="font-mono-num text-xs font-bold text-[#00F5D4]">
                {matchedIds.length} / {MATCH_PAIRS.length} مكتمل
              </span>
            </div>

            {matchError && (
              <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-400/40 text-xs text-rose-200">
                {matchError}
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <div className="text-xs font-bold text-[#FFD166]">1. اختار الحالة / السبب:</div>
                {MATCH_PAIRS.map((pair, idx) => {
                  const matched = matchedIds.includes(pair.id);
                  const selected = selectedCauseId === pair.id;
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={matched}
                      onClick={() => setSelectedCauseId(pair.id)}
                      className={`w-full text-right p-3.5 rounded-xl border text-sm font-bold transition-all cursor-pointer ${
                        matched
                          ? 'bg-emerald-500/20 border-[#00F5D4] text-emerald-100 opacity-80'
                          : selected
                          ? 'bg-[#FFD166]/25 border-[#FFD166] text-white'
                          : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="flex items-center gap-2 min-w-0">
                          <span className="font-mono-num text-xs font-black px-2 py-0.5 rounded-md bg-white/10 text-[#FFD166] shrink-0">
                            {idx + 1}
                          </span>
                          <span className="min-w-0">
                            <MedicalText text={pair.cause} />
                          </span>
                        </span>
                        {matched && <CheckCircle2 className="w-4 h-4 text-[#00F5D4] shrink-0" />}
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="space-y-2.5">
                <div className="text-xs font-bold text-[#00F5D4]">2. وصّله بالميكانيزم والاختبار:</div>
                {shuffledTargets.map((pair) => {
                  const matched = matchedIds.includes(pair.id);
                  return (
                    <button
                      key={pair.id}
                      type="button"
                      disabled={matched}
                      onClick={() => handleMatchClick(pair.id)}
                      className={`w-full text-right p-3.5 rounded-xl border text-xs md:text-sm transition-all cursor-pointer ${
                        matched
                          ? 'bg-emerald-500/20 border-[#00F5D4] text-emerald-100'
                          : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-slate-100'
                      }`}
                    >
                      <MedicalText text={pair.mechanismAndTest} />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Part B: Interactive SVG Radiology Hotspots (Q85 + 3 Classic Chapter 30 X-Rays) */}
          <div className="glass-card-3d p-6 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-2">
                  <Eye className="w-5 h-5 text-[#00F5D4]" />
                  <span>عينك على الأشعة · Radiology Hotspot Gallery (Q85 + صور الكتاب)</span>
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {RADIOLOGY_HOTSPOTS.map((r, i) => (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => setRadIdx(i)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold border cursor-pointer ${
                      i === radIdx
                        ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                        : radPicked[r.id] === r.answer
                        ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                        : 'bg-white/6 text-slate-200 border-white/10'
                    }`}
                  >
                    {r.figRef}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              <div className="lg:col-span-5">
                <RadiologyDiagramSvg type={currentRad.svgType} />
              </div>

              <div className="lg:col-span-7 space-y-4">
                <div className="text-xs font-bold text-[#FFD166]">
                  {currentRad.title} · {currentRad.figRef}
                </div>
                <h4 className="text-base md:text-lg font-bold text-white leading-relaxed">
                  <MedicalText text={currentRad.question} />
                </h4>

                <div className="grid grid-cols-1 gap-2.5">
                  {currentRad.options.map((opt, idx) => {
                    const answered = radPicked[currentRad.id] !== undefined;
                    const chosen = radPicked[currentRad.id] === idx;
                    const isRight = idx === currentRad.answer;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setRadPicked((p) => ({ ...p, [currentRad.id]: idx }));
                          onScoreEvent(currentRad.id === 'rad-1' ? 85 : undefined, isRight, currentRad.exp);
                        }}
                        className={`btn-3d text-right p-3.5 rounded-xl border text-xs md:text-sm cursor-pointer ${
                          answered && isRight
                            ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                            : answered && chosen && !isRight
                            ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                            : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                        }`}
                      >
                        <MedicalText text={opt} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MINI-GAME 3: Spot the Lie (Q86-90) */}
      {tab === 'spot_lie' && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <span className="font-mono-num text-xs font-bold text-[#FF4D6D]">Q{currentLie.id} · Find the EXCEPT</span>
              <h3 className="text-lg md:text-xl font-black text-white mt-0.5">
                🕵️‍♂️ مين بيكدب؟ طلّع العبارة الغلط عن: <MedicalText text={currentLie.topic} />
              </h3>
            </div>
            <div className="flex gap-1.5">
              {SPOT_LIE_ITEMS.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setLieIdx(i)}
                  className={`h-8 px-3 rounded-lg font-mono-num text-xs font-bold border cursor-pointer ${
                    i === lieIdx
                      ? 'bg-[#FF4D6D] text-white border-[#FF4D6D]'
                      : liePicked[item.id] === item.lieIndex
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      : 'bg-white/6 text-slate-300 border-white/10'
                  }`}
                >
                  Q{item.id}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            {currentLie.statements.map((stmt, idx) => {
              const answered = liePicked[currentLie.id] !== undefined;
              const chosen = liePicked[currentLie.id] === idx;
              const isLie = idx === currentLie.lieIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setLiePicked((p) => ({ ...p, [currentLie.id]: idx }));
                    onScoreEvent(currentLie.id, isLie, currentLie.exp);
                  }}
                  className={`btn-3d text-right p-4 rounded-2xl border flex items-start gap-3 cursor-pointer ${
                    answered && isLie
                      ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                      : answered && chosen && !isLie
                      ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                      : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                  }`}
                >
                  <span className="font-mono-num font-black text-xs w-7 h-7 rounded-lg bg-white/10 text-[#FFD166] flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm md:text-base font-semibold leading-relaxed">
                    <MedicalText text={stmt} />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
