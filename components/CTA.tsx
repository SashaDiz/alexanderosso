"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  const cardRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const glow = glowRef.current;
    if (!card || !glow || window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      gsap.to(glow, {
        left: x,
        top: y,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    card.addEventListener("mousemove", onMove);
    return () => card.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section id="cta" className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <div
          ref={cardRef}
          className="sr relative bg-bg-card border border-border rounded-card p-10 md:p-16 text-center overflow-hidden"
        >
          {/* Mouse-follow glow */}
          <div
            ref={glowRef}
            className="absolute w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(circle, rgba(232,93,45,0.08) 0%, transparent 70%)",
              left: "50%",
              top: "50%",
            }}
          />

          {/* Doodle decorations */}
          <svg
            className="absolute top-8 left-8 w-8 h-8 opacity-20"
            viewBox="0 0 32 32"
            fill="none"
            stroke="#E85D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M16 2 L18 12 L28 10 L20 16 L28 22 L18 20 L16 30 L14 20 L4 22 L12 16 L4 10 L14 12 Z" />
          </svg>
          <svg
            className="absolute bottom-8 right-8 w-12 h-12 opacity-20"
            viewBox="0 0 48 48"
            fill="none"
            stroke="#E85D2D"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="4 4"
          >
            <path d="M10 38 Q15 20 30 15 L38 10" />
            <path d="M30 8 L38 10 L36 18" />
          </svg>

          <div className="relative">
            <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-4">
              Let&apos;s build something
              <br />
              worth shipping.
            </h2>
            <p className="text-muted text-lg mb-10 max-w-md mx-auto">
              Have a SaaS idea? Need a redesign? Let&apos;s talk.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="mailto:sashaossito@gmail.com"
                dataCursorCta
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-hover text-white font-medium px-7 py-3.5 rounded-full transition-colors"
              >
                sashaossito@gmail.com
              </MagneticButton>

              <MagneticButton
                href="#"
                className="inline-flex items-center justify-center gap-2 border border-border hover:border-muted text-foreground font-medium px-7 py-3.5 rounded-full transition-colors"
              >
                Telegram
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M3 8h10M9 4l4 4-4 4" />
                </svg>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
