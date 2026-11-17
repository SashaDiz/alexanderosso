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
  {
    slug: "appshift",
    name: "AppShift",
    tagline: "Small apps. Calmer phones. — an independent iOS app studio.",
    description:
      "Independent iOS app studio shipping small, focused iPhone apps — digital detox, morning routines, private cycle tracking, and language learning. Designed, coded, and launched solo.",
    url: "https://appshift.xyz/",
    status: "Live",
    stage: "Live",
    stageNote: "Live · 5 apps shipped on the App Store",
    launched: "2025 Q4",
    stack: ["iOS", "Swift", "App Studio"],
    gradient: "from-[#0A0A0A] to-[#451A03]",
    accentColor: "#FB923C",
    featured: true,
    thumbnail: "/projects/appshift.svg",
  },
];

// Apps shipped under the AppShift studio — shown in a dedicated apps block.
export type AppProject = {
  slug: string;
  name: string;
  tagline: string;
  url: string;
  icon?: string;
  accentColor: string;
};

export const appshiftApps: AppProject[] = [
  {
    slug: "mulu",
    name: "Mulu",
    tagline: "A gentle digital detox journal.",
    url: "https://www.mulujournal.app/",
    icon: "/mulu/icon.png",
    accentColor: "#7FB069",
  },
  {
    slug: "mivu",
    name: "Mivu",
    tagline: "A morning ritual for your body — yoga unlocks your phone.",
    url: "https://apps.apple.com/us/app/mivu-morning-routine-yoga/id6817517526",
    icon: "/appshift/mivu.png",
    accentColor: "#F59E0B",
  },
  {
    slug: "lunami",
    name: "Lunami",
    tagline: "Private period & cycle tracker — no account needed.",
    url: "https://apps.apple.com/app/lunami-private-period-tracker/id6818124454",
    icon: "/appshift/lunami.png",
    accentColor: "#F472B6",
  },
  {
    slug: "capi",
    name: "Capi",
    tagline: "Learn Spanish from short, funny video clips.",
    url: "https://apps.apple.com/us/app/capi%C3%B1ol-learn-spanish-slang/id6828250894",
    icon: "/appshift/capi.png",
    accentColor: "#FBBF24",
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
