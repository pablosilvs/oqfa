import type { ActionItem, Solution, SolutionStep, WarningItem } from "@/types";

function normActions(items: Array<ActionItem | string>, prefix: string): ActionItem[] {
  return items.map((it, i) =>
    typeof it === "string" ? { id: `${prefix}-a${i + 1}`, title: it } : it
  );
}

function normSteps(steps: Array<SolutionStep | { title: string; description: string; warning?: string }>, prefix: string): SolutionStep[] {
  return (steps as SolutionStep[]).map((s, i) => ({
    id: (s as SolutionStep).id ?? `${prefix}-s${i + 1}`,
    title: s.title,
    description: s.description,
    warning: (s as SolutionStep).warning,
  }));
}

function normWarnings(items: Array<WarningItem | string> | undefined, prefix: string): WarningItem[] | undefined {
  if (!items) return undefined;
  return items.map((w, i) =>
    typeof w === "string"
      ? { id: `${prefix}-w${i + 1}`, title: "Atenção", description: w }
      : w
  );
}

export function normalizeSolution(raw: unknown, fallbackPrefix: string): Solution {
  const s = raw as Solution & {
    firstActions: Array<ActionItem | string>;
    avoidActions?: Array<ActionItem | string>;
    steps: SolutionStep[];
    warnings?: Array<WarningItem | string>;
  };
  const prefix = s.slug || fallbackPrefix;
  return {
    ...s,
    firstActions: normActions(s.firstActions as Array<ActionItem | string>, prefix),
    avoidActions: s.avoidActions ? normActions(s.avoidActions as Array<ActionItem | string>, prefix) : undefined,
    steps: normSteps(s.steps as SolutionStep[], prefix),
    warnings: normWarnings(s.warnings as Array<WarningItem | string> | undefined, prefix),
  };
}
