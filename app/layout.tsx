import type { Metadata } from "next";
import { Syne, Instrument_Sans, Space_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aleksandr Borisov — Product Designer for SaaS & Startups",
  description:
    "10+ years crafting growth-driven UX/UI. I help startups ship faster, convert better, and scale from MVP to six-figure MRR.",
  openGraph: {
    title: "Aleksandr Borisov — Product Designer",
    description:
      "10+ years crafting growth-driven UX/UI for SaaS & Startups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${syne.variable} ${instrumentSans.variable} ${spaceMono.variable} font-body antialiased bg-bg text-foreground`}
      >
        {children}
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
