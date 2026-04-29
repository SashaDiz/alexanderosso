"use client";

import Image from "next/image";
import {
  buildingNow,
  STAGES,
  type BuildingProject,
  type Stage,
} from "@/data/projects";

function StageDots({ stage }: { stage: Stage }) {
  const idx = STAGES.indexOf(stage);
  return (
    <div className="flex items-center gap-1">
      {STAGES.map((_, i) => {
        const done = i <= idx;
        const current = i === idx;
        return (
          <span
            key={i}
            className={`h-1 rounded-full transition-all ${
              current
                ? "w-3 bg-accent"
                : done
                ? "w-1.5 bg-accent/60"
                : "w-1.5 bg-border"
            }`}
          />
        );
      })}
    </div>
  );
}

function ProjectThumb({ project }: { project: BuildingProject }) {
  return (
    <div
      className={`relative w-11 h-11 rounded-xl overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center shrink-0 ring-1 ring-foreground/10`}
    >
      {project.thumbnail ? (
        <Image
          src={project.thumbnail}
          alt={project.name}
          width={44}
          height={44}
          className="w-7 h-7 rounded-md"
        />
      ) : (
        <span
          className="font-display font-medium text-base"
          style={{ color: project.accentColor }}
        >
          {project.name.charAt(0)}
        </span>
      )}
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none" />
    </div>
  );
}

function ProjectRow({ project }: { project: BuildingProject }) {
  const cleanUrl = project.url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 py-4 border-b border-border last:border-b-0 hover:bg-bg-card-hover/50 transition-colors -mx-4 px-4 rounded-lg"
      data-cursor-hover
    >
      <ProjectThumb project={project} />

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap mb-1">
          <h3 className="font-display font-medium text-sm text-foreground group-hover:text-accent transition-colors">
            {project.name}
          </h3>
          <span className="text-[0.625rem] font-mono text-muted">
            {cleanUrl}
          </span>
        </div>
        <p className="text-xs text-muted leading-snug line-clamp-2">
          {project.description}
        </p>
      </div>

      <div className="hidden sm:flex flex-col items-end gap-1.5 shrink-0 w-[140px]">
        <StageDots stage={project.stage} />
        <span className="text-[0.625rem] font-mono text-muted text-right truncate w-full">
          {project.stage} · {project.launched}
        </span>
      </div>

      <svg aria-hidden="true"
        width="12"
        height="12"
        viewBox="0 0 14 14"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
      >
        <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
      </svg>
    </a>
  );
}

export default function NowBuilding() {
  return (
    <section id="building" className="">
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-medium text-base text-foreground">
              Now building
            </h2>
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
              {buildingNow.length} active
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed mb-6 max-w-[60ch]">
            Five SaaS products shipping in parallel — designed, coded, and
            launched solo with Figma + Cursor + Claude Code.
          </p>

          <div className="flex flex-col">
            {buildingNow.map((project) => (
              <ProjectRow key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
