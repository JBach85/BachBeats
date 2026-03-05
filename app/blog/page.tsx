import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | BachBeats",
  description:
    "BachBeats Blog — Musician motivation and tips for music creators.",
};

const categories = [
  {
    title: "General Blog",
    href: "/blog/general-blog",
    description: "Music industry insights, beat making tips, and creator motivation",
  },
  {
    title: "Producer / Mixer Blog",
    href: "/blog/producermixer-blog",
    description: "Technical production tips, mixing techniques, and studio workflows",
  },
];

export default function BlogPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Blog
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            Musician Motivation &amp; Tips For Music Creators
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.href}
              href={cat.href}
              className="group bg-bg-card border border-border rounded-xl p-6 transition-all hover:border-border-hover hover:-translate-y-1"
            >
              <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2 group-hover:text-accent-purple transition-colors">
                {cat.title}
              </h2>
              <p className="text-text-secondary text-sm">{cat.description}</p>
              <p className="mt-4 text-accent-purple text-sm font-semibold flex items-center gap-1">
                Read articles
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
