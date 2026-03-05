"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#beatstore", label: "Beat Store" },
  { href: "/purchasingoptions", label: "Purchasing Options" },
  { href: "/bundle-deals", label: "Bundle Deals" },
  { href: "/contact", label: "Contact" },
  { href: "/faq", label: "FAQ" },
];

const genreLinks = [
  { href: "/pop-beats", label: "Pop" },
  { href: "/rnb-beats", label: "R&B" },
  { href: "/rapbeats", label: "Rap" },
  { href: "/country-instrumentals", label: "Country" },
  { href: "/beats-with-hooks", label: "Hooks" },
  { href: "/rock-beats", label: "Rock" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [genreOpen, setGenreOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-gradient-to-br from-accent-purple to-accent-cyan rounded-lg flex items-center justify-center font-[family-name:var(--font-heading)] font-black text-sm text-white transition-transform group-hover:scale-110">
              BB
            </div>
            <span className="font-[family-name:var(--font-heading)] font-bold text-xl text-text-primary hidden sm:block">
              BachBeats
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Genre Dropdown */}
            <div className="relative">
              <button
                onClick={() => setGenreOpen(!genreOpen)}
                onBlur={() => setTimeout(() => setGenreOpen(false), 150)}
                className="px-3 py-2 rounded-lg text-sm font-medium text-text-secondary hover:text-white hover:bg-white/5 transition-colors flex items-center gap-1"
              >
                Genres
                <svg className={`w-4 h-4 transition-transform ${genreOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {genreOpen && (
                <div className="absolute top-full right-0 mt-1 w-44 bg-bg-secondary border border-border rounded-xl shadow-2xl overflow-hidden">
                  {genreLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="block px-4 py-2.5 text-sm text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                      onClick={() => setGenreOpen(false)}
                    >
                      {link.label} Beats
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 top-16 z-40 transition-all duration-300 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-bg-secondary border-l border-border p-6 transition-transform duration-300 overflow-y-auto ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  pathname === link.href
                    ? "text-white bg-white/10"
                    : "text-text-secondary hover:text-white hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="px-4 text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
              Genres
            </p>
            <div className="space-y-1">
              {genreLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 rounded-lg text-base text-text-secondary hover:text-white hover:bg-white/5 transition-colors"
                >
                  {link.label} Beats
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
