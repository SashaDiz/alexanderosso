"use client";

import { useContact } from "./ContactProvider";

const services = [
  {
    title: "MVP Build",
    desc: "Full MVP shipped end-to-end — landing, core product, onboarding. Designed and vibe-coded to a live URL, not just Figma.",
    price: "from $3,000",
  },
  {
    title: "Website & Landing",
    desc: "High-converting SaaS sites — copy, design, code. Deployed to your domain with CRO baked in.",
    price: "from $2,000",
  },
  {
    title: "Directory / AI App",
    desc: "Custom directories, AI tools, niche SaaS — design + Next.js front-end + integrations (Stripe, Supabase, OAuth).",
    price: "from $4,000",
  },
];

export default function Services() {
  const contact = useContact();
  return (
    <section id="services" className="">
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex items-center justify-between mb-1.5">
            <h2 className="font-display font-medium text-base text-foreground">
              Working with founders
            </h2>
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full border border-accent/25 bg-accent/10 text-accent text-[0.625rem] font-mono uppercase tracking-wider">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
              </span>
              2 slots open
            </span>
          </div>

          <p className="text-xs text-muted leading-relaxed mb-5 max-w-[60ch]">
            I take on a small number of client projects between my own —
            end-to-end builds, not just design.
          </p>

          <div className="flex flex-col">
            {services.map((service, i) => (
              <button
                key={service.title}
                type="button"
                onClick={() => contact.open(`Inquiry: ${service.title}`)}
                className={`group flex items-center gap-4 py-3.5 text-left ${
                  i < services.length - 1 ? "border-b border-border" : ""
                } hover:bg-bg-card-hover/50 transition-colors -mx-4 px-4 rounded-lg`}
                data-cursor-cta
              >
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-medium text-sm text-foreground group-hover:text-accent transition-colors mb-0.5">
                    {service.title}
                  </h3>
                  <p className="text-[0.6875rem] text-muted leading-snug">
                    {service.desc}
                  </p>
                </div>
                <span className="font-mono text-[0.6875rem] text-accent shrink-0">
                  {service.price}
                </span>
                <svg aria-hidden="true"
                  width="11"
                  height="11"
                  viewBox="0 0 14 14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0"
                >
                  <path d="M3 11 L11 3 M4 3 L11 3 L11 10" />
                </svg>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
