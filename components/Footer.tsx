const links = [
  { label: "Behance", href: "https://www.behance.net/aleksandrborisov" },
  { label: "LinkedIn", href: "#" },
  { label: "Telegram", href: "#" },
  { label: "Dribbble", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted">
          &copy; 2026 Aleksandr Borisov
        </p>
        <div className="flex items-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted hover:text-foreground transition-colors"
              data-cursor-hover
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
