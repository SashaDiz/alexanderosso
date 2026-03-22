"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useGSAP() {
  useEffect(() => {
    // Scroll reveal for all .sr elements
    const srElements = document.querySelectorAll(".sr");
    srElements.forEach((el) => {
      const parent = el.parentElement;
      const siblings = parent
        ? Array.from(parent.querySelectorAll(":scope > .sr"))
        : [];
      const siblingIndex = siblings.indexOf(el as Element);

      gsap.fromTo(
        el,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: siblingIndex * 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            once: true,
          },
        }
      );
    });

    // Smooth scroll for anchor links
    const handleClick = (e: Event) => {
      e.preventDefault();
      const href = (e.currentTarget as HTMLAnchorElement).getAttribute("href");
      if (href && href !== "#") {
        const target = document.querySelector(href);
        if (target) {
          gsap.to(window, {
            duration: 1,
            scrollTo: { y: target, offsetY: 80 },
            ease: "power3.inOut",
          });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach((anchor) => anchor.addEventListener("click", handleClick));

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      anchors.forEach((anchor) =>
        anchor.removeEventListener("click", handleClick)
      );
    };
  }, []);
}
