export type ProjectStatus = "Live" | "Beta" | "Soft launch";

// Stages of the build, in order — used to render the progress bar on each card.
export const STAGES = [
  "Idea",
  "Design",
  "MVP",
  "Beta",
  "Live",
  "Scaling",
] as const;
export type Stage = (typeof STAGES)[number];

export type BuildingProject = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  internalUrl?: string;
  status: ProjectStatus;
  stage: Stage;
  stageNote: string;
  launched: string;
  stack: string[];
  gradient: string;
  accentColor: string;
  featured?: boolean;
  thumbnail?: string;
};

export const buildingNow: BuildingProject[] = [
  {
    slug: "posteahora",
    name: "PosteAhora",
    tagline:
      "Put your social media on autopilot with AI agents — plan, write, and schedule posts across every platform.",
    description:
      "An MCP for AI agents that puts your social media on autopilot. Connect Claude, ChatGPT, Cursor, or OpenClaw with a single URL — your agent plans, writes, and schedules posts across every platform, right from the chat.",
    url: "https://posteahora.com/",
    status: "Live",
    stage: "Live",
    stageNote: "Live · AI-agent publishing via MCP",
    launched: "2025 Q2",
    stack: ["Next.js", "Social", "AI"],
    gradient: "from-[#0A0A0A] to-[#312E81]",
    accentColor: "#6366F1",
    featured: true,
    thumbnail: "/projects/posteahora.png",
  },
  {
    slug: "mulu",
    name: "Mulu",
    tagline:
      "Digital detox journal — track screen-free moments, build mindful habits.",
    description:
      "iOS journal app helping people log offline time and build healthier digital habits. Designed end-to-end, built for App Store launch.",
    url: "https://www.mulujournal.app/",
    internalUrl: "/mulu",
    status: "Live",
    stage: "Live",
    stageNote: "v1 on App Store · iterating onboarding",
    launched: "2025 Q1",
    stack: ["iOS", "Next.js", "AI"],
    gradient: "from-[#0A0A0A] to-[#1F1B3D]",
    accentColor: "#7FB069",
    featured: true,
    thumbnail: "/mulu/icon.png",
  },
  {
    slug: "winery-hotels",
    name: "Winery Hotels",
    tagline:
      "Global directory of winery accommodations for wine tourism lovers.",
    description:
      "Niche travel directory connecting wine lovers with hotels, vineyards and tasting stays worldwide. SEO-first, monetized via affiliates.",
    url: "https://winery-hotels.com/",
    status: "Live",
    stage: "Scaling",
    stageNote: "Scaling content · 50+ properties indexed",
    launched: "2024 Q2",
    stack: ["Next.js", "Directory", "Travel"],
    gradient: "from-[#1B1731] to-[#0A0A0A]",
    accentColor: "#A78BFA",
    thumbnail: "/projects/winery-hotels.png",
  },
  {
    slug: "directory-launch",
    name: "Directory Launch",
    tagline:
      "Launch directories that actually rank — templates and the playbook.",
    description:
      "Productized templates plus a step-by-step playbook for indie makers shipping their own directory sites. Built from my own playbook.",
    url: "https://directory-launch.com/",
    status: "Live",
    stage: "Live",
    stageNote: "Live · gathering early customer feedback",
    launched: "2025 Q1",
    stack: ["Next.js", "SEO", "Templates"],
    gradient: "from-[#0A0A0A] to-[#1E1B4B]",
    accentColor: "#4F46E5",
    thumbnail: "/projects/directory-launch.png",
  },
  {
    slug: "momentum",
    name: "Momentum",
    tagline: "Build daily momentum — habit and focus tracker for indie makers.",
    description:
      "Lightweight habit and focus tracker designed for solo founders. Daily streaks, deep-work timers, no-bloat interface.",
    url: "https://getmomentum.online",
    status: "Beta",
    stage: "Beta",
    stageNote: "Open beta · onboarding first 100 users",
    launched: "2025 Q2",
    stack: ["Next.js", "Productivity"],
    gradient: "from-[#1E1B4B] to-[#0A0A0A]",
    accentColor: "#818CF8",
    thumbnail: "/projects/momentum.png",
  },
  {
    slug: "besttravelapps",
    name: "TravelApps",
    tagline:
      "Curated directory of the best travel apps — booking, navigation, planning and more.",
    description:
      "Travel app directory helping travelers discover the right tools for their trips. 150+ apps indexed across booking, maps, planning and utilities.",
    url: "https://besttravelapps.online/",
    status: "Live",
    stage: "Live",
    stageNote: "Live · 150+ travel apps indexed",
    launched: "2026 Q2",
    stack: ["Next.js", "Directory", "Travel"],
    gradient: "from-[#0A0A0A] to-[#134E4A]",
    accentColor: "#2DD4BF",
  },
  {
    slug: "ailaunch",
    name: "AI Launch Space",
    tagline:
      "Curated directory of AI tools built by indie hackers and founders.",
    description:
      "Discovery platform connecting indie AI builders with early adopters. 190+ tools indexed across categories, with submission flow and ranking.",
    url: "https://ailaunch.space/",
    status: "Live",
    stage: "Live",
    stageNote: "Live · 190+ AI tools indexed",
    launched: "2025 Q4",
    stack: ["Next.js", "Directory", "AI"],
    gradient: "from-[#0A0A0A] to-[#1E3A8A]",
    accentColor: "#60A5FA",
    thumbnail: "/projects/ailaunch.png",
  },
];

export type PastProject = {
  company: string;
  title: string;
  desc: string;
  tags: string[];
  href: string;
  period: string;
};

export const pastWork: PastProject[] = [
  {
    company: "MarsX · Startup Studio",
    title: "Product Launchpad — SaaS & AI",
    desc: "Scaled multiple products from MVP to six-figure MRR. Led redesigns boosting conversion 30%+ and cutting support tickets 40%.",
    tags: ["Product Design", "SaaS", "CRO", "AI"],
    href: "https://www.behance.net/gallery/244039119/Product-Launchpad-Design",
    period: "2023 — 2026",
  },
  {
    company: "Solo · Case Study",
    title: "Winery Hotels — Design Case",
    desc: "End-to-end design for a global directory of wine-tourism stays. Brand, UX research, IA, and a conversion-focused front-end I shipped solo.",
    tags: ["Case Study", "Directory", "Travel", "Brand"],
    href: "https://www.behance.net/gallery/243455705/Winery-Hotels-Case-study",
    period: "2024",
  },
  {
    company: "Instadapp · DeFi",
    title: "Dashboard & Website",
    desc: "DeFi platform that grew 10× during my tenure and secured $10M Series A funding.",
    tags: ["DeFi", "Dashboard", "Web3"],
    href: "https://www.behance.net/gallery/156011425/WEBSITE-CONCEPT-DASHBOARD-FOR-INSTADAPP",
    period: "2021 — 2023",
  },
];
