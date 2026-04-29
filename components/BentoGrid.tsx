"use client";

import { Fragment, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const timeline = [
  { role: "Solo Founder", company: "Independent", period: "2025 — now", desc: "5 SaaS products, building in public", active: true },
  { role: "Product Designer", company: "MarsX", period: "2023 — 2026", desc: "SaaS & AI startup studio", active: false },
  { role: "UI/UX Designer", company: "Instadapp", period: "2021 — 2023", desc: "DeFi, $10M Series A", active: false },
  { role: "UI Designer", company: "LAD Network", period: "2020 — 2021", desc: "Browser extensions", active: false },
];

const skills = [
  // Identity / process
  { name: "Solo Founding", highlight: true },
  { name: "Vibe Coding", highlight: true },
  { name: "Claude Code", highlight: true },
  { name: "Cursor", highlight: false },
  { name: "Figma", highlight: false },
  { name: "MVP Design", highlight: false },

  // Web stack
  { name: "Next.js", highlight: false },
  { name: "React", highlight: false },
  { name: "TypeScript", highlight: false },
  { name: "Tailwind", highlight: false },
  { name: "Shadcn/ui", highlight: false },
  { name: "Zod", highlight: false },

  // iOS
  { name: "iOS / SwiftUI", highlight: false },
  { name: "App Store Launch", highlight: false },

  // Backend / infra / data
  { name: "Supabase", highlight: false },
  { name: "PostgreSQL", highlight: false },
  { name: "Vercel", highlight: false },
  { name: "Resend", highlight: false },

  // Payments
  { name: "Stripe", highlight: false },
  { name: "RevenueCat", highlight: false },

  // API integrations
  { name: "Meta API", highlight: false },
  { name: "X API", highlight: false },
  { name: "TikTok API", highlight: false },
  { name: "LinkedIn API", highlight: false },
  { name: "Google API", highlight: false },
  { name: "OAuth", highlight: false },

  // AI
  { name: "Anthropic API", highlight: false },
  { name: "OpenAI API", highlight: false },

  // Growth
  { name: "SEO", highlight: false },
  { name: "CRO", highlight: false },
  { name: "A/B Testing", highlight: false },
  { name: "PostHog", highlight: false },
  { name: "PH Launch", highlight: false },
];

const stats = [
  { value: "5", suffix: "", label: "Live products" },
  { value: "10", suffix: "+", label: "Years designing" },
  { value: "30", suffix: "%", label: "Avg CVR lift" },
  { value: "6", suffix: "fig", label: "MRR scaled" },
];

const steps = [
  { num: "01", title: "Idea" },
  { num: "02", title: "Design" },
  { num: "03", title: "Vibe-code" },
  { num: "04", title: "Ship" },
  { num: "05", title: "Iterate" },
];

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      if (statsRef.current) {
        statsRef.current.querySelectorAll(".stat-num").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.6,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
            onUpdate: () => {
              (el as HTMLElement).textContent = Math.round(obj.val).toString();
            },
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience">
      <div className="max-w-container mx-auto px-5 flex flex-col gap-3">
        {/* Numbers strip */}
        <div ref={statsRef} className="glass-strong rounded-card p-5 md:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4 sr">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="flex items-baseline gap-0.5">
                <span
                  className="stat-num font-display font-medium text-2xl text-foreground"
                  data-target={stat.value}
                >
                  0
                </span>
                <span className="font-display font-medium text-base text-accent">
                  {stat.suffix}
                </span>
              </div>
              <p className="text-[0.6875rem] text-muted mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Experience + Location two-up */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div className="sm:col-span-2 glass-strong rounded-card p-5 md:p-6 sr">
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
              Experience
            </span>
            <div className="space-y-3">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center pt-1">
                    <div
                      className={`w-2 h-2 rounded-full border ${
                        item.active
                          ? "bg-accent border-accent"
                          : "bg-bg border-border"
                      }`}
                    />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-1" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-display font-medium text-xs text-foreground">
                      {item.role}{" "}
                      <span className="text-muted font-normal">— {item.company}</span>
                    </h4>
                    <p className="text-[0.6875rem] text-muted mt-0.5">
                      {item.period} · {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-strong rounded-card p-5 md:p-6 relative overflow-hidden sr min-h-[180px]">
            {/* Wireframe globe — peeking from bottom-right */}
            <svg aria-hidden="true"
              className="absolute -bottom-20 -right-20 sm:-bottom-28 sm:-right-28 w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] text-foreground/25 pointer-events-none animate-spin-slow"
              viewBox="0 0 200 200"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
            >
              {/* Outline */}
              <circle cx="100" cy="100" r="92" strokeWidth="0.8" />

              {/* Meridians */}
              <ellipse cx="100" cy="100" rx="92" ry="92" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="68" ry="92" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="38" ry="92" strokeWidth="0.5" />
              <line x1="100" y1="8" x2="100" y2="192" strokeWidth="0.5" />

              {/* Parallels */}
              <line x1="9" y1="100" x2="191" y2="100" strokeWidth="0.7" />
              <ellipse cx="100" cy="100" rx="88" ry="44" strokeWidth="0.5" />
              <ellipse cx="100" cy="100" rx="74" ry="70" strokeWidth="0.5" />

              {/* Accent dotted equator overlay */}
              <circle
                cx="100"
                cy="100"
                r="92"
                strokeDasharray="1 4"
                strokeWidth="0.6"
                stroke="rgb(var(--accent) / 0.5)"
              />
            </svg>

            {/* Pulse dot — back to top-right */}
            <div className="absolute top-4 right-4 flex h-2 w-2 z-10">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </div>

            <div className="relative">
              <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
                Located in
              </span>
              <h3 className="font-display font-medium text-base text-foreground">
                Buenos Aires
              </h3>
              <p className="text-[0.6875rem] text-muted mt-0.5">Argentina · GMT-3</p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="glass-strong rounded-card p-5 md:p-6 sr">
          <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
            Skills &amp; Tools
          </span>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill.name}
                className={`px-2.5 py-1 rounded-full text-[0.6875rem] border transition-colors ${
                  skill.highlight
                    ? "bg-accent/10 border-accent/25 text-accent"
                    : "bg-bg border-border text-muted hover:text-foreground"
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>

        {/* From idea to launch */}
        <div className="glass-strong rounded-card p-5 md:p-6 sr">
          <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
            From idea to launch
          </span>
          {/* Mobile: simple grid, no connectors */}
          <div className="grid grid-cols-5 gap-2 sm:hidden">
            {steps.map((step) => (
              <div key={step.num}>
                <span className="font-mono text-[0.625rem] text-accent block mb-1">
                  {step.num}
                </span>
                <h4 className="font-display font-medium text-xs text-foreground">
                  {step.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Desktop: flex with dashed connectors + stage dots */}
          <div className="hidden sm:flex items-start gap-3">
            {steps.map((step, i) => (
              <Fragment key={step.num}>
                <div className="shrink-0">
                  <span className="font-mono text-[0.625rem] text-accent block mb-1">
                    {step.num}
                  </span>
                  <h4 className="font-display font-medium text-xs text-foreground whitespace-nowrap">
                    {step.title}
                  </h4>
                </div>
                {i < steps.length - 1 && (
                  <div className="flex-1 flex items-center gap-1.5 mt-[7px] min-w-[24px]">
                    <span className="w-1 h-1 rounded-full bg-accent/70 shrink-0" />
                    <div className="flex-1 border-t border-dashed border-muted/40" />
                    <span className="w-1 h-1 rounded-full bg-accent/70 shrink-0" />
                  </div>
                )}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
