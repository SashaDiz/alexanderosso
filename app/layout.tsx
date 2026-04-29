import type { Metadata, Viewport } from "next";
import { Inter, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-space-mono",
  display: "swap",
});

const SITE_URL = "https://alexanderosso.com";
const SITE_NAME = "Aleksandr Borisov";
const DEFAULT_TITLE =
  "Aleksandr Borisov — Solo founder, vibe-coder & product designer";
const DEFAULT_DESCRIPTION =
  "Solo founder shipping 5 SaaS products. 10 years designing for SaaS, AI, and DeFi at MarsX and Instadapp. Now building Mulu, Winery Hotels, Directory Launch, Momentum and PosteaHora — designed, coded, and launched solo from Buenos Aires.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s — Aleksandr Borisov",
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "Aleksandr Borisov",
    "solo founder",
    "vibe coding",
    "product designer",
    "SaaS designer",
    "MVP design",
    "indie hacker",
    "Buenos Aires designer",
    "Next.js designer-developer",
    "Claude Code",
    "Cursor",
    "Figma",
    "Mulu",
    "Winery Hotels",
    "Directory Launch",
    "PosteaHora",
    "Momentum",
  ],
  authors: [{ name: "Aleksandr Borisov", url: SITE_URL }],
  creator: "Aleksandr Borisov",
  publisher: "Aleksandr Borisov",
  alternates: {
    canonical: "/",
  },
  category: "Design",
  applicationName: SITE_NAME,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    creator: "@alexanderOsso",
    site: "@alexanderOsso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  manifest: "/site.webmanifest",
  verification: {
    // Add real verification tokens here when needed
    // google: "...",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EFEEEC" },
    { media: "(prefers-color-scheme: dark)", color: "#06060B" },
  ],
  colorScheme: "light dark",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Aleksandr Borisov",
  alternateName: "alexanderosso",
  url: SITE_URL,
  image: `${SITE_URL}/images/sasha.png`,
  jobTitle: "Solo Founder & Product Designer",
  description:
    "Solo founder, vibe-coder, and product designer with 10 years of experience designing SaaS, AI, and DeFi products. Currently shipping five SaaS products end-to-end.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Buenos Aires",
    addressCountry: "AR",
  },
  email: "mailto:hello@alexanderosso.com",
  knowsLanguage: ["Russian", "English"],
  knowsAbout: [
    "Product Design",
    "SaaS",
    "Vibe Coding",
    "Solo Founding",
    "MVP Design",
    "Conversion Rate Optimization",
    "Next.js",
    "iOS Development",
    "Claude Code",
    "Cursor",
    "Figma",
    "Stripe",
    "Supabase",
    "PostgreSQL",
    "OAuth",
  ],
  sameAs: [
    "https://x.com/alexanderOsso",
    "https://www.linkedin.com/in/borisovaleksandr/",
    "https://www.behance.net/aleksandrborisov",
  ],
  worksFor: {
    "@type": "Organization",
    name: "Independent",
  },
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "MVP Build",
        description:
          "Full MVP shipped end-to-end — landing, core product, onboarding. Designed and vibe-coded to a live URL, not just Figma.",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "3000",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Website & Landing",
        description:
          "High-converting SaaS sites — copy, design, code. Deployed to your domain with CRO baked in.",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "2000",
        priceCurrency: "USD",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Directory / AI App",
        description:
          "Custom directories, AI tools, niche SaaS — design + Next.js front-end + integrations (Stripe, Supabase, OAuth).",
      },
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "4000",
        priceCurrency: "USD",
      },
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: DEFAULT_DESCRIPTION,
  inLanguage: "en",
  author: { "@type": "Person", name: "Aleksandr Borisov", url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var stored = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var resolved = (stored === 'light' || stored === 'dark')
                    ? stored
                    : (prefersDark ? 'dark' : 'light');
                  document.documentElement.setAttribute('data-theme', resolved);
                  var scale = parseFloat(localStorage.getItem('font-scale') || '1');
                  if (!isNaN(scale) && scale >= 0.85 && scale <= 1.5) {
                    document.documentElement.style.setProperty('--font-scale', String(scale));
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        {/* eslint-disable-next-line @next/next/no-css-tags */}
        <link
          href="https://assets.calendly.com/assets/external/widget.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${spaceMono.variable} font-body antialiased bg-bg text-foreground`}
      >
        {children}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://datafa.st/js/script.js"
          data-website-id="dfid_3BIna4PrR0xh52Vk38hof"
          data-domain="alexanderosso.com"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
