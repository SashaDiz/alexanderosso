import type { Metadata } from "next";
import Cursor from "@/components/Cursor";

export const metadata: Metadata = {
  title: "Mulu — Digital Detox Journal",
  description: "Turn doomscrolling into daily reflection. Block distracting apps until you journal. Gentle digital detox in 2 minutes a day.",
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
    </div>
  );
}
