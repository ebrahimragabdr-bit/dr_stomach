export type ChapterId = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export type OrganThemeId = 'stomach' | 'duodenum' | 'bariatric';

export interface Question {
  id: number;
  ch: ChapterId;
  q: string;
  o: string[];
  a: number;
  exp: string;
  tag: string;
  hint?: string;
  source?: string;
}

export interface Flashcard {
  id: string;
  frontTitle: string;
  frontBadge: string;
  backContent: string;
  keyNumber: string;
}

export interface ClinicChatOption {
  label: string;
  patientReply: string;
  isOptimal: boolean;
  feedback: string;
}

export interface ClinicLabOption {
  id: string;
  name: string;
  cost: number;
  isOptimal: boolean;
  isContraindicated?: boolean;
  resultText: string;
  feedback: string;
}

export interface ClinicCase {
  id: string;
  title: string;
  subtitle: string;
  patientName: string;
  age: number;
  appearance: string;
  chiefComplaint: string;
  vitals: {
    bp: string;
    hr: number;
    temp: string;
    spo2: string;
    statusLabel: string;
  };
  linkedQuestionIds: number[];
  // Station 1: History Chat
  station1Prompt: string;
  station1Options: ClinicChatOption[];
  // Station 2: Examination & Clinical Alert
  station2Alert: string;
  station2Findings: string[];
  station2Question: string;
  station2Options: string[];
  station2Answer: number;
  station2Exp: string;
  // Station 3: Budget Labs & Imaging
  station3Budget: number;
  station3Prompt: string;
  station3Labs: ClinicLabOption[];
  // Station 4: Operative Decision
  station4Prompt: string;
  station4Options: string[];
  station4Answer: number;
  station4Exp: string;
}

export interface EquationPuzzle {
  id: number;
  clues: [string, string, string];
  options: string[];
  answer: number;
  exp: string;
}

export interface MatchPair {
  id: string;
  cause: string;
  mechanismAndTest: string;
}

export interface RadiologyHotspot {
  id: string;
  svgType: 'trifoliate' | 'soupdish' | 'hourglass' | 'pneumoperitoneum';
  title: string;
  figRef: string;
  question: string;
  options: string[];
  answer: number;
  exp: string;
}

export interface SpotLieItem {
  id: number;
  topic: string;
  statements: [string, string, string, string];
  lieIndex: number;
  exp: string;
}

export interface TriagePatient {
  id: string;
  label: string;
  summary: string;
  vitals: string;
  labs: string;
  correctAction: 'immediate_or' | 'icu_resuscitate_first';
  rationale: string;
}

export interface TriageScenario {
  id: number;
  title: string;
  timeLabel: string;
  intro: string;
  patients: TriagePatient[];
  overallExp: string;
}

export interface PimpQuestion {
  id: number;
  professorMood: string;
  question: string;
  options: string[];
  answer: number;
  exp: string;
}

export interface SurgicalRank {
  level: number;
  title: string;
  emoji: string;
  minXp: number;
}

export interface GameProgress {
  playerName: string;
  xp: number;
  streak: number;
  bestStreak: number;
  hearts: number;
  maxHearts: number;
  answeredIds: number[];
  correctIds: number[];
  mistakeIds: number[];
  completedClinicIds: string[];
  completedChapters: ChapterId[];
  bossHp: number;
  bossMaxHp: number;
  bossDefeated: boolean;
  soundMuted: boolean;
}
