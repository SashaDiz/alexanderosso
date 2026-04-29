"use client";

import { useEffect, useState } from "react";

type Mode = "light" | "dark" | "system";

const ORDER: Mode[] = ["light", "dark", "system"];

function resolveSystemTheme(): "light" | "dark" {
  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>("system");
  const [mounted, setMounted] = useState(false);

  // Initial read from localStorage
  useEffect(() => {
    let stored: Mode = "system";
    try {
      const v = localStorage.getItem("theme");
      if (v === "light" || v === "dark" || v === "system") stored = v;
    } catch {}
    setMode(stored);
    setMounted(true);
  }, []);

  // Apply current mode → data-theme; listen to system in 'system' mode
  useEffect(() => {
    if (!mounted) return;

    const apply = () => {
      const resolved = mode === "system" ? resolveSystemTheme() : mode;
      document.documentElement.setAttribute("data-theme", resolved);
    };

    apply();

    if (mode === "system") {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      mq.addEventListener("change", apply);
      return () => mq.removeEventListener("change", apply);
    }
  }, [mode, mounted]);

  const cycle = () => {
    const idx = ORDER.indexOf(mode);
    const next = ORDER[(idx + 1) % ORDER.length];
    setMode(next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
  };

  const label =
    mode === "light"
      ? "Light mode"
      : mode === "dark"
      ? "Dark mode"
      : "System theme";

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Click to cycle.`}
      title={`${label} — click to cycle`}
      data-cursor-hover
      className="relative w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-foreground transition-colors"
    >
      {mounted && (
        <>
          {/* Sun */}
          <svg aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute transition-all duration-300 ${
              mode === "light"
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 -rotate-90 scale-50"
            }`}
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2 M12 20v2 M4.93 4.93l1.41 1.41 M17.66 17.66l1.41 1.41 M2 12h2 M20 12h2 M4.93 19.07l1.41-1.41 M17.66 6.34l1.41-1.41" />
          </svg>

          {/* Moon */}
          <svg aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute transition-all duration-300 ${
              mode === "dark"
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-90 scale-50"
            }`}
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>

          {/* Monitor (system) */}
          <svg aria-hidden="true"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`absolute transition-all duration-300 ${
              mode === "system"
                ? "opacity-100 rotate-0 scale-100"
                : "opacity-0 rotate-180 scale-50"
            }`}
          >
            <rect x="3" y="4" width="18" height="13" rx="2" />
            <path d="M9 21h6 M12 17v4" />
          </svg>
        </>
      )}
    </button>
  );
}
