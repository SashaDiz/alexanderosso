import type { Metadata } from "next";
import CVClient from "./CVClient";

export const metadata: Metadata = {
  title: "CV — Aleksandr Borisov",
  description:
    "Curriculum Vitae of Aleksandr Borisov — Product Designer with 10 years of SaaS and AI experience, currently shipping five SaaS products solo from Buenos Aires.",
  alternates: { canonical: "/cv" },
  openGraph: {
    type: "profile",
    url: "/cv",
    title: "CV — Aleksandr Borisov",
    description:
      "Product Designer · 10 years SaaS & AI · 5 products live · solo founder in Buenos Aires.",
  },
};

export default function CVPage() {
  return <CVClient />;
}
