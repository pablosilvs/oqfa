import { cn } from "@/lib/utils";

export function Badge({ children, tone = "blue", className }: { children: React.ReactNode; tone?: "blue" | "green" | "yellow" | "red" | "gray"; className?: string }) {
  const tones: Record<string, string> = {
    blue: "bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 dark:border dark:border-blue-900",
    green: "bg-green-100 text-green-800 dark:bg-green-950 dark:text-green-300 dark:border dark:border-green-900",
    yellow: "bg-yellow-100 text-yellow-900 dark:bg-yellow-950 dark:text-yellow-200 dark:border dark:border-yellow-900",
    red: "bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 dark:border dark:border-red-900",
    gray: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300 dark:border dark:border-slate-700",
  };
  return <span className={cn("inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium", tones[tone], className)}>{children}</span>;
}

export function Card({ children, className }: { children: React.ReactNode; className?: string }) {
  return <div className={cn("rounded-xl border border-[var(--card-border)] bg-[var(--card)] p-4 shadow-[0_1px_2px_rgba(15,23,42,0.05)]", className)}>{children}</div>;
}
