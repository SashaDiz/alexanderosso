export type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  shortPeriod: string;
  desc: string;
  shortDesc: string;
  bullets?: string[];
  skills?: { name: string; highlight?: boolean }[];
  active?: boolean;
};

export type EducationItem = {
  school: string;
  course: string;
  period: string;
};

export type StatItem = {
  value: string;
  suffix: string;
  label: string;
};

export type SkillItem = {
  name: string;
  highlight: boolean;
};

export const summary =
  "Product Designer with 10 years of experience in SaaS and AI, focused on growth-driven UX/UI and conversion optimization. Over the past 5 years I've helped startups scale products from MVP to five- and six-figure recurring revenue, leading the design process from concept to launch.";

export const stats: StatItem[] = [
  { value: "5", suffix: "", label: "Live products" },
  { value: "10", suffix: "+", label: "Years designing" },
  { value: "30", suffix: "%", label: "Avg CVR lift" },
  { value: "6", suffix: "fig", label: "MRR scaled" },
];

export const timeline: ExperienceItem[] = [
  {
    role: "Solo Founder",
    company: "Independent",
    period: "2025 — now",
    shortPeriod: "2025 — now",
    desc: "Designing, vibe-coding and shipping five SaaS products end-to-end from Buenos Aires.",
    shortDesc: "5 SaaS products, building in public",
    active: true,
  },
  {
    role: "Product Designer",
    company: "MarsX",
    period: "Aug 2023 — Jan 2026",
    shortPeriod: "2023 — 2026",
    desc: "Startup studio launching and scaling multiple SaaS and AI products in parallel.",
    shortDesc: "SaaS & AI startup studio",
    bullets: [
      "Scaled multiple products from early MVP to stable five- and six-figure MRR through strategic marketing site and core product redesigns.",
      "Led marketing site redesigns that lifted conversion 30%+ and cut pre-sale support requests 40%+ via clearer value comms and onboarding.",
      "Owned the full design lifecycle: research → wireframes → high-fidelity UI → front-end implementation in HTML/CSS/JS/Tailwind → live deploy.",
    ],
    skills: [
      { name: "Figma" },
      { name: "MVP", highlight: true },
      { name: "UI/UX" },
      { name: "Prototyping" },
      { name: "CRO", highlight: true },
      { name: "PH Launch" },
      { name: "Analytics" },
      { name: "SEO" },
      { name: "HTML" },
      { name: "CSS" },
      { name: "Claude Code", highlight: true },
    ],
  },
  {
    role: "UI/UX Designer",
    company: "Instadapp",
    period: "Feb 2021 — Apr 2023",
    shortPeriod: "2021 — 2023",
    desc: "Leading DeFi platform for managing and optimising crypto assets.",
    shortDesc: "DeFi, $10M Series A",
    bullets: [
      "Integrated new protocols while preserving platform stability and existing system constraints.",
      "Ran usability audits and led MVP design for new desktop and mobile DeFi products.",
      "During my tenure the platform grew 10× and secured a $10M Series A.",
    ],
    skills: [
      { name: "Figma" },
      { name: "UI/UX" },
      { name: "Design Systems" },
      { name: "DeFi" },
      { name: "Crypto" },
      { name: "Prototyping" },
      { name: "SaaS" },
      { name: "A/B Tests" },
      { name: "MVP" },
    ],
  },
  {
    role: "UI Designer",
    company: "LAD Network",
    period: "Jun 2020 — Apr 2021",
    shortPeriod: "2020 — 2021",
    desc: "Browser-extension studio shipping ad blockers, VPNs and reading tools. Owned UI design, landing pages, branding and marketing collateral.",
    shortDesc: "Browser extensions",
  },
  {
    role: "UI/UX Designer",
    company: "Light-tech.io",
    period: "Nov 2018 — Mar 2020",
    shortPeriod: "2018 — 2020",
    desc: "Designed and improved WIX website-builder extensions: app interfaces, redesigns, testing, platform-guideline compliance and promotional materials.",
    shortDesc: "WIX website-builder extensions",
  },
];

export const skills: SkillItem[] = [
  // Identity / process
  { name: "Solo Founding", highlight: true },
  { name: "Vibe Coding", highlight: true },
  { name: "Claude Code", highlight: true },
  { name: "Cursor", highlight: false },
  { name: "Figma", highlight: false },
  { name: "MVP Design", highlight: false },

  // Web stack
  { name: "Next.js", highlight: false },
  { name: "React", highlight: false },
  { name: "TypeScript", highlight: false },
  { name: "Tailwind", highlight: false },
  { name: "Shadcn/ui", highlight: false },
  { name: "Zod", highlight: false },

  // iOS
  { name: "iOS / SwiftUI", highlight: false },
  { name: "App Store Launch", highlight: false },

  // Backend / infra / data
  { name: "Supabase", highlight: false },
  { name: "PostgreSQL", highlight: false },
  { name: "Vercel", highlight: false },
  { name: "Resend", highlight: false },

  // Payments
  { name: "Stripe", highlight: false },
  { name: "RevenueCat", highlight: false },

  // API integrations
  { name: "Meta API", highlight: false },
  { name: "X API", highlight: false },
  { name: "TikTok API", highlight: false },
  { name: "LinkedIn API", highlight: false },
  { name: "Google API", highlight: false },
  { name: "OAuth", highlight: false },

  // AI
  { name: "Anthropic API", highlight: false },
  { name: "OpenAI API", highlight: false },

  // Growth
  { name: "SEO", highlight: false },
  { name: "CRO", highlight: false },
  { name: "A/B Testing", highlight: false },
  { name: "PostHog", highlight: false },
  { name: "PH Launch", highlight: false },
];

export const education: EducationItem[] = [
  {
    school: "Skillbox",
    course: "HTML + CSS",
    period: "2024",
  },
  {
    school: "Skillbox",
    course: "UX Design",
    period: "2022 — 2023",
  },
  {
    school: "Skillbox",
    course: "Web Design PRO",
    period: "2018",
  },
];

export const languages = [
  { name: "Russian", level: "Native" },
  { name: "English", level: "B2+" },
];

export const aboutMe =
  "Husband and proud father of a beautiful daughter. I love travelling, music, and a good mate or glass of wine. Last year I launched my solo project in the wine-tourism niche — WineryHotels.com. Lately I've also gotten into vibe coding as a hobby alongside listening to startup podcasts.";

export const contactLinks = [
  { label: "Email", href: "mailto:hello@alexanderosso.com" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/borisovaleksandr/" },
  { label: "Behance", href: "https://www.behance.net/aleksandrborisov" },
  { label: "X / Twitter", href: "https://x.com/alexanderOsso" },
];
