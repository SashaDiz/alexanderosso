"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useContact } from "./ContactProvider";
import MagneticButton from "./MagneticButton";

type TabId = "mvp" | "landing" | "directory";

type Feature = string | { text: string; addOn: true };

type Tab = {
  id: TabId;
  label: string;
  title: string;
  basePrice: string;
  features: Feature[];
  addOn?: {
    label: string;
    priceWith: string;
  };
};

const tabs: Tab[] = [
  {
    id: "mvp",
    label: "MVP Build",
    title: "Idea to live URL",
    basePrice: "$4,500+",
    features: [
      "Your idea, designed and shipped end-to-end",
      "Onboarding, core flows, settings — the lot",
      "Vibe-coded in Next.js, not just mocked",
      "Payments, auth and DB plumbed in",
      "First demo in 10 days, launch in 4–5 weeks",
      "Yours to keep: Figma file + repo + deploy",
    ],
  },
  {
    id: "landing",
    label: "Website & Landing",
    title: "Marketing site that converts",
    basePrice: "$2,000+",
    addOn: { label: "+ Motion", priceWith: "$2,750+" },
    features: [
      "Copy, design and build — one head, no handoffs",
      "Three concepts, then we sharpen one",
      "Funnel-tuned section by section",
      "Zero to your own domain in 2–3 weeks",
      "Live URL, not a Figma export",
      "Tracking and events wired before launch",
      { text: "Lottie / Rive on the moments worth animating", addOn: true },
    ],
  },
  {
    id: "directory",
    label: "Directory",
    title: "Niche directory, indexed and ready to rank",
    basePrice: "$3,500+",
    features: [
      "Built on the playbook from my own directories",
      "Next.js front — fast and indexable",
      "Stripe, Supabase, OAuth plumbed in",
      "Search, filters, sorting, sane URLs",
      "SEO foundations laid before launch",
      "Submissions + admin so you can scale content",
    ],
  },
];

const retainerFeatures = [
  "One task on the table at a time",
  "Scope shifts when your roadmap shifts",
  "Daily moves, weekday mornings",
  "Talk to me directly — no layer in between",
  "Pause any month, no exit fee",
];

const reduceMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function CheckIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 14 14"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="3 7 6 10 11 4" />
    </svg>
  );
}

function TabsStrip({
  active,
  onChange,
}: {
  active: TabId;
  onChange: (id: TabId) => void;
}) {
  const indicatorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Partial<Record<TabId, HTMLButtonElement | null>>>({});
  const firstRun = useRef(true);

  useLayoutEffect(() => {
    const button = tabRefs.current[active];
    const indicator = indicatorRef.current;
    if (!button || !indicator) return;
    const target = { x: button.offsetLeft, width: button.offsetWidth };
    if (firstRun.current || reduceMotion()) {
      gsap.set(indicator, target);
      firstRun.current = false;
      return;
    }
    gsap.to(indicator, {
      ...target,
      duration: 0.5,
      ease: "power3.out",
    });
  }, [active]);

  return (
    <div
      className="relative inline-flex p-1 rounded-full glass-button"
      role="tablist"
      aria-label="Service type"
    >
      <div
        ref={indicatorRef}
        className="absolute top-1 bottom-1 left-0 rounded-full bg-bg-card border border-border pointer-events-none"
        style={{ width: 0 }}
      />
      {tabs.map((t) => (
        <button
          key={t.id}
          ref={(el) => {
            tabRefs.current[t.id] = el;
          }}
          type="button"
          role="tab"
          aria-selected={active === t.id}
          onClick={() => onChange(t.id)}
          className={`relative z-10 px-3 py-1.5 rounded-full text-[0.6875rem] font-medium transition-colors duration-300 ${
            active === t.id
              ? "text-foreground"
              : "text-muted hover:text-foreground"
          }`}
          data-cursor-hover
        >
          {t.label}
        </button>
      ))}
    </div>
  );
}

