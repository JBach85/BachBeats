import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Producer / Mixer Blog | BachBeats",
  description: "Technical production tips, mixing techniques, and studio workflows.",
};

export default function ProducerMixerBlogPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl font-black mb-4">
            Producer / Mixer Blog
          </h1>
          <p className="text-text-secondary text-lg">
            Technical production tips and studio workflows
          </p>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-20 text-center">
        <div className="bg-bg-card border border-border rounded-xl p-12">
          <p className="text-text-muted text-lg mb-4">New articles coming soon!</p>
          <Link
            href="/blog"
            className="text-accent-purple text-sm font-semibold hover:underline"
          >
            ← Back to Blog
          </Link>
        </div>
      </section>
    </div>
  );
}
