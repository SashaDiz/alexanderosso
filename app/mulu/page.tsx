import Image from "next/image";

export default function MuluPage() {
  return (
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
      {/* App Icon */}
      <div className="w-28 h-28 rounded-[28px] overflow-hidden mb-6 shadow-lg shadow-black/30">
        <Image
          src="/mulu/icon.png"
          alt="Mulu app icon"
          width={112}
          height={112}
          className="w-full h-full object-cover"
        />
      </div>

      {/* App Name */}
      <h1 className="font-display font-bold text-4xl mb-1">Mulu</h1>
      <p className="text-muted text-sm mb-4">Digital Detox Journal</p>

      {/* Description */}
      <p className="text-muted text-lg max-w-sm leading-relaxed mb-8">
        Turn doomscrolling into daily reflection. Block distracting apps
        until you journal. Gentle digital detox in 2 minutes a day.
      </p>

      {/* App Store Button */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2.5 bg-foreground text-bg font-medium px-6 py-3 rounded-xl hover:opacity-90 transition-opacity"
      >
        <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor">
          <path d="M16.52 12.46c-.03-2.87 2.35-4.25 2.46-4.32-1.34-1.96-3.42-2.23-4.17-2.26-1.77-.18-3.46 1.04-4.36 1.04-.9 0-2.29-1.02-3.77-.99-1.94.03-3.73 1.13-4.73 2.87-2.02 3.5-.52 8.68 1.45 11.52.96 1.39 2.11 2.95 3.62 2.89 1.45-.06 2-.94 3.75-.94s2.25.94 3.78.91c1.56-.03 2.55-1.42 3.5-2.81 1.1-1.61 1.56-3.17 1.58-3.25-.03-.01-3.04-1.17-3.07-4.62zM13.67 3.88C14.47 2.91 15.01 1.58 14.87.22c-1.15.05-2.55.77-3.37 1.73-.74.85-1.38 2.22-1.21 3.53 1.28.1 2.59-.65 3.38-1.6z" />
        </svg>
        Download on the App Store
      </a>
    </main>
  );
}
