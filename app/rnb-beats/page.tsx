import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "R&B Beats For Sale | BachBeats",
  description:
    "Royalty free R&B instrumentals for content & music creators. Old school R&B, R&B trap, pop R&B and more.",
};

export default function RnbBeatsPage() {
  return (
    <GenrePage
      title="R&B Instrumentals"
      description="Royalty Free R&B Instrumentals For Content & Music Creators"
      storeId="33726"
      youtubeId="bAd_D3_-82Y"
      artistReferences="Styles influenced by Kehlani, Ella Mai, Bryson Tiller, Chris Brown, Trey Songz and more. Old school R&B, R&B trap, pop R&B — you've come to the right place."
      testimonial={{
        quote: "I found my sound. The R&B beats are exactly what I was looking for.",
        author: "R&B Artist",
      }}
    />
  );
}
