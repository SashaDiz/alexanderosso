"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import Avatar from "./Avatar";
import { socials, interests, languages } from "@/data/about";

function Photo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const photo = photoRef.current;
    if (!wrap || !photo || window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      const rect = wrap.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(photo, {
        x: x * -5,
        y: y * -5,
        rotateY: x * 4,
        rotateX: -y * 4,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(photo, {
        x: 0, y: 0, rotateY: 0, rotateX: 0,
        duration: 0.7, ease: "elastic.out(1, 0.5)",
      });
    };

    wrap.addEventListener("mousemove", onMove);
    wrap.addEventListener("mouseleave", onLeave);
    return () => {
      wrap.removeEventListener("mousemove", onMove);
      wrap.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      className="shrink-0"
      style={{ perspective: "400px" }}
    >
      <div ref={photoRef}>
        <Avatar
          size={64}
          rounded="rounded-2xl"
          className="border border-border"
          initialsClassName="text-lg"
        />
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about">
      <div className="max-w-container mx-auto px-5 flex flex-col gap-3">
        {/* Bio + Photo */}
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex items-center gap-4 mb-5">
            <Photo />
            <div>
              <h2 className="font-display font-medium text-sm text-foreground">
                Aleksandr Borisov
              </h2>
              <p className="text-[0.6875rem] text-muted">
                Solo founder · Vibe-coder · Designer
              </p>
            </div>
          </div>

          <div className="space-y-3 text-xs text-muted leading-relaxed">
            <p>
              Designer, vibe-coder, and solo founder based in Buenos Aires. After
              10 years designing SaaS and DeFi products at MarsX and Instadapp,
              I&apos;m now in my founder season — shipping my own products
              end-to-end.
            </p>
            <p>
              Five live now —{" "}
              <a href="https://www.mulujournal.app/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Mulu</a>,{" "}
              <a href="https://winery-hotels.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Winery&nbsp;Hotels</a>,{" "}
              <a href="https://directory-launch.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Directory&nbsp;Launch</a>,{" "}
              <a href="https://getmomentum.online" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">Momentum</a>, and{" "}
              <a href="https://posteahora.com/" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-accent transition-colors">PosteaHora</a>.
              Husband, father, mate &amp; wine enthusiast in between shipping.
            </p>
          </div>

          <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-border">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={s.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                className="px-2.5 py-1 rounded-full text-[0.6875rem] border border-border text-muted hover:text-foreground hover:border-foreground transition-colors"
                data-cursor-hover
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Interests + Languages */}
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-6">
            <div className="flex-1 min-w-0">
              <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-3 block">
                Interests &amp; Vibes
              </span>
              <div className="flex flex-wrap gap-1.5">
                {interests.map((item) => (
                  <span
                    key={item.label}
                    className="px-2.5 py-1 rounded-full text-[0.6875rem] border border-border text-muted bg-bg hover:text-foreground transition-colors"
                  >
                    {item.emoji} {item.label}
                  </span>
                ))}
              </div>
            </div>

            <div className="shrink-0">
              <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted mb-3 block">
                Languages
              </span>
              <div className="space-y-1">
                {languages.map((lang) => (
                  <div key={lang.name} className="flex items-center gap-2 text-xs">
                    <span>{lang.flag}</span>
                    <span className="text-foreground">{lang.name}</span>
                    <span className="text-muted text-[0.625rem]">({lang.level})</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
