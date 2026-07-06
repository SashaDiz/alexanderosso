import type { ReactNode } from "react";

type Icon = { viewBox: string; size: number; node: ReactNode };

const icons: Record<string, Icon> = {
  "X / Twitter": {
    viewBox: "0 0 24 24",
    size: 16,
    node: (
      <path
        d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
        fill="currentColor"
        transform="translate(12 12) scale(0.82) translate(-12 -12)"
      />
    ),
  },
  LinkedIn: {
    viewBox: "0 0 28 28",
    size: 20,
    node: (
      <>
        <path
          d="M7.1237 9.70898H6.66536C5.80112 9.70898 5.369 9.70898 5.10052 9.97747C4.83203 10.246 4.83203 10.6781 4.83203 11.5423V19.334C4.83203 20.1982 4.83203 20.6303 5.10052 20.8988C5.369 21.1673 5.80112 21.1673 6.66536 21.1673H7.1237C7.98794 21.1673 8.42006 21.1673 8.68855 20.8988C8.95703 20.6303 8.95703 20.1982 8.95703 19.334V11.5423C8.95703 10.6781 8.95703 10.246 8.68855 9.97747C8.42006 9.70898 7.98794 9.70898 7.1237 9.70898Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M8.95703 4.89648C8.95703 6.03557 8.03362 6.95898 6.89453 6.95898C5.75544 6.95898 4.83203 6.03557 4.83203 4.89648C4.83203 3.7574 5.75544 2.83398 6.89453 2.83398C8.03362 2.83398 8.95703 3.7574 8.95703 4.89648Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path
          d="M14.2976 9.70898H13.5404C12.6761 9.70898 12.244 9.70898 11.9755 9.97747C11.707 10.246 11.707 10.6781 11.707 11.5423V19.334C11.707 20.1982 11.707 20.6303 11.9755 20.8988C12.244 21.1673 12.6761 21.1673 13.5404 21.1673H13.9987C14.863 21.1673 15.2951 21.1673 15.5636 20.8988C15.832 20.6304 15.832 20.1982 15.832 19.334L15.8321 16.1258C15.8321 14.607 16.3161 13.3758 17.7459 13.3758C18.4608 13.3758 19.0403 13.9914 19.0403 14.7508V18.8758C19.0403 19.74 19.0403 20.1721 19.3088 20.4406C19.5773 20.7091 20.0094 20.7091 20.8737 20.7091H21.3309C22.1949 20.7091 22.6269 20.7091 22.8954 20.4407C23.1639 20.1723 23.164 19.7403 23.1642 18.8762L23.1654 13.8342C23.1654 11.556 20.9987 9.7092 18.8541 9.7092C17.6332 9.7092 16.544 10.3076 15.8321 11.2434C15.8321 10.6659 15.8321 10.3772 15.7066 10.1627C15.6271 10.0269 15.5141 9.91389 15.3783 9.83444C15.1638 9.70898 14.8751 9.70898 14.2976 9.70898Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  Behance: {
    viewBox: "0 0 28 28",
    size: 20,
    node: (
      <>
        <path
          d="M4 14H9.625M9.4 7H6C5.05719 7 4.58579 7 4.29289 7.29289C4 7.58579 4 8.05719 4 9V19C4 19.9428 4 20.4142 4.29289 20.7071C4.58579 21 5.05719 21 6 21H9.4C11.3882 21 13 19.433 13 17.5C13 15.567 11.3882 14 9.4 14C11.3882 14 13 12.433 13 10.5C13 8.567 11.3882 7 9.4 7Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M22 9H18M16 16H24C24 13.9587 22.2091 12 20 12C17.7909 12 16 13.9587 16 16ZM16 16V17C16 19.2091 17.7909 21 20 21C21.4806 21 22.7733 20.1956 23.4649 19"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </>
    ),
  },
  Upwork: {
    viewBox: "0 0 28 28",
    size: 20,
    node: (
      <path
        d="M4 9.5V15.75C4 17.7925 5.7075 19.5 7.75 19.5C9.7925 19.5 11.5 17.7925 11.5 15.75V9.5C12.75 12.625 15.0965 19.5 19.625 19.5C22.0079 19.5 24 17.5079 24 15.125C24 12.7421 22.0079 10.75 19.625 10.75C17.0913 10.75 15.5912 12.625 15.25 14.5C14.9475 16.1625 13.375 24.5 13.375 24.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
};

const links = [
  { label: "X / Twitter", href: "https://x.com/alexanderOsso" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/borisovaleksandr/" },
  { label: "Behance", href: "https://www.behance.net/aleksandrborisov" },
  { label: "Upwork", href: "https://www.upwork.com/freelancers/~01b291538e885c464c?mp_source=share" },
  { label: "Blog", href: "https://sashaosso.writizzy.blog/" },
  { label: "CV", href: "/cv" },
  { label: "Email", href: "mailto:hello@alexanderosso.com" },
];

export default function Footer() {
  return (
    <footer className="pt-3 pb-6" data-print-hide>
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card px-5 py-5 flex flex-col items-center gap-4">
          <div className="flex items-center gap-x-4 gap-y-2 flex-wrap justify-center">
            {links.map((link) => {
              const isExternal = link.href.startsWith("http");
              const icon = icons[link.label];
              const shared = {
                href: link.href,
                target: isExternal ? "_blank" : undefined,
                rel: isExternal ? "noopener noreferrer" : undefined,
                "data-cursor-hover": true,
              } as const;

              if (icon) {
                return (
                  <a
                    key={link.label}
                    {...shared}
                    aria-label={link.label}
                    title={link.label}
                    className="inline-flex items-center text-muted hover:text-foreground transition-colors"
                  >
                    <svg
                      aria-hidden="true"
                      width={icon.size}
                      height={icon.size}
                      viewBox={icon.viewBox}
                      fill="none"
                    >
                      {icon.node}
                    </svg>
                  </a>
                );
              }

              return (
                <a
                  key={link.label}
                  {...shared}
                  className="text-xs text-muted hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="w-full border-t border-border" />
          <p className="text-[11px] text-muted text-center">
            &copy; 2026 Aleksandr Borisov · Built solo with Next.js + Claude Code
          </p>
        </div>
      </div>
    </footer>
  );
}
