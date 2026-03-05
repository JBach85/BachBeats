import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Purchasing Options | BachBeats",
  description:
    "BachBeats licensing options. Basic Lease, Premium Lease, Unlimited leases with instant contract delivery.",
};

const tiers = [
  {
    name: "Basic Lease",
    subtitle: "MP3 / WAV",
    price: "$39.99",
    features: [
      "Untagged MP3 (320KB/s) or 24-bit WAV",
      "1 profitable use",
      "Up to 2,500 copy sales",
      "500,000 audio/video streams",
      "iTunes, Spotify & YouTube use",
      "Instant contract delivery",
    ],
    excluded: [
      "No radio play",
      "No YouTube monetization",
      "No TV / video game licensing",
    ],
    recommended: false,
  },
  {
    name: "Premium Lease",
    subtitle: "Tracked-Out Stems",
    price: "$99.99",
    features: [
      "Tracked-out 24-bit WAV stems",
      "1 profitable use",
      "Up to 10,000 copy sales",
      "2 million audio/video streams",
      "iTunes, Spotify & YouTube use",
      "Instant contract delivery",
    ],
    excluded: [
      "No radio play",
      "No YouTube monetization",
      "No TV / video game licensing",
    ],
    recommended: false,
  },
  {
    name: "Unlimited Lease",
    subtitle: "No TV",
    price: "$199.99",
    features: [
      "Tracked-out 24-bit WAV stems",
      "Unlimited profitable uses",
      "Unlimited copy sales",
      "Unlimited streaming rights",
      "Unlimited radio play",
      "YouTube monetization",
      "Instant contract delivery",
    ],
    excluded: ["No TV / video game licensing"],
    recommended: false,
  },
  {
    name: "The Freedom Lease",
    subtitle: "Unlimited + TV",
    price: "$299.99",
    features: [
      "Tracked-out 24-bit WAV stems",
      "Unlimited profitable uses",
      "Unlimited copy sales",
      "Unlimited streaming rights",
      "Unlimited radio play",
      "YouTube monetization",
      "TV & video game licensing",
      "Instant contract delivery",
    ],
    excluded: [],
    recommended: true,
  },
];

export default function PurchasingOptionsPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Purchasing Options
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            Choose the license that fits your needs. All purchases include instant
            delivery.
          </p>
        </div>
      </section>

      {/* Pricing Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-xl p-6 flex flex-col ${
                tier.recommended
                  ? "gradient-border"
                  : "bg-bg-card border border-border"
              }`}
            >
              {tier.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-xs font-bold text-white">
                  RECOMMENDED
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="font-[family-name:var(--font-heading)] text-lg font-bold">
                  {tier.name}
                </h3>
                <p className="text-text-muted text-sm">{tier.subtitle}</p>
                <p className="font-[family-name:var(--font-heading)] text-4xl font-black mt-3 gradient-text">
                  {tier.price}
                </p>
              </div>
              <ul className="space-y-3 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-accent-cyan mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-text-secondary">{f}</span>
                  </li>
                ))}
                {tier.excluded.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <svg className="w-4 h-4 text-red-500/60 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span className="text-text-muted">{f}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/#beatstore"
                className={`mt-6 block text-center py-3 rounded-lg font-semibold text-sm transition-all ${
                  tier.recommended
                    ? "bg-gradient-to-r from-accent-purple to-accent-cyan text-white glow-purple hover:opacity-90"
                    : "bg-white/10 text-white hover:bg-white/15"
                }`}
              >
                Browse Beats
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="bg-bg-secondary border-y border-border py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-center mb-8">
            Important Information
          </h2>
          <div className="space-y-4 text-text-secondary text-sm">
            <p>
              All lease options allow iTunes, Spotify, and YouTube distribution.
              Beats remain on the website for sale and are still owned by
              BachBeats under lease agreements.
            </p>
            <p>
              <strong className="text-white">License Upgrades:</strong> You can
              upgrade your license at any time by paying the price difference plus
              a $20 processing fee. Email{" "}
              <a href="mailto:sales@bachbeats.com" className="text-accent-purple hover:underline">
                sales@bachbeats.com
              </a>{" "}
              for upgrade requests.
            </p>
            <p>
              <strong className="text-white">Beat Modifications:</strong> Edits
              cost $50 per beat for arrangement or instrument removal.
              Premium/Unlimited licenses include stem files for self-editing.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
