"use client";
import { createContext, useCallback, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
const Ctx = createContext<{ theme: Theme; toggle: () => void }>({ theme: "light", toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");
  useEffect(() => {
    try {
      const saved = localStorage.getItem("oqfa:theme") as Theme | null;
      const sys = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
      const initial = saved ?? sys;
      setTheme(initial);
      document.documentElement.classList.toggle("dark", initial === "dark");
    } catch { /* ignore */ }
  }, []);
  const toggle = useCallback(() => {
    setTheme((t) => {
      const n = t === "light" ? "dark" : "light";
      try { localStorage.setItem("oqfa:theme", n); } catch { /* ignore */ }
      document.documentElement.classList.toggle("dark", n === "dark");
      return n;
    });
  }, []);
  return <Ctx.Provider value={{ theme, toggle }}>{children}</Ctx.Provider>;
}

export function useTheme() { return useContext(Ctx); }
