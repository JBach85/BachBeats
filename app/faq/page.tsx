"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

const faqs = [
  {
    q: "Do you make custom beats?",
    a: "BachBeats doesn't create custom tracks, but we consider style requests via message and may upload new beats based on suggestions. Send us a message through the contact page with your ideas!",
  },
  {
    q: "Do you offer beat holds or payment plans?",
    a: "Yes! A 50% deposit holds a beat for up to 60 days. Monthly financing spreads payments over 3-12 months, though the beat remains available for other buyers. Unpaid balances result in forfeited deposits.",
  },
  {
    q: "Can I see a sample contract?",
    a: 'License agreements are viewable on our Purchasing Options page under "Licensing Info." Each tier has its own contract terms.',
  },
  {
    q: "What lease options do you have?",
    a: "We offer four tiers: Basic Lease ($39.99), Premium Lease ($99.99), Unlimited No TV ($199.99), and The Freedom Lease ($299.99). Check our Purchasing Options page for full details.",
  },
  {
    q: "Can you make edits to a beat?",
    a: "Beat edits cost $50 per beat for arrangement or instrument removal. We do not add any extra elements, only removing or rearranging what is already there. Premium and Unlimited licenses include stem files so you can edit yourself.",
  },
  {
    q: "Do you have package deals?",
    a: 'Yes! Bulk discounts activate automatically when you add 3+ beats to cart. Deals range from "Buy 3 Get 1 Free" up to "Buy 10 Get 5 Free." Check our Bundle Deals page for full details.',
  },
  {
    q: "Can I upgrade my license?",
    a: "Absolutely! You can upgrade your license by paying the price difference plus a $20 processing fee. Email sales@bachbeats.com for upgrade requests.",
  },
  {
    q: "What is your return policy?",
    a: "All purchases are non-refundable due to instant digital delivery and immediate license rights granted upon purchase.",
  },
];

/**
 * Search match: each space-separated token must appear as a contiguous
 * substring somewhere in the target. "pay plan" matches "payment plans",
 * but "adf" won't match anything because no word contains "adf".
 */
function searchMatch(query: string, target: string): boolean {
  const lowerTarget = target.toLowerCase();
  const tokens = query.toLowerCase().trim().split(/\s+/);
  return tokens.every((token) => lowerTarget.includes(token));
}

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div className="border border-border rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
      >
        <span className="font-semibold text-base pr-4">{q}</span>
        <svg
          className={`w-5 h-5 text-text-muted shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${open ? "max-h-96" : "max-h-0"}`}
      >
        <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return faqs;
    return faqs.filter(
      (faq) =>
        searchMatch(search, faq.q) || searchMatch(search, faq.a)
    );
  }, [search]);

  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            FAQ
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            Frequently asked questions about beats, licensing, and more.
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {/* Search */}
        <div className="relative mb-8">
          <svg
            className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search FAQs..."
            className="w-full pl-12 pr-4 py-4 bg-bg-card border border-border rounded-xl text-white placeholder-text-muted focus:outline-none focus:border-accent-purple transition-colors text-base"
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        {/* Results */}
        {filtered.length > 0 ? (
          <div className="space-y-3">
            {filtered.map((faq) => (
              <FAQItem
                key={faq.q}
                q={faq.q}
                a={faq.a}
                defaultOpen={search.trim().length > 0}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-text-muted text-lg mb-2">No results found</p>
            <p className="text-text-muted text-sm">
              Try different keywords or{" "}
              <Link href="/contact" className="text-accent-purple hover:underline">
                contact us
              </Link>{" "}
              directly.
            </p>
          </div>
        )}

        <div className="mt-12 text-center">
          <p className="text-text-secondary mb-4">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
