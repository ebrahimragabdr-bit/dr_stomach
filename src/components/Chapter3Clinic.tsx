import React, { useState } from 'react';
import {
  Activity,
  AlertTriangle,
  CheckCircle2,
  Coins,
  MessageSquare,
  Scissors,
  Stethoscope,
} from 'lucide-react';
import { CLINIC_CASES } from '../data/chaptersData';
import { ClinicCase } from '../types/game';
import { validateClinicLabSelection } from '../utils/gameLogic';
import { MedicalText } from './MedicalText';

interface Chapter3ClinicProps {
  completedClinicIds: string[];
  onStationScore: (linkedQuestionId: number | undefined, isCorrect: boolean, customExp?: string) => void;
  onCaseComplete: (caseId: string) => void;
}

export const Chapter3Clinic: React.FC<Chapter3ClinicProps> = ({
  completedClinicIds,
  onStationScore,
  onCaseComplete,
}) => {
  const [activeCaseIdx, setActiveCaseIdx] = useState(0);
  const [station, setStation] = useState<1 | 2 | 3 | 4>(1);

  // Per-case interactive state
  const [chatReplies, setChatReplies] = useState<Array<{ q: string; a: string; ok: boolean; fb: string }>>([]);
  const [station2Result, setStation2Result] = useState<{ chosen: number; ok: boolean } | null>(null);
  const [remainingBudget, setRemainingBudget] = useState<number>(CLINIC_CASES[0].station3Budget);
  const [orderedLabIds, setOrderedLabIds] = useState<string[]>([]);
  const [labWarning, setLabWarning] = useState<string | null>(null);
  const [station4Result, setStation4Result] = useState<{ chosen: number; ok: boolean } | null>(null);

  const currentCase: ClinicCase = CLINIC_CASES[activeCaseIdx];

  const selectCase = (idx: number) => {
    const c = CLINIC_CASES[idx];
    setActiveCaseIdx(idx);
    setStation(1);
    setChatReplies([]);
    setStation2Result(null);
    setRemainingBudget(c.station3Budget);
    setOrderedLabIds([]);
    setLabWarning(null);
    setStation4Result(null);
  };

  const handleStation1Pick = (idx: number) => {
    const opt = currentCase.station1Options[idx];
    setChatReplies((prev) => [
      ...prev,
      { q: opt.label, a: opt.patientReply, ok: opt.isOptimal, fb: opt.feedback },
    ]);
    if (opt.isOptimal) {
      onStationScore(currentCase.linkedQuestionIds[0], true, opt.feedback);
    } else {
      onStationScore(currentCase.linkedQuestionIds[0], false, opt.feedback);
    }
  };

  const handleStation2Pick = (idx: number) => {
    const ok = idx === currentCase.station2Answer;
    setStation2Result({ chosen: idx, ok });
    onStationScore(currentCase.linkedQuestionIds[1], ok, currentCase.station2Exp);
  };

  const handleOrderLab = (labId: string) => {
    if (orderedLabIds.includes(labId)) return;
    const lab = currentCase.station3Labs.find((l) => l.id === labId);
    if (!lab) return;

    const check = validateClinicLabSelection(remainingBudget, lab.cost, lab.isContraindicated);
    if (!check.allowed && check.reason === 'insufficient_budget') {
      setLabWarning(`الميزانية المتبقية (${remainingBudget} ج) لا تكفي لطلب هذا الفحص (${lab.cost} ج)!`);
      return;
    }

    setLabWarning(null);
    setRemainingBudget((b) => Math.max(0, b - lab.cost));
    setOrderedLabIds((prev) => [...prev, lab.id]);

    if (lab.isContraindicated) {
      onStationScore(currentCase.linkedQuestionIds[2], false, `${lab.resultText} — ${lab.feedback}`);
    } else if (lab.isOptimal) {
      onStationScore(currentCase.linkedQuestionIds[2], true, lab.feedback);
    } else {
      onStationScore(currentCase.linkedQuestionIds[2], false, lab.feedback);
    }
  };

  const handleStation4Pick = (idx: number) => {
    const ok = idx === currentCase.station4Answer;
    setStation4Result({ chosen: idx, ok });
    onStationScore(currentCase.linkedQuestionIds[3], ok, currentCase.station4Exp);
    if (ok) {
      onCaseComplete(currentCase.id);
    }
  };

  const hasOptimalChat = chatReplies.some((r) => r.ok);
  const hasOptimalLab = orderedLabIds.some(
    (id) => currentCase.station3Labs.find((l) => l.id === id)?.isOptimal
  );

  return (
    <div className="space-y-5">
      {/* Case Selector Header */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white">
              🏥 Chapter 3: جوه العيادة (The Interactive Clinic Simulator)
            </h2>
            <p className="text-xs md:text-sm text-slate-300 mt-0.5">
              7 حالات إكلينيكية متكاملة (تشمل الأسئلة 34–53 وتغطية كتاب القسم) عبر 4 محطات حقيقية لكل مريض
            </p>
          </div>
          <div className="font-mono-num text-sm font-bold text-[#00F5D4]">
            {completedClinicIds.length} / {CLINIC_CASES.length} حالات مكتملة
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
          {CLINIC_CASES.map((c, idx) => {
            const done = completedClinicIds.includes(c.id);
            const active = idx === activeCaseIdx;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => selectCase(idx)}
                className={`text-right p-3 rounded-xl border transition-all cursor-pointer ${
                  active
                    ? 'bg-[#00F5D4]/18 border-[#00F5D4] text-white'
                    : done
                    ? 'bg-emerald-500/15 border-emerald-400/40 text-emerald-100'
                    : 'bg-white/5 hover:bg-white/10 border-white/10 text-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-mono-num font-bold text-[#FFD166]">Case {idx + 1}</span>
                  {done && <CheckCircle2 className="w-4 h-4 text-[#00F5D4]" />}
                </div>
                <div className="text-xs font-bold line-clamp-1">{c.patientName}</div>
                <div dir="ltr" className="text-[11px] text-slate-300 truncate text-right">
                  {c.subtitle}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Patient Chart + Vitals Monitor */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/10">
          <div>
            <div dir="ltr" className="text-xs font-bold text-[#FF4D6D] mb-1 text-right">
              {currentCase.subtitle}
            </div>
            <h3 className="text-xl font-black text-white">{currentCase.title}</h3>
            <p className="text-sm text-slate-200 mt-1">
              <strong>المريض:</strong> {currentCase.patientName} ({currentCase.age} سنة) — {currentCase.appearance}
            </p>
            <p className="text-sm text-[#FFE8A3] mt-1">
              <strong>الشكوى الرئيسية:</strong> <MedicalText text={currentCase.chiefComplaint} />
            </p>
          </div>

          {/* Live Vitals Monitor */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 shrink-0 bg-[#050B1C] p-3.5 rounded-2xl border border-cyan-400/25">
            <div>
              <div className="text-[10px] text-slate-400">BP</div>
              <div className="font-mono-num font-bold text-sm text-[#00F5D4]">{currentCase.vitals.bp}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400">HR</div>
              <div className="font-mono-num font-bold text-sm text-[#FF4D6D]">{currentCase.vitals.hr} bpm</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400">Temp</div>
              <div className="font-mono-num font-bold text-sm text-[#FFD166]">{currentCase.vitals.temp}</div>
            </div>
            <div>
              <div className="text-[10px] text-slate-400">الحالة</div>
              <div className="text-xs font-bold text-white">{currentCase.vitals.statusLabel}</div>
            </div>
          </div>
        </div>

        {/* 4-Station Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 my-5">
          {[
            { num: 1 as const, label: '1. شات القصة المرضية', icon: MessageSquare },
            { num: 2 as const, label: '2. الفحص والتطور', icon: Stethoscope },
            { num: 3 as const, label: '3. الميزانية والفحوصات', icon: Coins },
            { num: 4 as const, label: '4. قرار العملية', icon: Scissors },
          ].map((st) => {
            const Icon = st.icon;
            const active = station === st.num;
            return (
              <button
                key={st.num}
                type="button"
                onClick={() => setStation(st.num)}
                className={`p-3 rounded-xl border text-xs md:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  active
                    ? 'bg-gradient-to-l from-[#00F5D4] to-[#00C4A7] text-[#0A1128] border-[#00F5D4]'
                    : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{st.label}</span>
              </button>
            );
          })}
        </div>

        {/* STATION 1: History Chat */}
        {station === 1 && (
          <div className="space-y-4">
            <div className="glass-panel-soft p-4 text-sm md:text-base text-white font-semibold">
              <MedicalText text={currentCase.station1Prompt} />
            </div>

            {chatReplies.length > 0 && (
              <div className="space-y-3 bg-[#050B1C]/80 p-4 rounded-2xl border border-white/10">
                {chatReplies.map((item, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-start">
                      <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-[#00F5D4]/15 border border-[#00F5D4]/30 px-4 py-2.5 text-sm text-cyan-100">
                        <strong className="text-[#00F5D4] text-xs block mb-0.5">أنت (الجراح):</strong>
                        <MedicalText text={item.q} />
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div
                        className={`max-w-[85%] rounded-2xl rounded-tl-sm px-4 py-2.5 text-sm border ${
                          item.ok
                            ? 'bg-emerald-950/60 border-emerald-400/40 text-emerald-100'
                            : 'bg-rose-950/50 border-rose-400/35 text-rose-100'
                        }`}
                      >
                        <strong className="text-xs block mb-0.5">{currentCase.patientName}:</strong>
                        <MedicalText text={item.a} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="grid grid-cols-1 gap-2.5">
              {currentCase.station1Options.map((opt, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleStation1Pick(idx)}
                  className="btn-3d text-right p-4 rounded-xl bg-[#0D1E45] hover:bg-[#142B61] border border-white/12 text-sm md:text-base text-white cursor-pointer"
                >
                  <MedicalText text={opt.label} />
                </button>
              ))}
            </div>

            {hasOptimalChat && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStation(2)}
                  className="btn-3d px-6 py-2.5 rounded-xl bg-[#FFD166] text-[#0A1128] font-black text-sm cursor-pointer"
                >
                  انتقل إلى المحطة 2: أوضة الفحص ⬅
                </button>
              </div>
            )}
          </div>
        )}

        {/* STATION 2: Examination & Clinical Alert */}
        {station === 2 && (
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-[#FF9E00]/15 border border-[#FF9E00]/50 flex items-start gap-3">
              <Activity className="w-5 h-5 text-[#FF9E00] shrink-0 mt-0.5" />
              <div>
                <div className="text-xs font-bold text-[#FFD166] mb-1">Clinical Alert · تطور الحالة</div>
                <p className="text-sm md:text-base text-white font-semibold">
                  <MedicalText text={currentCase.station2Alert} />
                </p>
              </div>
            </div>

            <div className="glass-panel-soft p-4">
              <div className="text-xs font-bold text-[#00F5D4] mb-2">علامات الفحص الإكلينيكي (Signs):</div>
              <ul className="space-y-1.5 text-sm text-slate-200 list-disc list-inside">
                {currentCase.station2Findings.map((f, i) => (
                  <li key={i}>
                    <MedicalText text={f} />
                  </li>
                ))}
              </ul>
            </div>

            <h4 className="text-base md:text-lg font-bold text-white">
              <MedicalText text={currentCase.station2Question} />
            </h4>

            <div className="grid grid-cols-1 gap-2.5">
              {currentCase.station2Options.map((opt, idx) => {
                const chosen = station2Result?.chosen === idx;
                const isRight = idx === currentCase.station2Answer;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleStation2Pick(idx)}
                    className={`btn-3d text-right p-4 rounded-xl border text-sm md:text-base cursor-pointer ${
                      station2Result && isRight
                        ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                        : station2Result && chosen && !isRight
                        ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                        : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                    }`}
                  >
                    <MedicalText text={opt} />
                  </button>
                );
              })}
            </div>

            {station2Result?.ok && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStation(3)}
                  className="btn-3d px-6 py-2.5 rounded-xl bg-[#FFD166] text-[#0A1128] font-black text-sm cursor-pointer"
                >
                  انتقل إلى المحطة 3: لعبة الميزانية والفحوصات ⬅
                </button>
              </div>
            )}
          </div>
        )}

        {/* STATION 3: Budget Labs & Imaging */}
        {station === 3 && (
          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-between gap-3 glass-panel-soft p-4">
              <p className="text-sm md:text-base text-white font-semibold flex-1">
                <MedicalText text={currentCase.station3Prompt} />
              </p>
              <div className="px-4 py-2 rounded-xl bg-[#FFD166]/15 border border-[#FFD166]/45 text-[#FFD166] font-mono-num font-black text-sm shrink-0">
                الميزانية المتبقية: {remainingBudget} ج.م
              </div>
            </div>

            {labWarning && (
              <div className="p-3.5 rounded-xl bg-rose-950/70 border border-rose-400/50 text-rose-200 text-sm flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0" />
                <span>{labWarning}</span>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {currentCase.station3Labs.map((lab) => {
                const ordered = orderedLabIds.includes(lab.id);
                return (
                  <button
                    key={lab.id}
                    type="button"
                    onClick={() => handleOrderLab(lab.id)}
                    className={`btn-3d text-right p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between gap-2 ${
                      ordered
                        ? lab.isContraindicated
                          ? 'bg-rose-950/70 border-[#FF4D6D] text-white'
                          : lab.isOptimal
                          ? 'bg-emerald-950/60 border-[#00F5D4] text-white'
                          : 'bg-amber-950/40 border-amber-400/50 text-white'
                        : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2 w-full">
                      <span className="font-bold text-sm md:text-base">
                        <MedicalText text={lab.name} />
                      </span>
                      <span className="font-mono-num text-xs font-bold text-[#FFD166] shrink-0">
                        {lab.cost} ج.م
                      </span>
                    </div>

                    {ordered ? (
                      <div className="text-xs pt-2 border-t border-white/10 text-slate-200 leading-relaxed">
                        <strong className={lab.isOptimal ? 'text-[#00F5D4]' : 'text-[#FF4D6D]'}>
                          النتيجة:{' '}
                        </strong>
                        <MedicalText text={lab.resultText} />
                      </div>
                    ) : (
                      <div className="text-xs text-slate-400">اضغط لطلب الفحص من الميزانية</div>
                    )}
                  </button>
                );
              })}
            </div>

            {hasOptimalLab && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setStation(4)}
                  className="btn-3d px-6 py-2.5 rounded-xl bg-[#FFD166] text-[#0A1128] font-black text-sm cursor-pointer"
                >
                  انتقل إلى المحطة 4: قرار العملية والـ Management ⬅
                </button>
              </div>
            )}
          </div>
        )}

        {/* STATION 4: Operative Decision */}
        {station === 4 && (
          <div className="space-y-4">
            <div className="glass-panel-soft p-4">
              <div className="text-xs font-bold text-[#00F5D4] mb-1">Operative Decision · قرار أوضة العمليات</div>
              <h4 className="text-base md:text-lg font-bold text-white leading-relaxed">
                <MedicalText text={currentCase.station4Prompt} />
              </h4>
            </div>

            <div className="grid grid-cols-1 gap-2.5">
              {currentCase.station4Options.map((opt, idx) => {
                const chosen = station4Result?.chosen === idx;
                const isRight = idx === currentCase.station4Answer;
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleStation4Pick(idx)}
                    className={`btn-3d text-right p-4 rounded-xl border text-sm md:text-base cursor-pointer ${
                      station4Result && isRight
                        ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                        : station4Result && chosen && !isRight
                        ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                        : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                    }`}
                  >
                    <MedicalText text={opt} />
                  </button>
                );
              })}
            </div>

            {station4Result?.ok && activeCaseIdx < CLINIC_CASES.length - 1 && (
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => selectCase(activeCaseIdx + 1)}
                  className="btn-3d px-6 py-2.5 rounded-xl bg-gradient-to-l from-[#00F5D4] to-[#00C4A7] text-[#0A1128] font-black text-sm cursor-pointer"
                >
                  المريض التالي في العيادة ({activeCaseIdx + 2} / {CLINIC_CASES.length}) ⬅
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
