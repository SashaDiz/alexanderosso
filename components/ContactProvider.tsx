"use client";

import { createContext, useContext, useState, useCallback, ReactNode } from "react";
import ContactModal from "./ContactModal";

type ContactCtx = {
  open: (subject?: string) => void;
  close: () => void;
};

const Ctx = createContext<ContactCtx | null>(null);

export function useContact() {
  const ctx = useContext(Ctx);
  if (!ctx) {
    // Provide a no-op fallback so usage outside provider doesn't crash builds.
    return {
      open: () => {
        if (typeof window !== "undefined") {
          window.location.href = "mailto:hello@alexanderosso.com";
        }
      },
      close: () => {},
    } satisfies ContactCtx;
  }
  return ctx;
}

export default function ContactProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [subject, setSubject] = useState<string | undefined>(undefined);

  const open = useCallback((s?: string) => {
    setSubject(s);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  return (
    <Ctx.Provider value={{ open, close }}>
      {children}
      <ContactModal open={isOpen} onClose={close} initialSubject={subject} />
    </Ctx.Provider>
  );
}
