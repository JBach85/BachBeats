import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "Rock Beats For Sale | BachBeats",
  description:
    "Rock instrumentals for sale online. From alternative to hard rock, buy rock beats with instant delivery.",
};

export default function RockBeatsPage() {
  return (
    <GenrePage
      title="Rock Beats"
      description="Rock Instrumentals From Alternative to Hard Rock"
      storeId="104232"
      artistReferences="Real guitar-driven rock production. Alternative, indie, hard rock and everything in between."
    />
  );
}
