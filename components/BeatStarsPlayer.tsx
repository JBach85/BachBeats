interface BeatStarsPlayerProps {
  storeId: string;
}

export default function BeatStarsPlayer({ storeId }: BeatStarsPlayerProps) {
  return (
    <div className="beatstars-container">
      <iframe
        src={`https://player.beatstars.com/?storeId=${storeId}`}
        width="100%"
        height="800"
        style={{ maxWidth: 800, border: "none" }}
        allow="autoplay"
        title="BeatStars Player"
      />
    </div>
  );
}
