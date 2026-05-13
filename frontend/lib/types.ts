export interface WorkshopMeta {
  format: string;
  audience: string;
  groupSize: string | null;
  duration: string;
}

export interface TimingCard {
  arrival: string;
  reactivating: string;
  informing: string;
  verarbeitung: string;
  assessing: string;
}

export interface ARIVAPhaseBase {
  timeRange: string;
  script: string;
}

export interface ReactivatingPhase extends ARIVAPhaseBase {
  question: string;
  format: string;
}

export interface InformingPhase extends ARIVAPhaseBase {
  coreConcept: string;
}

export interface VerarbeitungPhase extends ARIVAPhaseBase {
  taskPrompt: string;
  format: string;
}

export interface AssessingPhase extends ARIVAPhaseBase {
  question: string;
  successSignal: string;
}

export interface ARIVAPhases {
  arrival: ARIVAPhaseBase;
  reactivating: ReactivatingPhase;
  informing: InformingPhase;
  verarbeitung: VerarbeitungPhase;
  assessing: AssessingPhase;
}

export interface Slide {
  number: number;
  title: string;
  phase: string;
  layout: string;
  content: string;
  speakerCue: string;
  designPrompt: string;
}

export interface Misconception {
  misconception: string;
  reality: string;
}

export interface FacilitatorTip {
  title: string;
  body: string;
}

export interface Workshop {
  slug: string;
  title: string;
  generatedAt: string;
  meta: WorkshopMeta;
  ilo: string;
  bloomsLevel: string;
  coreConcept: string;
  timingCard: TimingCard;
  preRunChecklist: string[];
  ariva: ARIVAPhases;
  slides: Slide[];
  misconceptions: Misconception[];
  outOfScope: string[];
  facilitatorTips: FacilitatorTip[];
  deeperResources: string[];
  editorialNotes: string;
}

export interface WorkshopIndexEntry {
  slug: string;
  title: string;
  audience: string;
  ilo: string;
  bloomsLevel: string;
  generatedAt: string;
}

export interface WorkshopIndex {
  workshops: WorkshopIndexEntry[];
}
