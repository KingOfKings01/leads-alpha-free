// VideoMarqueeSection.jsx
import VideoMarquee from "./VideoMarquee";

export default function VideoMarqueeSection({ reels, direction = "up", height = "420px" }) {
  return (
    <section className="pb-[10vh]">
      <VideoMarquee
        reels={reels}
        direction={direction}
        height={height}
        speedSeconds={22}
        cardSize="md"
        fadeEdges={false}
        background="bg-white"
      />
    </section>
  );
}
