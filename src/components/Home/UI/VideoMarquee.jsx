import React from "react";
import VideoCard from "./VideoCard";

/**
 * VideoMarquee component
 * @param {Array} reels - list of video objects
 * @param {String} direction - "left" | "right" | "up" | "down"
 */
export default function VideoMarquee({ reels = [], direction = "left", fadeEdges = false, height }) {
  const isVertical = direction === "up" || direction === "down";

  return (
    <div className={`w-full overflow-hidden relative h-[${isVertical ? height : "auto"}]`}>
              {/* edge fades */}
      {!isVertical && fadeEdges && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10" />
        </>
      )}
      {isVertical && fadeEdges && (
        <>
          <div className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-white to-transparent z-10" />
        </>
      )}


      <div
        className={`
          flex
          ${isVertical ? "flex-col" : "flex-row"}
          gap-4
          w-max
          h-max
          ${getAnimationClass(direction)}
        `}
      >
        {reels.length > 0 &&
          reels.map((element, idx) => (
            <VideoCard
              key={idx}
              video={element.video}
              name={element.name}
              flag={element.flag}
              location={element.location}
            />
          ))}
      </div>
    </div>
  );
}

/** Helper: map direction to CSS animation */
function getAnimationClass(direction) {
  switch (direction) {
    case "right":
      return "animate-scrollRight";
    case "up":
      return "animate-scrollUp";
    case "down":
      return "animate-scrollDown";
    default:
      return "animate-scrollLeft"; // default
  }
}
