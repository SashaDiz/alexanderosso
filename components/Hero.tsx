"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(
        ".hero-badge",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
      tl.fromTo(
        ".hero-line",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(
        ".hero-sub",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(
        ".hero-btn",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );
      tl.fromTo(
        ".hero-doodle",
        { opacity: 0, scale: 0.5 },
        { opacity: 1, scale: 1, duration: 0.4, stagger: 0.1, ease: "back.out(2)" },
        "-=0.3"
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen flex items-center pt-24 pb-20 relative overflow-hidden"
      id="hero"
    >
      {/* Decorative doodles */}
      <svg className="hero-doodle absolute top-32 right-[15%] w-8 h-8 opacity-0" viewBox="0 0 32 32" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <path d="M16 2 L18 12 L28 10 L20 16 L28 22 L18 20 L16 30 L14 20 L4 22 L12 16 L4 10 L14 12 Z" />
      </svg>
      <svg className="hero-doodle absolute top-48 left-[10%] w-6 h-6 opacity-0" viewBox="0 0 24 24" fill="#E85D2D" opacity="0.4">
        <circle cx="12" cy="12" r="4" />
      </svg>
      <svg className="hero-doodle absolute bottom-32 right-[20%] w-10 h-10 opacity-0" viewBox="0 0 40 40" fill="none" stroke="#E85D2D" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="4 4">
        <path d="M20 5 Q35 20 20 35 Q5 20 20 5" />
      </svg>

      {/* Hand-drawn arrow pointing to CTA */}
      <svg className="hero-doodle absolute bottom-44 left-[30%] w-24 h-16 opacity-0 hidden lg:block" viewBox="0 0 100 60" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <path d="M5 45 Q20 50 40 40 Q60 28 80 15" strokeDasharray="5 5" />
        <path d="M72 10 L82 14 L76 22" />
      </svg>

      <div className="max-w-container mx-auto px-6 w-full">
        {/* Badge */}
        <div className="hero-badge inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-bg-card mb-8 opacity-0">
          <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
          <span className="text-sm text-muted">Available for freelance & full-time</span>
        </div>

        {/* Headline */}
        <h1 className="font-display font-bold leading-[1.05] tracking-tight mb-6">
          <span className="hero-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-0">
            <span className="text-muted">I&apos;m a </span>
            <span className="text-foreground">Product</span>
          </span>
          <span className="hero-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-0">
            <span className="text-foreground">Designer </span>
            <span className="text-muted">for</span>
          </span>
          <span className="hero-line block text-4xl sm:text-5xl md:text-6xl lg:text-7xl opacity-0">
            <span className="text-accent">SaaS & Startups.</span>
          </span>
        </h1>

        {/* Subtitle */}
        <p className="hero-sub text-lg md:text-xl text-muted max-w-2xl leading-relaxed mb-10 opacity-0">
          10+ years crafting growth-driven UX/UI. I help startups ship faster,
          convert better, and scale from MVP to six-figure MRR.
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4">
          <MagneticButton
            href="#cta"
            dataCursorCta
            className="hero-btn opacity-0 inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3.5 rounded-full transition-colors text-base"
          >
            Book a call
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </MagneticButton>

          <MagneticButton
            href="#services"
            className="hero-btn opacity-0 inline-flex items-center gap-2 border border-border hover:border-muted text-foreground font-medium px-7 py-3.5 rounded-full transition-colors text-base"
          >
            View services
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
