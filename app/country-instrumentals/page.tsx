import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "Country Beats For Sale | BachBeats",
  description:
    "Royalty free country instrumentals with real guitars, drums, banjos, mandolins and slide guitars. Buy country beats online.",
};

export default function CountryBeatsPage() {
  return (
    <GenrePage
      title="Country Instrumentals"
      description="Royalty Free Country Instrumentals & Beats For Content & Music Creators"
      storeId="138576"
      youtubeId="xkHnPC2SarA"
      artistReferences="Real live guitars, drums, banjos, mandolins, and slide guitars. Styles inspired by Sam Hunt, Morgan Wallen, Florida Georgia Line, Kane Brown, Dylan Scott, Luke Combs — country pop and country rock."
      testimonial={{
        quote:
          "This beat inspired me to write one of my favorite original songs. Helped me overcome writer's block!",
        author: "Country Artist",
      }}
    />
  );
}
