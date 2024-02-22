"use client";

import { Lamp, Power, PowerOff } from "lucide-react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <button className="relative inline-flex text-2xl w-full h-full items-center justify-between px-8 py-6" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
      {theme === "light" ? 'Lights Off' : 'Lights On'}
      <Power className="transition-all scale-100 rotate-0 dark:-rotate-180 dark:scale-0"/>
      <PowerOff className="absolute end-8 transition-all scale-0 rotate-180 dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle</span>
    </button>
  );
}
