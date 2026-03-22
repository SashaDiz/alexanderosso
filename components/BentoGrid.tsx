"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const timeline = [
  {
    role: "Product Designer",
    company: "MarsX",
    period: "2023–2026",
    desc: "SaaS & AI startup studio",
    active: true,
  },
  {
    role: "UI/UX Designer",
    company: "Instadapp",
    period: "2021–2023",
    desc: "DeFi, $10M Series A",
    active: false,
  },
  {
    role: "UI Designer",
    company: "LAD Network",
    period: "2020–2021",
    desc: "Browser extensions",
    active: false,
  },
  {
    role: "UI/UX Designer",
    company: "Light-tech.io",
    period: "2018–2020",
    desc: "WIX ecosystem",
    active: false,
  },
];

const skills = [
  { name: "Figma", highlight: true },
  { name: "UI/UX", highlight: false },
  { name: "Prototyping", highlight: false },
  { name: "MVP Design", highlight: true },
  { name: "CRO", highlight: false },
  { name: "Design Systems", highlight: false },
  { name: "HTML/CSS", highlight: false },
  { name: "SaaS", highlight: true },
  { name: "SEO", highlight: false },
  { name: "Analytics", highlight: false },
  { name: "A/B Testing", highlight: false },
  { name: "Claude Code", highlight: true },
  { name: "PH Launch", highlight: false },
];

const stats = [
  { value: "10", suffix: "+", label: "Years in design" },
  { value: "30", suffix: "%", label: "CVR increase avg." },
  { value: "6", suffix: "fig", label: "MRR products scaled" },
];

const steps = [
  { num: "01", title: "Discovery", desc: "Understand goals & users" },
  { num: "02", title: "Research", desc: "Audit, benchmark, analyze" },
  { num: "03", title: "Design", desc: "Wireframes to hi-fi UI" },
  { num: "04", title: "Build", desc: "Handoff or code it myself" },
  { num: "05", title: "Optimize", desc: "Test, iterate, improve" },
];

export default function BentoGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Counter animation
      if (statsRef.current) {
        statsRef.current.querySelectorAll(".stat-num").forEach((el) => {
          const target = parseInt(el.getAttribute("data-target") || "0");
          const obj = { val: 0 };

          gsap.to(obj, {
            val: target,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
            onUpdate: () => {
              (el as HTMLElement).textContent = Math.round(obj.val).toString();
            },
          });
        });
      }

      // Tags stagger
      if (tagsRef.current) {
        gsap.fromTo(
          tagsRef.current.querySelectorAll(".skill-tag"),
          { opacity: 0, scale: 0.7 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.4,
            stagger: 0.04,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: tagsRef.current,
              start: "top 88%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-6">
        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Card A — Timeline */}
          <div className="col-span-12 md:col-span-5 bg-bg-card border border-border rounded-card p-6 md:p-8 sr">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block">
              Experience
            </span>
            <div className="space-y-6">
              {timeline.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-3 h-3 rounded-full border-2 ${
                        item.active
                          ? "bg-accent border-accent"
                          : "bg-transparent border-border"
                      }`}
                    />
                    {i < timeline.length - 1 && (
                      <div className="w-px flex-1 bg-border mt-2" />
                    )}
                  </div>
                  <div className="pb-2">
                    <h4 className="font-display font-bold text-sm text-foreground">
                      {item.role}{" "}
                      <span className="text-muted font-normal">— {item.company}</span>
                    </h4>
                    <p className="text-xs text-muted mt-0.5">
                      {item.period} · {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card B — Skills */}
          <div className="col-span-12 md:col-span-4 bg-bg-card border border-border rounded-card p-6 md:p-8 sr">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block">
              Skills & Tools
            </span>
            <div ref={tagsRef} className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill.name}
                  className={`skill-tag px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                    skill.highlight
                      ? "bg-accent/10 border-accent/30 text-accent"
                      : "bg-bg border-border text-muted"
                  }`}
                >
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          {/* Card C — Numbers */}
          <div
            ref={statsRef}
            className="col-span-12 md:col-span-3 bg-bg-card border border-border rounded-card p-6 md:p-8 sr"
          >
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block">
              Numbers
            </span>
            <div className="space-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="flex items-baseline gap-0.5">
                    <span
                      className="stat-num text-3xl md:text-4xl font-display font-bold text-foreground"
                      data-target={stat.value}
                    >
                      0
                    </span>
                    <span className="text-xl md:text-2xl font-display font-bold text-accent">
                      {stat.suffix}
                    </span>
                  </div>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Card D — Location */}
          <div className="col-span-12 md:col-span-4 bg-bg-card border border-border rounded-card p-6 md:p-8 relative overflow-hidden sr">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(240,237,232,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(240,237,232,0.3) 1px, transparent 1px)",
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative">
              {/* Ping dot */}
              <div className="absolute top-0 right-0">
                <span className="relative flex h-4 w-4">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-4 w-4 bg-accent" />
                </span>
              </div>

              {/* Map doodle */}
              <svg
                className="w-full h-24 mb-4 opacity-20"
                viewBox="0 0 200 80"
                fill="none"
                stroke="#E85D2D"
                strokeWidth="1"
                strokeLinecap="round"
                strokeDasharray="4 4"
              >
                <path d="M10 60 Q40 20 80 40 Q120 60 160 30 Q180 20 195 35" />
                <path d="M20 70 Q60 30 100 50 Q140 70 180 40" />
                <circle cx="120" cy="42" r="6" fill="#E85D2D" opacity="0.3" strokeDasharray="0" />
              </svg>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-foreground">
                MENDOZA
              </h3>
              <p className="text-sm text-muted mt-1">ARGENTINA</p>
            </div>
          </div>

          {/* Card E — How I Work */}
          <div className="col-span-12 md:col-span-8 bg-bg-card border border-border rounded-card p-6 md:p-8 sr">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block">
              How I Work
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
              {steps.map((step) => (
                <div
                  key={step.num}
                  className="group p-4 rounded-xl border border-border hover:border-accent/30 hover:bg-bg-card-hover transition-all hover:-translate-y-1 duration-300"
                  data-cursor-hover
                >
                  <span className="font-mono text-xs text-accent mb-2 block">
                    {step.num}
                  </span>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    {step.title}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
