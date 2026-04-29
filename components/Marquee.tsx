"use client";

import { buildingNow } from "@/data/projects";

export default function Marquee() {
  const items = [...buildingNow, ...buildingNow];

  return (
    <div className="max-w-container mx-auto px-5 py-2">
      <div
        className="glass rounded-full overflow-hidden group"
        aria-label="Currently shipping"
      >
        <div className="flex animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap py-2.5">
          {items.map((p, i) => (
            <a
              key={`${p.slug}-${i}`}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 text-[0.6875rem] font-mono text-muted hover:text-foreground transition-colors"
              data-cursor-hover
            >
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              <span>
                {p.url.replace(/^https?:\/\//, "").replace(/\/$/, "")}
              </span>
              <span className="text-muted/40">·</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
