import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import video1 from "../../assets/section-6/videos/video1.mov";
import video2 from "../../assets/section-6/videos/video2.mov";
import video3 from "../../assets/section-6/videos/video3.mov";
import video4 from "../../assets/section-6/videos/video4.mov";
import video5 from "../../assets/section-6/videos/video5.mp4";
import video6 from "../../assets/section-6/videos/video6.mov";
import video7 from "../../assets/section-6/videos/video7.mov";
import video8 from "../../assets/section-6/videos/video8.mov";
import video9 from "../../assets/section-6/videos/video9.mp4";

const dummyVideos = [
  { id: 1, name: "Tonia", rating: 5, src: video1 },
  { id: 2, name: "Samuel", rating: 5, src: video2 },
  { id: 3, name: "Juan", rating: 5, src: video3 },
  { id: 4, name: "Regan", rating: 5, src: video4 },
  { id: 5, name: "Regan", rating: 4, src: video5 },
  { id: 6, name: "Priya", rating: 4, src: video6 },
  { id: 7, name: "Ava", rating: 5, src: video7 },
  { id: 8, name: "Lily", rating: 4, src: video8 },
  { id: 9, name: "Maya", rating: 5, src: video9 },
];

export default function VideoCarousel() {
  const [playingId, setPlayingId] = useState(null);
  const videoRefs = useRef({});

  const togglePlay = (id) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (video.paused) {
      video.play();
      setPlayingId(id);
    } else {
      video.pause();
      setPlayingId(null);
    }
  };

  return (
    <div className="relative w-full px-5 py-10">
      {/* Custom Navigation Buttons */}
      <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-30 cursor-pointer">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_2_13)">
            <path
              d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
              fill="#1E60DB"
            />
            <path
              d="M33.5834 26.0001H18.4167M18.4167 26.0001L26 18.4167M18.4167 26.0001L26 33.5834"
              stroke="white"
              strokeWidth="2.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_13">
              <rect width="52" height="52" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <div className="swiper-button-next-custom absolute right-0 top-1/2  z-30 cursor-pointer rotate-[180]">
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180"
        >
          <g clipPath="url(#clip0_2_13)">
            <path
              d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z"
              fill="#1E60DB"
            />
            <path
              d="M33.5834 26.0001H18.4167M18.4167 26.0001L26 18.4167M18.4167 26.0001L26 33.5834"
              stroke="white"
              strokeWidth="2.16667"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_13">
              <rect width="52" height="52" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </div>

      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1.2}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {dummyVideos.map((video) => (
          <SwiperSlide key={video.id}>
            <div className="relative rounded-[12px] overflow-hidden bg-white">
              <div
                className="relative w-full h-full cursor-pointer"
                onClick={() => togglePlay(video.id)}
              >
                <video
                  ref={(el) => (videoRefs.current[video.id] = el)}
                  src={video.src}
                  className="w-full h-auto block object-cover rounded-[12px]"
                  loop
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent p-2.5 z-20 pointer-events-none">
                  {playingId === video.id ? (
                    <svg
                      className="w-[50px] h-[50px] drop-shadow-md"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="white" />
                      <rect x="17" y="16" width="4" height="16" fill="black" rx="1" />
                      <rect x="27" y="16" width="4" height="16" fill="black" rx="1" />
                    </svg>
                  ) : (
                    <svg
                      className="w-[50px] h-[50px] drop-shadow-md"
                      viewBox="0 0 48 48"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="24" cy="24" r="24" fill="white" />
                      <path d="M20 16L32 24L20 32V16Z" fill="black" />
                    </svg>
                  )}
                </div>
              </div>
              <div className="flex justify-between items-center px-[15px] py-[10px] text-sm bg-[#f9f9f9] border-t border-[#eee] max-md:flex-col max-md:gap-1 max-md:text-center">
                <p>{video.name}</p>
                <p>{video.rating} ⭐</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
