"use client";

const socials = [
  { label: "Behance", href: "https://www.behance.net/aleksandrborisov" },
  { label: "LinkedIn", href: "#" },
  { label: "Email", href: "mailto:sashaossito@gmail.com" },
  { label: "Telegram", href: "#" },
];

const interests = [
  { emoji: "\uD83C\uDF77", label: "Wine & Terroir" },
  { emoji: "\uD83E\uDDC9", label: "Mate Culture" },
  { emoji: "\u2708\uFE0F", label: "Travel" },
  { emoji: "\uD83C\uDFA7", label: "Music" },
  { emoji: "\uD83D\uDCBB", label: "Vibe Coding" },
  { emoji: "\uD83C\uDF99\uFE0F", label: "Startup Podcasts" },
  { emoji: "\uD83C\uDFD4\uFE0F", label: "Mendoza Life" },
  { emoji: "\uD83E\uDDF1", label: "Building Products" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="max-w-container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Left card */}
          <div className="bg-bg-card border border-border rounded-card p-7 md:p-10 sr">
            <span className="font-mono text-xs uppercase tracking-widest text-muted mb-6 block">
              Who I Am
            </span>
            <div className="space-y-4 text-sm text-muted leading-relaxed">
              <p>
                I&apos;m Aleksandr — a product designer based in Mendoza, Argentina.
                For the past 10 years I&apos;ve been designing interfaces for SaaS
                products and startups, helping founders go from idea to revenue.
              </p>
              <p>
                I&apos;m a husband and proud father. I love traveling, listening to
                music, and enjoying mate and wine. Last year I launched{" "}
                <a
                  href="https://www.winery-hotels.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Winery-Hotels.com
                </a>{" "}
                — my own project in the wine tourism niche. Recently I&apos;ve also
                gotten into vibe coding as a hobby.
              </p>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-2 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-full text-xs font-medium border border-border text-muted hover:text-foreground hover:border-muted transition-colors"
                  data-cursor-hover
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right card */}
          <div className="bg-bg-card border border-border rounded-card p-7 md:p-10 sr">
            <h3 className="font-display font-bold text-lg text-foreground mb-6">
              Interests & Vibes
            </h3>

            <div className="flex flex-wrap gap-2 mb-8">
              {interests.map((item) => (
                <span
                  key={item.label}
                  className="px-3 py-2 rounded-full text-xs font-medium border border-border text-muted bg-bg hover:bg-bg-card-hover transition-colors"
                >
                  {item.emoji} {item.label}
                </span>
              ))}
            </div>

            {/* Languages */}
            <div className="border-t border-border pt-6">
              <h4 className="font-mono text-xs uppercase tracking-widest text-muted mb-4">
                Languages
              </h4>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">{"\uD83C\uDDF7\uD83C\uDDFA"}</span>
                  <span className="text-foreground">Russian</span>
                  <span className="text-muted text-xs">(Native)</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <span className="text-base">{"\uD83C\uDDEC\uD83C\uDDE7"}</span>
                  <span className="text-foreground">English</span>
                  <span className="text-muted text-xs">(B2+)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
