"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // For now, open mailto link. Can be replaced with API route later.
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(formData.message);
    window.location.href = `mailto:sales@bachbeats.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <div>
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 via-bg-primary to-accent-cyan/5" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-black mb-4">
            Contact
          </h1>
          <p className="text-text-secondary text-lg sm:text-xl max-w-2xl mx-auto">
            Have a question? Check our{" "}
            <Link href="/faq" className="text-accent-purple hover:underline">
              FAQ
            </Link>{" "}
            first, or send us a message below.
          </p>
        </div>
      </section>

      <section className="max-w-xl mx-auto px-4 sm:px-6 pb-20">
        {submitted ? (
          <div className="bg-bg-card border border-border rounded-xl p-8 text-center">
            <svg className="w-12 h-12 text-accent-cyan mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h2 className="font-[family-name:var(--font-heading)] text-xl font-bold mb-2">
              Message Sent!
            </h2>
            <p className="text-text-secondary text-sm">
              We&apos;ll get back to you as soon as possible.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-purple transition-colors"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-purple transition-colors"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 bg-bg-card border border-border rounded-lg text-white placeholder-text-muted focus:outline-none focus:border-accent-purple transition-colors resize-none"
                placeholder="Tell us what you need..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-accent-purple to-accent-cyan rounded-lg text-white font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </button>
          </form>
        )}
      </section>
    </div>
  );
}
