"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";

const navItems = [
  {
    label: "Experience",
    href: "#experience",
    desc: "10+ years building products that ship",
    illustration: (
      <svg viewBox="0 0 80 60" className="w-20 h-15" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <path d="M10 50 L10 15 L25 15" strokeDasharray="4 4" />
        <circle cx="10" cy="12" r="3" fill="#E85D2D" />
        <path d="M25 35 L25 25 L45 25" strokeDasharray="4 4" />
        <circle cx="25" cy="22" r="3" fill="none" />
        <path d="M45 45 L45 35 L65 35" strokeDasharray="4 4" />
        <circle cx="45" cy="32" r="3" fill="none" />
        <circle cx="65" cy="35" r="3" fill="#E85D2D" />
      </svg>
    ),
  },
  {
    label: "Services",
    href: "#services",
    desc: "MVP design, websites, AI apps & more",
    illustration: (
      <svg viewBox="0 0 80 60" className="w-20 h-15" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <rect x="8" y="10" width="24" height="18" rx="3" />
        <rect x="38" y="10" width="24" height="18" rx="3" />
        <rect x="23" y="34" width="24" height="18" rx="3" />
        <path d="M20 28 L35 34" strokeDasharray="3 3" />
        <path d="M50 28 L47 34" strokeDasharray="3 3" />
      </svg>
    ),
  },
  {
    label: "Work",
    href: "#work",
    desc: "Selected projects & case studies",
    illustration: (
      <svg viewBox="0 0 80 60" className="w-20 h-15" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <rect x="5" y="8" width="30" height="20" rx="2" />
        <line x1="5" y1="14" x2="35" y2="14" />
        <rect x="8" y="17" width="10" height="4" rx="1" fill="#E85D2D" opacity="0.3" />
        <rect x="40" y="28" width="30" height="20" rx="2" />
        <line x1="40" y1="34" x2="70" y2="34" />
        <rect x="43" y="37" width="10" height="4" rx="1" fill="#E85D2D" opacity="0.3" />
      </svg>
    ),
  },
  {
    label: "About",
    href: "#about",
    desc: "The human behind the pixels",
    illustration: (
      <svg viewBox="0 0 80 60" className="w-20 h-15" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <circle cx="40" cy="20" r="10" />
        <path d="M25 50 Q25 35 40 32 Q55 35 55 50" />
        <path d="M60 10 L65 5" strokeDasharray="2 2" />
        <path d="M62 15 L68 12" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [, setActivePopup] = useState<number | null>(null);
  const popupRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tlRefs = useRef<(gsap.core.Timeline | null)[]>([]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const showPopup = useCallback((index: number) => {
    setActivePopup(index);
    const popup = popupRefs.current[index];
    if (!popup) return;

    if (tlRefs.current[index]) {
      tlRefs.current[index]!.kill();
    }

    const tl = gsap.timeline();
    tl.fromTo(
      popup,
      { opacity: 0, y: 10, scale: 0.95, pointerEvents: "none" },
      { opacity: 1, y: 0, scale: 1, pointerEvents: "auto", duration: 0.3, ease: "power3.out" }
    );
    tl.fromTo(
      popup.querySelectorAll(".popup-inner > *"),
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.25, stagger: 0.06, ease: "power2.out" },
      "-=0.15"
    );
    tlRefs.current[index] = tl;
  }, []);

  const hidePopup = useCallback((index: number) => {
    const popup = popupRefs.current[index];
    if (!popup) return;

    gsap.to(popup, {
      opacity: 0,
      y: 10,
      scale: 0.95,
      pointerEvents: "none",
      duration: 0.2,
      ease: "power2.in",
      onComplete: () => setActivePopup(null),
    });
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "bg-bg/80 backdrop-blur-xl border-b border-border/50" : ""
      }`}
    >
      <div className="max-w-container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group" data-cursor-hover>
          <span className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center font-display font-bold text-sm text-white">
            AB
          </span>
          <span className="font-display text-sm tracking-wide text-foreground hidden sm:block">
            aleksandr borisov
          </span>
        </a>

        {/* Nav items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item, i) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => showPopup(i)}
              onMouseLeave={() => hidePopup(i)}
            >
              <a
                href={item.href}
                className="px-4 py-2 text-sm text-muted hover:text-foreground transition-colors"
                data-cursor-hover
              >
                {item.label}
              </a>

              {/* Popup */}
              <div
                ref={(el) => {
                  popupRefs.current[i] = el;
                }}
                className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 opacity-0 pointer-events-none"
                style={{ scale: 0.95 }}
              >
                <div className="popup-inner bg-bg-card border border-border rounded-card p-5 shadow-2xl">
                  <div className="mb-3">{item.illustration}</div>
                  <h4 className="font-display font-bold text-sm text-foreground mb-1">
                    {item.label}
                  </h4>
                  <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <a
            href="/mulu"
            data-cursor-hover
            className="w-9 h-9 rounded-xl overflow-hidden hover:opacity-80 transition-opacity"
            title="Mulu — Digital Detox Journal"
          >
            <img
              src="/mulu/icon.png"
              alt="Mulu app"
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          </a>

          <MagneticButton
            href="#cta"
            dataCursorCta
            className="bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors"
          >
            Book a call
          </MagneticButton>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center gap-4 px-6 pb-3 overflow-x-auto">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="text-xs text-muted hover:text-foreground whitespace-nowrap transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
