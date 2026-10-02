export type RiskLevel = "baixo" | "moderado" | "alto";
export type Difficulty = "muito-facil" | "facil" | "medio" | "avancado";

export interface ActionItem {
  id: string;
  title: string;
  description?: string;
}

export interface SolutionStep {
  id: string;
  title: string;
  description: string;
  warning?: string;
}

export interface WarningItem {
  id: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface DiagnosticOption {
  label: string;
  nextNodeId: string;
}

export interface DiagnosticResult {
  title: string;
  description: string;
  solutionSlug?: string;
}

export interface DiagnosticNode {
  id: string;
  question?: string;
  description?: string;
  options?: DiagnosticOption[];
  result?: DiagnosticResult;
}

export interface Solution {
  id: string;
  slug: string;
  categorySlug: string;
  title: string;
  shortTitle?: string;
  description: string;
  excerpt: string;
  keywords: string[];
  synonyms?: string[];
  difficulty: Difficulty;
  estimatedTime: string;
  riskLevel: RiskLevel;
  image?: string;
  imageAlt?: string;
  photographer?: string;
  photographerUrl?: string;
  firstActions: ActionItem[];
  avoidActions?: ActionItem[];
  steps: SolutionStep[];
  warnings?: WarningItem[];
  diagnostics?: DiagnosticNode[];
  diagnosticEntryId?: string;
  relatedSolutions: string[];
  faq?: FAQItem[];
  updatedAt: string;
  popular?: boolean;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  icon: string;
  image?: string;
  imageAlt?: string;
  group?: string;
}
