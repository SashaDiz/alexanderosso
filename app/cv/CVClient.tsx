"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Avatar from "@/components/Avatar";
import ContactProvider from "@/components/ContactProvider";
import Cursor from "@/components/Cursor";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import SkipLink from "@/components/SkipLink";
import {
  aboutMe,
  contactLinks,
  education,
  languages,
  skills,
  stats,
  summary,
  timeline,
} from "@/lib/cv-data";

export default function CVClient() {
  const mainRef = useRef<HTMLElement>(null);
  const statsRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cv-el",
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.06,
          ease: "power3.out",
          delay: 0.15,
        }
      );

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
    }, mainRef);

    return () => ctx.revert();
  }, []);

  return (
    <ContactProvider>
      <SkipLink />
      <Cursor />
      <Nav />
      <main
        ref={mainRef}
        id="main-content"
        className="cv-print max-w-container mx-auto px-5 flex flex-col gap-3 pt-28 sm:pt-24 pb-3"
      >
        {/* Header card */}
        <section className="cv-el opacity-0 glass-strong rounded-card p-7 md:p-10">
          <div className="flex items-start gap-4 mb-6">
            <Avatar size={56} initialsClassName="text-base" />
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[0.6875rem] uppercase tracking-widest text-muted mb-2">
                Curriculum Vitae
              </p>
              <h1 className="font-display font-medium text-2xl md:text-[2rem] leading-[1.15] tracking-tight text-foreground">
                Aleksandr Borisov
              </h1>
              <p className="text-sm md:text-[0.9375rem] text-muted mt-1">
                Product Designer · Buenos Aires, Argentina
              </p>
            </div>
          </div>

          <p className="text-sm md:text-[0.9375rem] text-foreground/85 leading-relaxed mb-6 max-w-[60ch]">
            {summary}
          </p>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 mb-6">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  link.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="text-[11px] text-muted hover:text-foreground transition-colors"
                data-cursor-hover
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap gap-2" data-print-hide>
            <a
              href="/cv-aleksandr-borisov.pdf"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-cta
              className="glass-button-dark inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full"
            >
              Download PDF
              <svg
                width="11"
                height="11"
                viewBox="0 0 14 14"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <path d="M7 2 V10 M3 7 L7 11 L11 7" />
              </svg>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              data-cursor-hover
              className="glass-button inline-flex items-center gap-1.5 text-foreground text-xs font-medium px-4 py-2.5 rounded-full"
            >
              Print
            </button>
          </div>
        </section>

        {/* Stats strip */}
        <section
          ref={statsRef}
          className="cv-el opacity-0 glass-strong rounded-card p-5 md:p-6 grid grid-cols-2 sm:grid-cols-4 gap-4"
        >
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
        </section>

        {/* Work experience */}
        <section className="cv-el opacity-0 glass-strong rounded-card p-5 md:p-6">
          <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-5 block">
            Work experience
          </span>
          <div className="space-y-5">
            {timeline.map((item, i) => (
              <article key={item.company} className="flex gap-3">
                <div
                  className="flex flex-col items-center pt-1.5"
                  aria-hidden="true"
                >
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
                <div className="flex-1 min-w-0 pb-3">
                  <h3 className="font-display font-medium text-sm text-foreground">
                    {item.role}{" "}
                    <span className="text-muted font-normal">
                      — {item.company}
                    </span>
                  </h3>
                  <p className="font-mono text-[0.625rem] text-accent mt-1 mb-2 uppercase tracking-wider">
                    {item.period}
                  </p>
                  <p className="text-[0.8125rem] text-muted leading-relaxed">
                    {item.desc}
                  </p>

                  {item.bullets && (
                    <ul className="mt-2.5 space-y-1.5">
                      {item.bullets.map((bullet, bi) => (
                        <li
                          key={bi}
                          className="text-[0.8125rem] text-muted leading-relaxed flex gap-2"
                        >
                          <span
                            className="text-accent shrink-0 mt-[1px]"
                            aria-hidden="true"
                          >
                            •
                          </span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.skills && (
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {item.skills.map((s) => (
                        <span
                          key={s.name}
                          className={`px-2.5 py-1 rounded-full text-[0.6875rem] border transition-colors ${
                            s.highlight
                              ? "bg-accent/10 border-accent/25 text-accent"
                              : "bg-bg border-border text-muted hover:text-foreground"
                          }`}
                        >
                          {s.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Skills & tools */}
        <section className="cv-el opacity-0 glass-strong rounded-card p-5 md:p-6">
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
        </section>

        {/* Education + Languages two-up */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <section className="cv-el opacity-0 sm:col-span-2 glass-strong rounded-card p-5 md:p-6">
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
              Education
            </span>
            <ul className="divide-y divide-border">
              {education.map((item) => (
                <li
                  key={`${item.school}-${item.course}`}
                  className="flex items-start gap-4 py-3 first:pt-0 last:pb-0"
                >
                  <span className="font-mono text-[0.625rem] text-accent shrink-0 w-20 mt-1 uppercase tracking-wider whitespace-nowrap">
                    {item.period}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-display font-medium text-sm text-foreground">
                      {item.school}{" "}
                      <span className="text-muted font-normal">
                        — &ldquo;{item.course}&rdquo;
                      </span>
                    </h4>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          <section className="cv-el opacity-0 glass-strong rounded-card p-5 md:p-6">
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
              Languages
            </span>
            <div className="flex flex-wrap gap-1.5">
              {languages.map((lang) => (
                <span
                  key={lang.name}
                  className="px-2.5 py-1 rounded-full text-[0.6875rem] border bg-bg border-border text-muted"
                >
                  {lang.name}
                  <span className="text-foreground/60"> · {lang.level}</span>
                </span>
              ))}
            </div>
          </section>
        </div>

        {/* About me */}
        <section className="cv-el opacity-0 glass-strong rounded-card p-5 md:p-6">
          <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-4 block">
            About me
          </span>
          <p className="text-sm text-muted leading-relaxed max-w-[60ch]">
            {aboutMe}
          </p>
        </section>
      </main>
      <Footer />
    </ContactProvider>
  );
}
