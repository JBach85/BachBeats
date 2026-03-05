import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "Pop Beats For Sale | BachBeats",
  description:
    "Top quality pop instrumentals for singers, songwriters and content creators. Buy pop beats online with instant delivery.",
};

export default function PopBeatsPage() {
  return (
    <GenrePage
      title="Pop Beats"
      description="Top Quality Pop Instrumentals For Singers, Songwriters and Content Creators"
      storeId="34495"
      youtubeId="rHtBPM-dde4"
      artistReferences="Styles inspired by today's top pop artists — radio-ready production with instant delivery."
      testimonial={{
        quote:
          "These beats are absolutely fire! The quality is professional and the customer service is top-notch.",
        author: "Jason D.",
      }}
    />
  );
}
