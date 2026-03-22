"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const projects = [
  {
    company: "MarsX · Startup Studio",
    title: "Product Launchpad — SaaS & AI Products",
    desc: "Scaled multiple products from MVP to six-figure MRR. Led redesigns boosting conversion by 30%+ and cutting support tickets by 40%.",
    tags: ["Product Design", "SaaS", "CRO", "AI"],
    href: "https://www.behance.net/gallery/244039119/Product-Launchpad-Design",
    featured: true,
    gradient: "from-[#1a1a2e] to-[#16213e]",
    accentColor: "#E85D2D",
  },
  {
    company: "Solo Project",
    title: "Winery Hotels — Wine Tourism Platform",
    desc: "Designed and built a global directory connecting wine lovers with winery accommodations.",
    tags: ["Directory", "Next.js", "Wine Tourism"],
    href: "https://www.behance.net/gallery/243455705/Winery-Hotels-Case-study",
    featured: false,
    gradient: "from-[#2d1b4e] to-[#1a1040]",
    accentColor: "#9B59B6",
  },
  {
    company: "Instadapp · DeFi",
    title: "Dashboard & Website Concept",
    desc: "DeFi platform that grew 10x during my tenure and secured $10M in Series A funding.",
    tags: ["DeFi", "Dashboard", "Web3"],
    href: "https://www.behance.net/gallery/156011425/WEBSITE-CONCEPT-DASHBOARD-FOR-INSTADAPP",
    featured: false,
    gradient: "from-[#1a2940] to-[#0f1b2d]",
    accentColor: "#3498DB",
  },
  {
    company: "Freelance",
    title: "Logistics Company — Website Redesign",
    desc: "Complete marketing site redesign for an international logistics company.",
    tags: ["Website", "Redesign", "B2B"],
    href: "https://www.behance.net/gallery/155965255/Logistic-company-website",
    featured: false,
    gradient: "from-[#2e2418] to-[#1a1610]",
    accentColor: "#E8A83E",
  },
];

function BrowserMockup({ accentColor }: { accentColor: string }) {
  return (
    <div className="w-full aspect-[16/10] rounded-lg border border-white/10 overflow-hidden bg-black/30">
      {/* Browser bar */}
      <div className="flex items-center gap-1.5 px-3 py-2 bg-white/5 border-b border-white/10">
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <span className="w-2 h-2 rounded-full bg-white/20" />
        <div className="flex-1 mx-4 h-4 rounded bg-white/5" />
      </div>
      {/* Content mockup */}
      <div className="p-4 space-y-3">
        <div className="flex gap-3">
          <div className="w-1/3 space-y-2">
            <div className="h-2 rounded bg-white/10 w-3/4" />
            <div className="h-2 rounded bg-white/10 w-1/2" />
            <div className="h-6 rounded mt-3" style={{ background: accentColor, opacity: 0.3 }} />
          </div>
          <div className="flex-1 rounded bg-white/5 min-h-[60px]" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-8 rounded bg-white/5" />
          <div className="h-8 rounded bg-white/5" />
          <div className="h-8 rounded bg-white/5" />
        </div>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const cardRef = useRef<HTMLAnchorElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    const mockup = mockupRef.current;
    if (!card || !mockup || window.innerWidth < 768) return;

    const onMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(mockup, {
        rotateY: x * 6,
        rotateX: -y * 6,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const onLeave = () => {
      gsap.to(mockup, {
        rotateY: 0,
        rotateX: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    };

    card.addEventListener("mousemove", onMove);
    card.addEventListener("mouseleave", onLeave);
    return () => {
      card.removeEventListener("mousemove", onMove);
      card.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <a
      ref={cardRef}
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className={`sr group block bg-bg-card border border-border rounded-card overflow-hidden hover:-translate-y-1 transition-all duration-300 ${
        project.featured ? "col-span-1 md:col-span-2" : ""
      }`}
      data-cursor-hover
    >
      {/* Thumbnail */}
      <div
        className={`p-6 md:p-8 bg-gradient-to-br ${project.gradient}`}
        style={{ perspective: "600px" }}
      >
        <div ref={mockupRef} className="group-hover:scale-[1.02] transition-transform duration-500">
          <BrowserMockup accentColor={project.accentColor} />
        </div>
      </div>

      {/* Info */}
      <div className="p-6 md:p-8">
        <p className="text-xs text-muted font-mono mb-2">{project.company}</p>
        <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2 group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.desc}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-[11px] font-medium border border-border text-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default function Portfolio() {
  return (
    <section id="work" className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <h2 className="font-display font-bold text-3xl md:text-5xl text-foreground mb-14 sr">
          Selected <span className="text-muted">work.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
