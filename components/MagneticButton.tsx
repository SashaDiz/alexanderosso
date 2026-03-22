"use client";

import { useRef, useCallback } from "react";
import gsap from "gsap";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  dataCursorCta?: boolean;
}

export default function MagneticButton({
  children,
  className = "",
  href,
  onClick,
  dataCursorCta,
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(ref.current, {
      x: x * 0.25,
      y: y * 0.25,
      duration: 0.3,
      ease: "power2.out",
    });
  }, []);

  const onMouseLeave = useCallback(() => {
    if (!ref.current) return;
    gsap.to(ref.current, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const props = {
    ref: ref as React.Ref<HTMLAnchorElement & HTMLButtonElement>,
    className,
    onMouseMove,
    onMouseLeave,
    ...(dataCursorCta ? { "data-cursor-cta": true } : {}),
  };

  if (href) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} {...props}>
      {children}
    </button>
  );
}
