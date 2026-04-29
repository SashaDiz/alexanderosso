import type { Metadata } from "next";
import Link from "next/link";
import Cursor from "@/components/Cursor";
import ThemeToggle from "@/components/ThemeToggle";

const MULU_DESC =
  "Turn doomscrolling into daily reflection. Block distracting apps until you journal. Gentle digital detox in 2 minutes a day.";

export const metadata: Metadata = {
  title: "Mulu — Digital Detox Journal",
  description: MULU_DESC,
  alternates: { canonical: "/mulu" },
  keywords: [
    "Mulu",
    "digital detox",
    "journaling app",
    "iOS",
    "screen time",
    "mindfulness",
    "habit tracker",
  ],
  openGraph: {
    type: "website",
    url: "https://alexanderosso.com/mulu",
    siteName: "Mulu — Digital Detox Journal",
    title: "Mulu — Digital Detox Journal",
    description: MULU_DESC,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mulu — Digital Detox Journal",
    description: MULU_DESC,
    creator: "@alexanderOsso",
  },
};

export default function MuluLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center bg-bg text-foreground font-body">
      <Cursor />
      {children}
      <footer className="w-full max-w-[420px] px-5 py-6">
        <div className="glass rounded-full px-4 py-1.5 flex items-center justify-center gap-4">
          <Link
            href="/mulu/terms"
            className="text-[0.6875rem] text-muted hover:text-foreground transition-colors"
          >
            Terms
          </Link>
          <Link
            href="/mulu/privacy"
            className="text-[0.6875rem] text-muted hover:text-foreground transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/mulu/support"
            className="text-[0.6875rem] text-muted hover:text-foreground transition-colors"
          >
            Support
          </Link>
          <span className="w-px h-3 bg-border" />
          <ThemeToggle />
        </div>
      </footer>
    </div>
  );
}