function AddOnToggle({
  enabled,
  label,
  onChange,
}: {
  enabled: boolean;
  label: string;
  onChange: (next: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={enabled}
      onClick={() => onChange(!enabled)}
      className="inline-flex items-center gap-2 group shrink-0"
      data-cursor-hover
    >
      <span
        className={`text-[0.6875rem] font-medium transition-colors ${
          enabled ? "text-foreground" : "text-muted"
        } group-hover:text-accent`}
      >
        {label}
      </span>
      <span
        className={`relative inline-flex h-4 w-7 rounded-full border transition-colors duration-300 ${
          enabled ? "bg-accent border-accent" : "bg-bg-card border-border"
        }`}
      >
        <span
          className={`absolute top-[1px] left-[1px] h-3 w-3 rounded-full bg-foreground transition-transform duration-300 ease-out ${
            enabled ? "translate-x-3" : "translate-x-0"
          }`}
        />
      </span>
    </button>
  );
}

const PRICE_PARTS = /^([^\d]*)([\d,]+)(.*)$/;

function PriceDisplay({ price }: { price: string }) {
  const numRef = useRef<HTMLSpanElement>(null);
  const counterRef = useRef<{ v: number }>({ v: 0 });
  const firstRun = useRef(true);
  const initialNumText = useRef<string | null>(null);

  const match = price.match(PRICE_PARTS);
  const prefix = match?.[1] ?? "";
  const numValue = match ? parseInt(match[2].replace(/,/g, ""), 10) : 0;
  const suffix = match?.[3] ?? "";

  if (initialNumText.current === null && match) {
    initialNumText.current = numValue.toLocaleString("en-US");
  }

  useLayoutEffect(() => {
    const el = numRef.current;
    if (!el) return;

    const formatNum = (v: number) => v.toLocaleString("en-US");

    if (firstRun.current) {
      counterRef.current.v = numValue;
      el.textContent = formatNum(numValue);
      firstRun.current = false;
      return;
    }

    gsap.killTweensOf(counterRef.current);

    if (reduceMotion()) {
      counterRef.current.v = numValue;
      el.textContent = formatNum(numValue);
      return;
    }

    gsap.to(counterRef.current, {
      v: numValue,
      duration: 0.8,
      ease: "power2.inOut",
      onUpdate: () => {
        if (numRef.current) {
          numRef.current.textContent = formatNum(
            Math.round(counterRef.current.v)
          );
        }
      },
    });
  }, [numValue]);

  if (!match) {
    return (
      <span className="font-display font-medium text-3xl md:text-4xl text-foreground tracking-tight">
        {price}
      </span>
    );
  }

  return (
    <span
      aria-label={price}
      className="font-display font-medium text-3xl md:text-4xl text-foreground tracking-tight inline-flex items-baseline"
    >
      <span aria-hidden="true">{prefix}</span>
      <span ref={numRef} aria-hidden="true" className="tabular-nums">
        {initialNumText.current}
      </span>
      <span aria-hidden="true">{suffix}</span>
    </span>
  );
}

function FeatureList({
  features,
  addOnEnabled,
}: {
  features: Feature[];
  addOnEnabled: boolean;
}) {
  const listRef = useRef<HTMLUListElement>(null);

  useLayoutEffect(() => {
    const list = listRef.current;
    if (!list || reduceMotion()) return;
    const items = list.querySelectorAll("li");
    gsap.fromTo(
      items,
      { y: 6, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.35,
        stagger: 0.04,
        ease: "power3.out",
      }
    );
  }, [features]);

  return (
    <ul ref={listRef} className="space-y-2">
      {features.map((f, i) => {
        const text = typeof f === "string" ? f : f.text;
        const isAddOn = typeof f === "object" && f.addOn;
        const dimmed = isAddOn && !addOnEnabled;
        return (
          <li
            key={`${text}-${i}`}
            className={`flex items-center gap-2.5 text-xs leading-snug transition-opacity duration-300 ${
              dimmed ? "text-muted/40" : "text-muted"
            }`}
          >
            <span
              className={`shrink-0 transition-colors duration-300 ${
                dimmed ? "text-muted/40" : "text-accent"
              }`}
            >
              <CheckIcon />
            </span>
            <span>{text}</span>
          </li>
        );
      })}
    </ul>
  );
}

function BookCallButton({ subject }: { subject: string }) {
  const contact = useContact();
  return (
    <MagneticButton
      onClick={() => contact.open(subject)}
      dataCursorCta
      className="glass-button-dark inline-flex items-center justify-center text-xs font-medium px-4 py-2.5 rounded-full"
    >
      Book Intro Call
    </MagneticButton>
  );
}

export default function Services() {
  const [active, setActive] = useState<TabId>("mvp");
  const [addOnEnabled, setAddOnEnabled] = useState(true);
  const contentRef = useRef<HTMLDivElement>(null);

  const activeTab = tabs.find((t) => t.id === active)!;
  const showAddOn = !!activeTab.addOn && addOnEnabled;
  const displayPrice =
    activeTab.addOn && addOnEnabled
      ? activeTab.addOn.priceWith
      : activeTab.basePrice;

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el || reduceMotion()) return;
    gsap.fromTo(
      el,
      { y: 8, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, ease: "power3.out" }
    );
  }, [active]);

  return (
    <section id="services">
      <div className="max-w-container mx-auto px-5">
        <div className="flex items-center justify-between mb-3 px-1">
          <h2 className="font-display font-medium text-base text-foreground">
            Services
          </h2>
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent/25 bg-accent/10 text-accent text-[0.625rem] font-mono uppercase tracking-wider">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
            </span>
            3 slots open
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-stretch">
          {/* Left column: tabs strip on top, product card below */}
          <div className="flex flex-col gap-3 min-w-0">
            <div className="sr">
              <TabsStrip active={active} onChange={setActive} />
            </div>

            <div className="glass-strong rounded-card p-6 md:p-7 sr flex flex-col flex-1">
              <div ref={contentRef} className="flex flex-col flex-1">
                <div className="flex items-center justify-between gap-3 mb-2 min-h-5">
                  <span className="text-xs text-muted">{activeTab.title}</span>
                  {activeTab.addOn && (
                    <AddOnToggle
                      enabled={addOnEnabled}
                      label={activeTab.addOn.label}
                      onChange={setAddOnEnabled}
                    />
                  )}
                </div>

                <div className="mb-5">
                  <PriceDisplay price={displayPrice} />
                </div>

                <div className="flex-1 mb-6">
                  <FeatureList
                    features={activeTab.features}
                    addOnEnabled={showAddOn}
                  />
                </div>

                <div>
                  <BookCallButton subject={`Inquiry: ${activeTab.label}`} />
                </div>
              </div>
            </div>
          </div>

          {/* Retainer card — spans full grid row height */}
          <div className="relative glass-strong rounded-card p-6 md:p-7 sr flex flex-col h-full">
            <div className="absolute top-6 right-6 inline-flex items-center gap-1.5 text-[0.625rem] font-mono uppercase tracking-wider text-accent">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              Most Popular
            </div>

            <div className="mb-2 text-xs text-muted">Design / dev retainer</div>

            <div className="flex items-baseline gap-1 mb-5">
              <span className="font-display font-medium text-3xl md:text-4xl text-foreground tracking-tight">
                $3,500
              </span>
              <span className="text-muted text-sm">/mo</span>
            </div>

            <ul className="space-y-2 mb-6 flex-1">
              {retainerFeatures.map((f) => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-xs text-muted leading-snug"
                >
                  <span className="shrink-0 text-accent">
                    <CheckIcon />
                  </span>
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div>
              <BookCallButton subject="Inquiry: Design / dev retainer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
