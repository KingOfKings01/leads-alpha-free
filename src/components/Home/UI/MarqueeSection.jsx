import Marquee from "./Marquee";

export default function MarqueeSection({ details = [], isImage = false, direction = "left", height = "", width="", cardHeight="", cardWidth="" }) {
  return (
    <section className="">
      <Marquee
        details={details}
        isImage={isImage}
        direction={direction}
        height={height}
        width={width}
        cardHeight={cardHeight}
        cardWidth={cardWidth}
        fadeEdges={false}
      />
    </section>
  );
}



