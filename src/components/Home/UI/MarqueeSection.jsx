import Marquee from "./Marquee";

export default function MarqueeSection({ details = [], isImage = false, direction = "left", height = "420px", }) {
  return (
    <section className="pb-[10vh]">
      <Marquee
        details={details}
        isImage={isImage}
        direction={direction}
        height={height}
        fadeEdges={false}
      />
    </section>
  );
}



