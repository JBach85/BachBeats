import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "Rap Beats For Sale | BachBeats",
  description:
    "Hard-hitting rap instrumentals and hip-hop beats for sale online. Instant download and licensing.",
};

export default function RapBeatsPage() {
  return (
    <GenrePage
      title="Rap Instrumentals"
      description="Hard-Hitting Rap & Hip-Hop Instrumentals For MCs and Content Creators"
      storeId="34504"
      artistReferences="From boom-bap to modern trap — professional rap beats with instant delivery and licensing."
    />
  );
}
