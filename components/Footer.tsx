const links = [
  { label: "X / Twitter", href: "https://x.com/alexanderOsso" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/borisovaleksandr/" },
  { label: "Behance", href: "https://www.behance.net/aleksandrborisov" },
  { label: "CV", href: "/cv" },
  { label: "Email", href: "mailto:hello@alexanderosso.com" },
];

export default function Footer() {
  return (
    <footer className="pt-3 pb-6" data-print-hide>
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card px-5 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[11px] text-muted">
            &copy; 2026 Aleksandr Borisov · Built solo with Next.js + Claude Code
          </p>
          <div className="flex items-center gap-3 flex-wrap justify-center">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="text-[11px] text-muted hover:text-foreground transition-colors"
                  data-cursor-hover
                >
                  {link.label}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
