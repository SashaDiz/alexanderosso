"use client";

import Image from "next/image";
import { appshiftApps, type AppProject } from "@/data/projects";

function AppIcon({ app }: { app: AppProject }) {
  return (
    <div
      className="relative w-9 h-9 rounded-lg overflow-hidden flex items-center justify-center shrink-0 ring-1 ring-foreground/10"
      style={{ backgroundColor: `${app.accentColor}1A` }}
    >
      {app.icon ? (
        <Image
          src={app.icon}
          alt={app.name}
          width={36}
          height={36}
          className="w-6 h-6 rounded-md"
        />
      ) : (
        <span
          className="font-display font-medium text-sm"
          style={{ color: app.accentColor }}
        >
          {app.name.charAt(0)}
        </span>
      )}
    </div>
  );
}

function AppCard({ app }: { app: AppProject }) {
  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col gap-2 p-4 rounded-xl border border-border bg-bg hover:border-foreground/20 hover:bg-bg-card-hover/50 transition-colors"
      data-cursor-hover
    >
      <AppIcon app={app} />
      <h4 className="font-display font-medium text-sm text-foreground group-hover:text-accent transition-colors">
        {app.name}
      </h4>
      <p className="text-[0.6875rem] text-muted leading-snug">
        {app.tagline}
      </p>
    </a>
  );
}

export default function AppshiftApps() {
  return (
    <section id="apps">
      <div className="max-w-container mx-auto px-5">
        <div className="glass-strong rounded-card p-6 md:p-8 sr">
          <div className="flex items-start justify-between gap-4 mb-5">
            <div>
              <h2 className="font-display font-medium text-base text-foreground">
                AppShift apps
              </h2>
              <p className="text-xs text-muted leading-relaxed mt-1 max-w-[60ch]">
                Small iPhone apps shipped under my{" "}
                <a
                  href="https://appshift.xyz/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground hover:text-accent transition-colors underline underline-offset-2"
                  data-cursor-hover
                >
                  AppShift
                </a>{" "}
                studio — designed, coded, and launched solo.
              </p>
            </div>
            <span className="font-mono text-[0.625rem] uppercase tracking-wider text-muted shrink-0">
              {appshiftApps.length} apps
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {appshiftApps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
