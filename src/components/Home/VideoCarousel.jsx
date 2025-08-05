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
        <div className="video-carousel">
            {/* Custom Navigation Buttons */}
            <div className="swiper-button-prev-custom">

                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_13)">
                        <path d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z" fill="#1E60DB" />
                        <path d="M33.5834 26.0001H18.4167M18.4167 26.0001L26 18.4167M18.4167 26.0001L26 33.5834" stroke="white" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_13">
                            <rect width="52" height="52" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


            </div>

            <div className="swiper-button-next-custom">

                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_2_13)">
                        <path d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z" fill="#1E60DB" />
                        <path d="M33.5834 26.0001H18.4167M18.4167 26.0001L26 18.4167M18.4167 26.0001L26 33.5834" stroke="white" stroke-width="2.16667" stroke-linecap="round" stroke-linejoin="round" />
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
                        <div className="video-card">
                            <div
                                className="video-container"
                                onClick={() => togglePlay(video.id)}
                            >
                                <video
                                    ref={(el) => (videoRefs.current[video.id] = el)}
                                    src={video.src}
                                    className="object-cover"
                                    loop
                                />
                                <div className="video-overlay">
                                    {playingId === video.id ? (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="24" fill="white" />
                                            <rect x="17" y="16" width="4" height="16" fill="black" rx="1" />
                                            <rect x="27" y="16" width="4" height="16" fill="black" rx="1" />
                                        </svg>
                                    ) : (
                                        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="24" cy="24" r="24" fill="white" />
                                            <path d="M20 16L32 24L20 32V16Z" fill="black" />
                                        </svg>
                                    )}
                                </div>
                            </div>
                            <div className="video-info ">
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
