"use client";

import { useGSAP } from "@/hooks/useGSAP";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import SkipLink from "@/components/SkipLink";
import Hero from "@/components/Hero";
import NowBuilding from "@/components/NowBuilding";
import BentoGrid from "@/components/BentoGrid";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Divider from "@/components/Divider";
import ContactProvider from "@/components/ContactProvider";

export default function Home() {
  useGSAP();

  return (
    <ContactProvider>
      <SkipLink />
      <Cursor />
      <Nav />
      <main
        id="main-content"
        className="flex flex-col gap-3 pt-28 sm:pt-24"
      >
        <Hero />
        <Divider />
        <NowBuilding />
        <Divider />
        <BentoGrid />
        <Divider />
        <Services />
        <Divider />
        <Portfolio />
        <Divider />
        <About />
        <Divider />
        <CTA />
      </main>
      <Footer />
    </ContactProvider>
  );
}
