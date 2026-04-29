"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import { useContact } from "./ContactProvider";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contact = useContact();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 });
      tl.fromTo(
        ".hero-el",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.6, stagger: 0.08, ease: "power3.out" }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="hero">
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card p-7 md:p-10">
          <div className="hero-el flex items-center gap-2 mb-7 opacity-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted">
              5 products live · always shipping
            </span>
          </div>

          <p className="hero-el font-mono text-[0.6875rem] uppercase tracking-widest text-muted mb-3 opacity-0">
            Aleksandr Borisov
          </p>

          <h1 className="hero-el font-display font-medium text-2xl md:text-[2rem] leading-[1.2] tracking-tight text-foreground mb-4 opacity-0">
            I design, code &amp; ship SaaS products{" "}
            <span className="text-accent">solo with AI.</span>
          </h1>

          <p className="hero-el text-sm md:text-[0.9375rem] text-muted leading-relaxed mb-7 max-w-[55ch] opacity-0">
            10 years designing for SaaS and startups. Now in my founder season —
            five products live, all designed, coded, and launched solo with
            Figma + Cursor + Claude Code.
          </p>

          <div className="hero-el flex flex-wrap gap-2 opacity-0">
            <MagneticButton
              href="#building"
              dataCursorCta
              className="glass-button-dark inline-flex items-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full"
            >
              See what I&apos;m building
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
              </svg>
            </MagneticButton>

            <MagneticButton
              onClick={() => contact.open()}
              className="glass-button inline-flex items-center gap-1.5 text-foreground text-xs font-medium px-4 py-2.5 rounded-full"
            >
              Let&apos;s talk
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
