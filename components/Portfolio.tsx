"use client";

import { pastWork } from "@/data/projects";

export default function Portfolio() {
  return (
    <section id="work" className="">
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display font-medium text-base text-foreground">
              Past work
            </h2>
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted">
              Where I cut my teeth
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed mb-6 max-w-[60ch]">
            A decade designing products before going solo — DeFi at Instadapp,
            SaaS scale at MarsX, and freelance gigs in between.
          </p>

          <div className="flex flex-col">
            {pastWork.map((project, i) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-start gap-4 py-3.5 ${
                  i < pastWork.length - 1 ? "border-b border-border" : ""
                } hover:bg-bg-card-hover/50 transition-colors -mx-4 px-4 rounded-lg`}
                data-cursor-hover
              >
                <span className="font-mono text-[0.625rem] text-accent shrink-0 w-20 mt-0.5">
                  {project.period}
                </span>
                <div className="flex-1 min-w-0">
                  <p className="text-[0.625rem] font-mono text-muted mb-0.5">
                    {project.company}
                  </p>
                  <h3 className="font-display font-medium text-sm text-foreground group-hover:text-accent transition-colors mb-1">
                    {project.title}
                  </h3>
                  <p className="text-[0.6875rem] text-muted leading-snug">
                    {project.desc}
                  </p>
                </div>
                <svg aria-hidden="true"
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 mt-1 shrink-0"
                >
                  <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
