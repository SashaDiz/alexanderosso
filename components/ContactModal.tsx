"use client";

import { useState, useEffect, useRef, FormEvent } from "react";

const CALENDLY_URL =
  "https://calendly.com/sashaossito/launch-your-directory-30-min-call";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

type Props = {
  open: boolean;
  onClose: () => void;
  initialSubject?: string;
};

export default function ContactModal({ open, onClose, initialSubject }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  // Reset subject when initialSubject changes
  useEffect(() => {
    setSubject(initialSubject ?? "");
  }, [initialSubject, open]);

  // Manage focus: store the previously focused element, then focus first field. Restore on close.
  useEffect(() => {
    if (!open) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    // Defer to allow modal to mount + animations
    const t = setTimeout(() => {
      firstFieldRef.current?.focus();
    }, 50);

    return () => {
      clearTimeout(t);
      // Restore focus to whatever opened the modal
      if (previouslyFocusedRef.current && previouslyFocusedRef.current.focus) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [open]);

  // Close on Escape + simple focus trap (Tab cycles within modal)
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  if (!open) return null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const fullSubject = encodeURIComponent(subject || "Let's talk");
    const body = encodeURIComponent(
      `Hi Aleksandr,\n\n${message}\n\n— ${name}\n${email}`
    );
    window.location.href = `mailto:hello@alexanderosso.com?subject=${fullSubject}&body=${body}`;
    onClose();
  };

  const inputCls =
    "w-full bg-bg/60 border border-border rounded-lg px-3 py-2 text-xs text-foreground placeholder:text-muted focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/30 focus:bg-bg-card transition-colors";

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      aria-describedby="contact-modal-desc"
    >
      {/* Backdrop */}
      <button
        type="button"
        className="absolute inset-0 bg-foreground/30 backdrop-blur-md animate-fade-in cursor-pointer"
        onClick={onClose}
        aria-label="Close dialog"
        tabIndex={-1}
      />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className="glass-strong relative w-full max-w-md rounded-card p-6 sm:p-7 animate-slide-up max-h-[calc(100vh-2rem)] overflow-y-auto"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 w-7 h-7 flex items-center justify-center rounded-full text-muted hover:text-foreground hover:bg-bg-card-hover transition-colors"
          aria-label="Close dialog"
          data-cursor-hover
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 14 14"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M3 3 L11 11 M11 3 L3 11" />
          </svg>
        </button>

        <h2
          id="contact-modal-title"
          className="font-display font-medium text-base text-foreground mb-1 tracking-tight"
        >
          Let&apos;s talk
        </h2>
        <p id="contact-modal-desc" className="text-xs text-muted mb-5">
          Book a 30-min intro call, or drop a message — I reply within a day.
        </p>

        {/* Calendly — primary action */}
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined" && window.Calendly) {
              window.Calendly.initPopupWidget({ url: CALENDLY_URL });
              onClose();
            } else {
              window.open(CALENDLY_URL, "_blank", "noopener,noreferrer");
              onClose();
            }
          }}
          data-cursor-cta
          className="glass-button-dark w-full inline-flex items-center justify-center gap-2 text-xs font-medium px-4 py-3 rounded-full mb-5"
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a 30-min call on Calendly
        </button>

        {/* Divider */}
        <div className="flex items-center gap-3 mb-5" role="separator" aria-hidden="true">
          <div className="flex-1 h-px bg-border" />
          <span className="text-[0.625rem] font-mono uppercase tracking-wider text-muted">
            or write to me
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-2.5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div>
              <label htmlFor="contact-name" className="sr-only">
                Your name
              </label>
              <input
                ref={firstFieldRef}
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={inputCls}
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="sr-only">
                Your email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={inputCls}
              />
            </div>
          </div>
          <div>
            <label htmlFor="contact-subject" className="sr-only">
              Subject
            </label>
            <input
              id="contact-subject"
              name="subject"
              type="text"
              placeholder="Subject (e.g. MVP design for…)"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className={inputCls}
            />
          </div>
          <div>
            <label htmlFor="contact-message" className="sr-only">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              required
              rows={4}
              placeholder="What are you building? Goals, timeline, anything useful…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`${inputCls} resize-none`}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-2 pt-1">
            <button
              type="submit"
              data-cursor-cta
              className="glass-button-dark inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full flex-1"
            >
              Send via email
              <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true">
                <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
              </svg>
            </button>
            <a
              href="https://x.com/alexanderOsso"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="glass-button text-foreground inline-flex items-center justify-center gap-1.5 text-xs font-medium px-4 py-2.5 rounded-full flex-1"
            >
              DM on X
              <span className="sr-only">(opens in new tab)</span>
            </a>
          </div>
        </form>

        <p className="text-[0.625rem] text-muted text-center mt-4">
          Or just{" "}
          <a
            href="mailto:hello@alexanderosso.com"
            className="text-foreground hover:text-accent transition-colors"
          >
            hello@alexanderosso.com
          </a>
        </p>
      </div>
    </div>
  );
}
