import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bundle Deals & Discounts | BachBeats",
  description:
    "Save big with BachBeats bundle deals. Buy 3 Get 1 Free up to Buy 10 Get 5 Free. Discounts applied automatically.",
};

const deals = [
  { buy: 3, free: 1 },
  { buy: 4, free: 1 },
  { buy: 5, free: 1 },
  { buy: 6, free: 2 },
  { buy: 7, free: 2 },
  { buy: 8, free: 2 },
  { buy: 9, free: 3 },
  { buy: 10, free: 5 },
];

export default function BundleDealsPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Bundle Deals
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            The more you buy, the more you save. Discounts are applied
            automatically at checkout.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {deals.map((deal) => (
            <div
              key={`${deal.buy}-${deal.free}`}
              className={`bg-bg-card border rounded-xl p-6 text-center transition-all hover:-translate-y-1 hover:shadow-lg ${
                deal.buy === 10
                  ? "border-accent-purple/50 sm:col-span-2"
                  : "border-border hover:border-border-hover"
              }`}
            >
              <p className="font-[family-name:var(--font-heading)] text-3xl font-black mb-1">
                Buy {deal.buy}
              </p>
              <p className="text-lg">
                Get{" "}
                <span className="gradient-text font-bold text-2xl">
                  {deal.free} FREE
                </span>
              </p>
              {deal.buy === 10 && (
                <p className="text-accent-cyan text-sm font-semibold mt-2">
                  Best Value!
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-bg-card border border-border rounded-xl p-6 text-center">
          <p className="text-text-secondary text-sm mb-4">
            Add enough beats to your cart and the discount will be automatically
            applied. No coupon code needed!
          </p>
          <Link
            href="/#beatstore"
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Start Shopping
          </Link>
        </div>
      </section>
    </div>
  );
}
