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
          <div className="hero-el flex flex-wrap items-center gap-2 mb-7 opacity-0">
            <span className="inline-flex items-center gap-2 text-xs text-muted">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              7 products live
            </span>
            <span
              aria-hidden="true"
              className="text-base leading-none text-muted/70 select-none"
            >
              ·
            </span>
            <a
              href="https://x.com/alexanderOsso"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-foreground/5 hover:bg-foreground/10 border border-foreground/10 text-[11px] text-foreground transition-colors"
            >
              <svg
                aria-hidden="true"
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Building in public — follow @alexanderOsso
            </a>
            <a
              href="https://www.upwork.com/freelancers/~01b291538e885c464c?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-accent/15 hover:bg-accent/25 border border-accent/30 text-[11px] font-medium text-accent transition-colors"
            >
              <svg
                aria-hidden="true"
                width="13"
                height="13"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.144c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.488H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z" />
              </svg>
              Hire me on Upwork
            </a>
          </div>

          <p className="hero-el font-mono text-[0.6875rem] uppercase tracking-widest text-muted mb-3 opacity-0">
            Aleksandr Borisov
          </p>

          <h1 className="hero-el font-display font-medium text-2xl md:text-[2rem] leading-[1.2] tracking-tight text-foreground mb-4 opacity-0 text-balance">
            I design, code &amp; ship digital products{" "}
            <span className="text-accent">solo with AI.</span>
          </h1>

          <p className="hero-el text-sm md:text-[0.9375rem] text-muted leading-relaxed mb-7 max-w-[55ch] opacity-0">
            10 years designing for SaaS, startups and mobile apps. Now in my
            founder season — seven products live, all designed, coded, and
            launched solo with Figma + Cursor + Claude Code.
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
