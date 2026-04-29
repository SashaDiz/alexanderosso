"use client";

import { useState, useEffect } from "react";
import Avatar from "./Avatar";
import ThemeToggle from "./ThemeToggle";
import FontSizeToggle from "./FontSizeToggle";
import { useContact } from "./ContactProvider";

const navItems = [
  { label: "Building", href: "#building" },
  { label: "Services", href: "#services" },
  { label: "Past Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const contact = useContact();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        scrolled ? "py-2" : "py-3"
      }`}
    >
      <div className="max-w-container mx-auto px-3 sm:px-5">
        <div
          className={`glass flex items-center justify-between gap-2 sm:gap-3 px-2 sm:px-3 py-1.5 sm:py-2 rounded-full transition-all ${
            scrolled ? "shadow-md" : ""
          }`}
        >
          {/* Logo */}
          <a
            href="/"
            aria-label="Aleksandr Borisov — home"
            className="flex items-center gap-2 group shrink-0"
            data-cursor-hover
          >
            <span className="relative inline-flex">
              <Avatar size={28} initialsClassName="text-[11px]" />
              {/* Mobile: status dot on avatar */}
              <span
                className="sm:hidden absolute -top-0.5 -right-0.5 flex h-2 w-2"
                aria-hidden="true"
              >
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500 ring-2 ring-bg-card" />
              </span>
              <span className="sr-only sm:hidden">Available</span>
            </span>

            {/* Desktop: Available pill */}
            <span className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-green-500/15 border border-green-500/30">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500" />
              </span>
              <span className="text-[9px] font-mono text-green-700 dark:text-green-400">
                Available
              </span>
            </span>
          </a>

          {/* Desktop: nav items */}
          <div className="hidden sm:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-2.5 py-1 text-[11px] text-muted hover:text-foreground transition-colors"
                data-cursor-hover
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Right: a11y toggles + CTA */}
          <div className="flex items-center gap-0.5 shrink-0">
            <FontSizeToggle />
            <ThemeToggle />
            <button
              type="button"
              onClick={() => contact.open()}
              data-cursor-cta
              className="glass-button-dark text-[11px] font-medium px-3 py-1.5 ml-1 rounded-full whitespace-nowrap"
            >
              Book a call
            </button>
          </div>
        </div>

        {/* Mobile: nav items in their own glass pill */}
        <div className="sm:hidden mt-2 glass rounded-full px-3 py-1.5">
          <div className="flex items-center gap-4 overflow-x-auto justify-between">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[11px] text-muted hover:text-foreground whitespace-nowrap transition-colors"
                data-cursor-hover
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
