"use client";

import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section id="cta" className="">
      <div className="max-w-container mx-auto px-5">
        <div className="sr glass-strong rounded-card p-7 md:p-10 text-center">
          <h2 className="font-display font-medium text-xl md:text-2xl text-foreground mb-2 tracking-tight">
            Got a SaaS idea?{" "}
            <span className="text-accent">Let&apos;s ship it.</span>
          </h2>
          <p className="text-xs text-muted mb-6 max-w-[42ch] mx-auto leading-relaxed">
            I take a few client projects a year — or just want to swap
            solo-founder notes? Always.
          </p>

          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <MagneticButton
              href="mailto:hello@alexanderosso.com"
              dataCursorCta
              className="glass-button-dark inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full"
            >
              hello@alexanderosso.com
            </MagneticButton>

            <MagneticButton
              href="https://x.com/alexanderOsso"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button inline-flex items-center justify-center gap-1.5 text-foreground text-xs font-medium px-4 py-2.5 rounded-full"
            >
              DM on X
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
              </svg>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
