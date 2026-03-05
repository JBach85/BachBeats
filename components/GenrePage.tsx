import Link from "next/link";
import BeatStarsPlayer from "./BeatStarsPlayer";

interface GenrePageProps {
  title: string;
  description: string;
  storeId: string;
  youtubeId?: string;
  testimonial?: {
    quote: string;
    author: string;
  };
  artistReferences?: string;
}

export default function GenrePage({
  title,
  description,
  storeId,
  youtubeId,
  testimonial,
  artistReferences,
}: GenrePageProps) {
  return (
    <div>
      {/* Genre Hero */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            {title}
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-6">
            {description}
          </p>
          {artistReferences && (
            <p className="text-text-muted text-sm max-w-xl mx-auto">
              {artistReferences}
            </p>
          )}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link
              href="/purchasingoptions"
              className="px-6 py-3 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-white font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Pricing
            </Link>
            <Link
              href="/bundle-deals"
              className="px-6 py-3 border border-border rounded-full text-text-secondary font-semibold text-sm hover:border-text-muted hover:text-white transition-colors"
            >
              Bundle Deals
            </Link>
          </div>
        </div>
      </section>

      {/* BeatStars Player */}
      <section id="beatstore" className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl font-bold text-center mb-8">
          Browse &amp; Purchase
        </h2>
        <BeatStarsPlayer storeId={storeId} />
      </section>

      {/* YouTube Preview */}
      {youtubeId && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 pb-12">
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-border">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title={`${title} Preview`}
            />
          </div>
        </section>
      )}

      {/* Testimonial */}
      {testimonial && (
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-12">
          <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
            <svg className="w-8 h-8 text-accent-purple mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
            </svg>
            <p className="text-text-secondary text-lg italic mb-4">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-white font-semibold">{testimonial.author}</p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 text-center">
        <h2 className="font-[family-name:var(--font-heading)] text-2xl sm:text-3xl font-bold mb-4">
          Ready to Create?
        </h2>
        <p className="text-text-secondary mb-6">
          Check out our other genres or get in touch for custom work.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            href="/#beatstore"
            className="px-6 py-3 bg-white/10 border border-border rounded-full text-white font-semibold text-sm hover:bg-white/15 transition-colors"
          >
            All Beats
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 border border-border rounded-full text-text-secondary font-semibold text-sm hover:border-text-muted hover:text-white transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>
    </div>
  );
}
