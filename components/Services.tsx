"use client";

const services = [
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <path d="M16 4 L18 12 L26 12 L20 17 L22 25 L16 20 L10 25 L12 17 L6 12 L14 12 Z" />
      </svg>
    ),
    title: "MVP Design",
    desc: "Ship your SaaS idea fast. Complete MVP — landing page, core product UI, onboarding flow — ready for development.",
    price: "from $3,000",
    doodle: (
      <svg className="absolute top-4 right-4 w-6 h-6 opacity-20" viewBox="0 0 24 24" fill="none" stroke="#E85D2D" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 2 L14 8 L20 8 L15 12 L17 18 L12 14 L7 18 L9 12 L4 8 L10 8 Z" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round">
        <rect x="4" y="6" width="24" height="18" rx="3" />
        <line x1="4" y1="12" x2="28" y2="12" />
        <rect x="8" y="16" width="8" height="3" rx="1" />
      </svg>
    ),
    title: "Website & Landing",
    desc: "High-converting marketing sites for SaaS. Copy direction, responsive design, CRO best practices included.",
    price: "from $2,000",
    doodle: (
      <svg className="absolute top-4 right-4 w-8 h-8 opacity-20" viewBox="0 0 32 32" fill="none" stroke="#E85D2D" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3">
        <path d="M8 24 Q16 8 24 24" />
      </svg>
    ),
  },
  {
    icon: (
      <svg viewBox="0 0 32 32" className="w-8 h-8" fill="none" stroke="#E85D2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="16,4 28,12 28,24 16,28 4,24 4,12" />
        <line x1="16" y1="4" x2="16" y2="28" />
        <line x1="4" y1="12" x2="28" y2="12" />
      </svg>
    ),
    title: "Directory / AI App",
    desc: "Custom directories, AI tools, and niche SaaS. Full design + optional front-end build with Tailwind.",
    price: "from $4,000",
    doodle: (
      <svg className="absolute bottom-4 right-4 w-6 h-6 opacity-20" viewBox="0 0 24 24" fill="none" stroke="#E85D2D" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2 v4 M12 18 v4 M2 12 h4 M18 12 h4" strokeDasharray="2 2" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-14 sr">
          <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground">
            What I <span className="text-muted">can build</span> for you.
          </h2>
          <p className="text-sm text-muted max-w-md md:text-right leading-relaxed">
            End-to-end design for SaaS products — from first wireframe to
            production-ready UI.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service) => (
            <div
              key={service.title}
              className="sr group relative bg-bg-card border border-border rounded-card p-7 md:p-8 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              data-cursor-hover
            >
              {/* Accent top line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-accent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              {service.doodle}

              <div className="mb-5">{service.icon}</div>

              <h3 className="font-display font-bold text-xl text-foreground mb-3">
                {service.title}
              </h3>

              <p className="text-sm text-muted leading-relaxed mb-6">
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <span className="font-mono text-sm text-accent">{service.price}</span>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-all duration-300">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    className="text-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <path d="M4 12 L12 4 M12 4 L5 4 M12 4 L12 11" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
