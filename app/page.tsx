"use client";

import { useGSAP } from "@/hooks/useGSAP";
import Cursor from "@/components/Cursor";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  useGSAP();

  return (
    <>
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <BentoGrid />
        <Services />
        <Portfolio />
        <About />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
