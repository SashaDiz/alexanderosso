"use client";

import { useEffect, useState } from "react";

const SCALES = [1, 1.15, 1.3] as const;
type Scale = (typeof SCALES)[number];

const LABELS: Record<Scale, string> = {
  1: "Default",
  1.15: "Large",
  1.3: "Larger",
};

function getStored(): Scale {
  try {
    const v = parseFloat(localStorage.getItem("font-scale") || "1");
    if (SCALES.includes(v as Scale)) return v as Scale;
  } catch {}
  return 1;
}

export default function FontSizeToggle() {
  const [scale, setScale] = useState<Scale>(1);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setScale(getStored());
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.style.setProperty("--font-scale", String(scale));
    try {
      localStorage.setItem("font-scale", String(scale));
    } catch {}
  }, [scale, mounted]);

  const cycle = () => {
    const idx = SCALES.indexOf(scale);
    setScale(SCALES[(idx + 1) % SCALES.length]);
  };

  const label = mounted ? LABELS[scale] : "Default";

  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Text size: ${label}. Click to cycle text size.`}
      title={`Text size: ${label} (click to cycle)`}
      data-cursor-hover
      className="relative w-7 h-7 rounded-full flex items-center justify-center text-muted hover:text-foreground transition-colors"
    >
      <span aria-hidden="true" className="font-display font-medium leading-none flex items-baseline">
        <span className="text-[10px]">A</span>
        <span className="text-[14px]">A</span>
      </span>
      <span className="sr-only">Current text size: {label}</span>
    </button>
  );
}
