import type { Metadata } from "next";
import GenrePage from "@/components/GenrePage";

export const metadata: Metadata = {
  title: "Beats with Hooks For Sale | BachBeats",
  description:
    "Buy beats with vocal hooks included. Ready-made instrumentals with choruses for instant songwriting inspiration.",
};

export default function BeatsWithHooksPage() {
  return (
    <GenrePage
      title="Beats with Hooks"
      description="Ready-Made Beats with Vocal Hooks Included — Instant Songwriting Inspiration"
      storeId="33363"
      artistReferences="Skip the writer's block. These beats come with professional vocal hooks already recorded, giving you a head start on your next hit."
    />
  );
}
