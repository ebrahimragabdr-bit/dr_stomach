import React, { useState } from 'react';
import { Ambulance, CheckCircle2, GraduationCap, Moon, ShieldAlert } from 'lucide-react';
import { PIMP_QUESTIONS, TRIAGE_SCENARIOS } from '../data/chaptersData';
import { evaluateTriageAssignments } from '../utils/gameLogic';
import { MedicalText } from './MedicalText';

interface Chapter7NightShiftProps {
  onScoreEvent: (questionId: number | undefined, isCorrect: boolean, customExp: string) => void;
}

export const Chapter7NightShift: React.FC<Chapter7NightShiftProps> = ({ onScoreEvent }) => {
  const [mode, setMode] = useState<'triage' | 'pimp'>('triage');

  // Triage State
  const scenario = TRIAGE_SCENARIOS[0];
  const [assignments, setAssignments] = useState<Record<string, 'immediate_or' | 'icu_resuscitate_first'>>({});
  const [triageChecked, setTriageChecked] = useState(false);

  // Pimp Questions State
  const [pimpIdx, setPimpIdx] = useState(0);
  const [pimpAnswers, setPimpAnswers] = useState<Record<number, number>>({});

  const currentPimp = PIMP_QUESTIONS[pimpIdx];

  const handleAssign = (patientId: string, action: 'immediate_or' | 'icu_resuscitate_first') => {
    setAssignments((prev) => ({ ...prev, [patientId]: action }));
    setTriageChecked(false);
  };

  const handleSubmitTriage = () => {
    const expected: Record<string, 'immediate_or' | 'icu_resuscitate_first'> = {};
    for (const p of scenario.patients) {
      expected[p.id] = p.correctAction;
    }
    const res = evaluateTriageAssignments(assignments, expected);
    setTriageChecked(true);
    onScoreEvent(scenario.id, res.allCorrect, scenario.overallExp);
  };

  const allPatientsAssigned = scenario.patients.every((p) => Boolean(assignments[p.id]));

  return (
    <div className="space-y-5">
      {/* Header & Mode Switch */}
      <div className="glass-card-3d p-5 md:p-6">
        <div className="mb-4">
          <h2 className="text-xl md:text-2xl font-black text-white">
            🌙 Chapter 7: نبطشية الطوارئ وأسئلة الراوند المحرجة (91–95)
          </h2>
          <p className="text-xs md:text-sm text-slate-300 mt-0.5">
            الساعة 2 بالليل في الاستقبال + أسئلة أستاذ الجراحة اللي بتحدد درجتك في الشفوي والراوند
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setMode('triage')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer ${
              mode === 'triage'
                ? 'bg-[#FF4D6D] text-white border-[#FF4D6D]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <Moon className="w-4 h-4" />
            <span>1. ترياج الطوارئ الساعة 2 ص (Q91)</span>
          </button>

          <button
            type="button"
            onClick={() => setMode('pimp')}
            className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold flex items-center gap-2 border cursor-pointer ${
              mode === 'pimp'
                ? 'bg-[#FFD166] text-[#0A1128] border-[#FFD166]'
                : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/10'
            }`}
          >
            <GraduationCap className="w-4 h-4" />
            <span>2. أسئلة أستاذ الجراحة في الراوند (92–95)</span>
          </button>
        </div>
      </div>

      {/* MODE 1: Night Shift Triage */}
      {mode === 'triage' && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg md:text-xl font-black text-white">{scenario.title}</h3>
            <span className="font-mono-num text-xs font-bold text-[#FF4D6D]">{scenario.timeLabel}</span>
          </div>

          <p className="text-sm md:text-base text-slate-200 leading-relaxed">
            <MedicalText text={scenario.intro} />
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {scenario.patients.map((p) => {
              const picked = assignments[p.id];
              const isCorrect = triageChecked && picked === p.correctAction;
              const isWrong = triageChecked && picked !== p.correctAction;
              return (
                <div
                  key={p.id}
                  className={`glass-panel-soft p-5 flex flex-col justify-between gap-4 border ${
                    isCorrect
                      ? 'border-[#00F5D4]'
                      : isWrong
                      ? 'border-[#FF4D6D]'
                      : 'border-white/12'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="font-black text-base text-[#FFD166]">{p.label}</div>
                    <p className="text-sm text-white leading-relaxed">
                      <MedicalText text={p.summary} />
                    </p>
                    <div className="text-xs font-mono-num text-[#00F5D4]">{p.vitals}</div>
                    <div className="text-xs font-mono-num text-rose-300">{p.labs}</div>
                  </div>

                  <div className="space-y-2 pt-2 border-t border-white/10">
                    <button
                      type="button"
                      onClick={() => handleAssign(p.id, 'immediate_or')}
                      className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                        picked === 'immediate_or'
                          ? 'bg-[#FF4D6D] text-white border-[#FF4D6D]'
                          : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/12'
                      }`}
                    >
                      <Ambulance className="w-4 h-4" />
                      <span>عمليات فوراً بعد الإنعاش السريع</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => handleAssign(p.id, 'icu_resuscitate_first')}
                      className={`w-full p-2.5 rounded-xl border text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer ${
                        picked === 'icu_resuscitate_first'
                          ? 'bg-[#00F5D4] text-[#0A1128] border-[#00F5D4]'
                          : 'bg-white/6 hover:bg-white/12 text-slate-200 border-white/12'
                      }`}
                    >
                      <ShieldAlert className="w-4 h-4" />
                      <span>ممنوع العمليات الليلة (رعاية + تصليح أملاح)</span>
                    </button>

                    {triageChecked && (
                      <div className="text-xs text-slate-200 pt-2 leading-relaxed">
                        <strong className={isCorrect ? 'text-[#00F5D4]' : 'text-[#FF4D6D]'}>
                          التقييم:{' '}
                        </strong>
                        <MedicalText text={p.rationale} />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              disabled={!allPatientsAssigned}
              onClick={handleSubmitTriage}
              className="btn-3d px-7 py-3 rounded-xl bg-gradient-to-l from-[#00F5D4] to-[#00C4A7] disabled:opacity-40 text-[#0A1128] font-black text-sm cursor-pointer"
            >
              اعتماد قرار الترياج واستقبال النبطشية
            </button>
          </div>
        </div>
      )}

      {/* MODE 2: Professor's Pimp Questions */}
      {mode === 'pimp' && (
        <div className="glass-card-3d p-6 md:p-8 space-y-5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <span className="text-xs font-bold text-[#FFD166]">
              👨‍⚕️ سؤال الأستاذ Q{currentPimp.id}
            </span>
            <div className="flex gap-1.5">
              {PIMP_QUESTIONS.map((pq, i) => (
                <button
                  key={pq.id}
                  type="button"
                  onClick={() => setPimpIdx(i)}
                  className={`h-8 px-3 rounded-lg font-mono-num text-xs font-bold border cursor-pointer ${
                    i === pimpIdx
                      ? 'bg-[#FFD166] text-[#0A1128] border-[#FFD166]'
                      : pimpAnswers[pq.id] === pq.answer
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40'
                      : 'bg-white/6 text-slate-300 border-white/10'
                  }`}
                >
                  Q{pq.id}
                </button>
              ))}
            </div>
          </div>

          <div className="glass-panel-soft p-4 text-sm text-[#FFD166] font-bold">
            {currentPimp.professorMood}
          </div>

          <h3 className="text-lg md:text-xl font-black text-white leading-relaxed">
            <MedicalText text={currentPimp.question} />
          </h3>

          <div className="grid grid-cols-1 gap-3">
            {currentPimp.options.map((opt, idx) => {
              const answered = pimpAnswers[currentPimp.id] !== undefined;
              const chosen = pimpAnswers[currentPimp.id] === idx;
              const isRight = idx === currentPimp.answer;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setPimpAnswers((p) => ({ ...p, [currentPimp.id]: idx }));
                    onScoreEvent(currentPimp.id, isRight, currentPimp.exp);
                  }}
                  className={`btn-3d text-right p-4 rounded-2xl border flex items-start gap-3 cursor-pointer ${
                    answered && isRight
                      ? 'bg-emerald-500/20 border-[#00F5D4] text-white'
                      : answered && chosen && !isRight
                      ? 'bg-rose-500/20 border-[#FF4D6D] text-white'
                      : 'bg-[#0D1E45] hover:bg-[#142B61] border-white/12 text-white'
                  }`}
                >
                  <span className="font-mono-num font-black text-xs w-7 h-7 rounded-lg bg-white/10 text-[#00F5D4] flex items-center justify-center shrink-0">
                    {String.fromCharCode(65 + idx)}
                  </span>
                  <span className="text-sm md:text-base font-semibold leading-relaxed">
                    <MedicalText text={opt} />
                  </span>
                </button>
              );
            })}
          </div>

          {pimpAnswers[currentPimp.id] === currentPimp.answer && (
            <div className="p-4 rounded-xl bg-emerald-950/50 border border-[#00F5D4]/40 flex items-center gap-2 text-sm text-emerald-100">
              <CheckCircle2 className="w-5 h-5 text-[#00F5D4] shrink-0" />
              <span>أستاذ الجراحة هز راسه بإعجاب وقالك: "ممتاز يا دكتور!"</span>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
