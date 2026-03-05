import Link from "next/link";
import BeatStarsPlayer from "@/components/BeatStarsPlayer";

const genres = [
  {
    title: "Pop Beats",
    href: "/pop-beats",
    description: "Radio-ready pop instrumentals for singers & songwriters",
    gradient: "from-pink-500/20 to-purple-500/20",
  },
  {
    title: "R&B Beats",
    href: "/rnb-beats",
    description: "Smooth R&B vibes from old-school to modern trap R&B",
    gradient: "from-blue-500/20 to-cyan-500/20",
  },
  {
    title: "Rap Beats",
    href: "/rapbeats",
    description: "Hard-hitting hip-hop instrumentals for MCs",
    gradient: "from-red-500/20 to-orange-500/20",
  },
  {
    title: "Country Beats",
    href: "/country-instrumentals",
    description: "Authentic country with real guitars, banjos & mandolins",
    gradient: "from-amber-500/20 to-yellow-500/20",
  },
  {
    title: "Beats with Hooks",
    href: "/beats-with-hooks",
    description: "Ready-made beats with vocal hooks included",
    gradient: "from-emerald-500/20 to-teal-500/20",
  },
  {
    title: "Rock Beats",
    href: "/rock-beats",
    description: "Rock instrumentals from alternative to hard rock",
    gradient: "from-slate-500/20 to-zinc-500/20",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/15 via-bg-primary to-accent-cyan/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-32 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight mb-6">
            BUY BEATS{" "}
            <span className="gradient-text">ONLINE</span>{" "}
            TODAY
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto mb-10">
            Premium Quality Beats for Artists &amp; Content Creators. Pop, R&amp;B,
            Rap, Country &amp; more — with instant delivery and licensing.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#beatstore"
              className="px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-white font-bold text-base glow-purple transition-all hover:scale-105"
            >
              Browse Beat Store
            </a>
            <Link
              href="/purchasingoptions"
              className="px-8 py-4 border border-border rounded-full text-text-secondary font-bold text-base hover:border-text-muted hover:text-white transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Beat Store Player */}
      <section id="beatstore" className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center mb-3">
          Beat Store
        </h2>
        <p className="text-text-secondary text-center mb-10 max-w-xl mx-auto">
          Preview, purchase, and download beats instantly. All licenses include
          instant delivery.
        </p>
        <BeatStarsPlayer storeId="33309" />
      </section>

      {/* Genre Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center mb-3">
          Browse by Genre
        </h2>
        <p className="text-text-secondary text-center mb-10">
          Find the perfect sound for your next project
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {genres.map((genre) => (
            <Link
              key={genre.href}
              href={genre.href}
              className="group relative bg-bg-card border border-border rounded-xl p-6 transition-all duration-300 hover:border-border-hover hover:bg-bg-card-hover hover:-translate-y-1 hover:shadow-xl hover:shadow-accent-purple/5"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${genre.gradient} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <h3 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2 group-hover:text-white transition-colors">
                  {genre.title}
                </h3>
                <p className="text-text-secondary text-sm">
                  {genre.description}
                </p>
                <div className="mt-4 flex items-center gap-2 text-accent-purple text-sm font-semibold">
                  Browse
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="bg-bg-secondary border-y border-border py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-center mb-10">
            What Artists Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                quote:
                  "These beats are absolutely fire! The quality is professional and the customer service is top-notch.",
                author: "Mike J., Hip-Hop Artist",
              },
              {
                quote:
                  "BachBeats helped me take my music to the next level. The production quality is unmatched.",
                author: "Sarah W., Pop Singer",
              },
              {
                quote:
                  "I found my sound. The R&B beats are exactly what I was looking for to complete my project.",
                author: "David L., R&B Artist",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="bg-bg-card border border-border rounded-xl p-6 hover:border-border-hover transition-colors"
              >
                <svg className="w-6 h-6 text-accent-purple mb-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151C7.563 6.068 6 8.789 6 11h4v10H0z" />
                </svg>
                <p className="text-text-secondary text-sm italic mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="text-white text-sm font-semibold">{t.author}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/testimonials"
              className="text-accent-purple text-sm font-semibold hover:underline"
            >
              View All Testimonials →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold mb-4">
            Ready to Start Creating?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Contact us for custom beat production and licensing inquiries
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-full text-white font-bold glow-purple hover:scale-105 transition-all"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
