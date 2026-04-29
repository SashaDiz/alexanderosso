import Image from "next/image";

const muluJsonLd = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Mulu — Digital Detox Journal",
  operatingSystem: "iOS 17.0+",
  applicationCategory: "HealthApplication",
  description:
    "Turn doomscrolling into daily reflection. Block distracting apps until you journal. Gentle digital detox in 2 minutes a day.",
  downloadUrl:
    "https://apps.apple.com/us/app/mulu-digital-detox-journal/id6760852618",
  installUrl:
    "https://apps.apple.com/us/app/mulu-digital-detox-journal/id6760852618",
  url: "https://alexanderosso.com/mulu",
  image: "https://alexanderosso.com/mulu/icon.png",
  creator: {
    "@type": "Person",
    name: "Aleksandr Borisov",
    url: "https://alexanderosso.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
  },
};

export default function MuluPage() {
  return (
    <main className="flex-1 flex items-center justify-center px-5 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(muluJsonLd) }}
      />
      <div className="glass-strong rounded-card p-7 md:p-10 max-w-[420px] w-full text-center">
        <div className="w-16 h-16 rounded-2xl overflow-hidden mx-auto mb-5">
          <Image
            src="/mulu/icon.png"
            alt="Mulu app icon — digital detox journal"
            width={64}
            height={64}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="font-display font-medium text-xl text-foreground mb-2 tracking-tight">
          Mulu
        </h1>
        <p className="text-xs text-muted leading-relaxed mb-6 max-w-[36ch] mx-auto">
          Digital detox journal. Block distracting apps until you reflect for 2
          minutes a day.
        </p>

        <a
          href="https://apps.apple.com/us/app/mulu-digital-detox-journal/id6760852618"
          target="_blank"
          rel="noopener noreferrer"
          className="glass-button-dark inline-flex items-center gap-2 text-xs font-medium px-4 py-2.5 rounded-full"
          aria-label="Download Mulu on the App Store"
        >
          <svg width="12" height="14" viewBox="0 0 20 24" fill="currentColor">
            <path d="M16.52 12.46c-.03-2.87 2.35-4.25 2.46-4.32-1.34-1.96-3.42-2.23-4.17-2.26-1.77-.18-3.46 1.04-4.36 1.04-.9 0-2.29-1.02-3.77-.99-1.94.03-3.73 1.13-4.73 2.87-2.02 3.5-.52 8.68 1.45 11.52.96 1.39 2.11 2.95 3.62 2.89 1.45-.06 2-.94 3.75-.94s2.25.94 3.78.91c1.56-.03 2.55-1.42 3.5-2.81 1.1-1.61 1.56-3.17 1.58-3.25-.03-.01-3.04-1.17-3.07-4.62zM13.67 3.88C14.47 2.91 15.01 1.58 14.87.22c-1.15.05-2.55.77-3.37 1.73-.74.85-1.38 2.22-1.21 3.53 1.28.1 2.59-.65 3.38-1.6z" />
          </svg>
          Download on the App Store
        </a>
      </div>
    </main>
  );
}
