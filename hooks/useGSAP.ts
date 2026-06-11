"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

export function useGSAP() {
  useEffect(() => {
    // Scroll reveal for all .sr elements.
    // The glass containers only fade — animating transform on elements with
    // backdrop-filter makes Chromium mis-sample the blur at the viewport edge
    // (glitchy band at the bottom of cards). The rise is applied to children.
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const srElements = document.querySelectorAll(".sr");
    srElements.forEach((el) => {
      if (reduceMotion) {
        gsap.set(el, { opacity: 1 });
        return;
      }

      const parent = el.parentElement;
      const siblings = parent
        ? Array.from(parent.querySelectorAll(":scope > .sr"))
        : [];
      const siblingIndex = siblings.indexOf(el as Element);

      const tl = gsap.timeline({
        delay: siblingIndex * 0.1,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      });
      tl.fromTo(
        el,
        { opacity: 0 },
        { opacity: 1, duration: 0.8, ease: "power3.out" },
        0
      );
      if (el.children.length) {
        tl.fromTo(
          el.children,
          { y: 28 },
          { y: 0, duration: 0.8, ease: "power3.out", clearProps: "transform" },
          0
        );
      }
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
