import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | BachBeats",
  description:
    "Watch testimonials from real fans and customers of BachBeats instrumentals.",
};

const videos = [
  "rHtBPM-dde4",
  "ZyIt2S9u1Hc",
  "xkHnPC2SarA",
  "vY21tQxfbCs",
  "pe7kuPiJ8iA",
  "ckOMcTpurNs",
  "ULYHLJh19eE",
  "bAd_D3_-82Y",
];

export default function TestimonialsPage() {
  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Testimonials
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            Watch testimonials from real fans &amp; customers
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {videos.map((id) => (
            <div
              key={id}
              className="relative aspect-video rounded-xl overflow-hidden border border-border hover:border-border-hover transition-colors"
            >
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                className="absolute inset-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Customer Testimonial"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
