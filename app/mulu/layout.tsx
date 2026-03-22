import type { Metadata } from "next";
import Link from "next/link";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Mulu — Digital Detox Journal",
  description:
    "Turn doomscrolling into daily reflection. Block distracting apps until you journal. Gentle digital detox in 2 minutes a day.",
};

export default function MuluLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-bg text-foreground font-body">
      <Cursor />
      {children}
      <footer className="pb-8 pt-4 flex items-center gap-6">
        <Link
          href="/mulu/terms"
          className="text-xs text-muted hover:text-foreground transition-colors"
        >
          Terms
        </Link>
        <Link
          href="/mulu/privacy"
          className="text-xs text-muted hover:text-foreground transition-colors"
        >
          Privacy
        </Link>
        <Link
          href="/mulu/support"
          className="text-xs text-muted hover:text-foreground transition-colors"
        >
          Support
        </Link>
      </footer>
    </div>
  );
}
