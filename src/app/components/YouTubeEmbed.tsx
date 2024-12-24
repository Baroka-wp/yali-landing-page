interface YouTubeEmbedProps {
  videoId: string;
  className?: string;
}

export default function YouTubeEmbed({ videoId, className = "" }: YouTubeEmbedProps) {
  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: "56.25%" }}>
      <iframe
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&rel=0`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
