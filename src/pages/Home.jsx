import CountrySelector from "../components/Home/CountrySelector";
import BrandLogos from "../assets/brands.svg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";
import { useEffect, useRef, useState } from "react";
import { fetchReels } from "../apis/reels";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import Testimonial from "../components/Home/Testimonial";
import ServicesGrid from "../components/Home/ServicesGrid";
import Industries from "../components/Home/Industries";


export default function Home() {
  const videoRefs = useRef([]);
  const [reels, setReels] = useState([]);
  const [playingStates, setPlayingStates] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    const newPlayingStates = [...playingStates];

    if (video.paused) {
      video.play();
      newPlayingStates[index] = true;
    } else {
      video.pause();
      newPlayingStates[index] = false;
    }

    setPlayingStates(newPlayingStates);
  };

  useEffect(() => {
    const loadReels = async () => {
      try {
        const data = await fetchReels();
        setReels(data);
        setPlayingStates(Array(data.length).fill(true));
      } catch (error) {
        console.error("Error loading reels:", error.message);
      }
    };

    loadReels();
  }, []);

  return (
    <>
      <div className="home">
        <section id="s-1">
          <CountrySelector />

          <div className="hero-content">
            <h1 className="hero-title">
              Connecting <span className="highlight">Brands</span>
              <img src={BrandLogos} alt="Brand Logos" className="brand-logos" />
              <span className="highlight">To UGC</span>
            </h1>

            <h1 className="hero-title">That Skyrockets Your Ads</h1>

            <p className="hero-description">
              Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
              crafted by genuine creators from around the globe
            </p>

            <div className="trust-container">
              <button className="get-started-btn">
                Get Started
                <svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.279785" width="40" height="40" rx="20" fill="#4C86F3" />
                  <path d="M16.1573 23.1248L24.4068 14.8752M24.4068 14.8752H16.1573M24.4068 14.8752V23.1248" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <div className="client-info">
                <div className="client-logos">
                  <img src={logo1} alt="logo1" />
                  <img src={logo2} alt="logo2" />
                  <img src={logo3} alt="logo3" />
                  <img src={logo4} alt="logo4" />
                </div>

                <div className="trusted-text">
                  <span> ★★★★★ </span>
                  <br />
                  Trusted by 40+ clients
                </div>
              </div>
            </div>
          </div>

        </section>


        <section id="s-2">
          <div className="video-marquee-wrapper">
            <div className="video-card">
              {reels?.length > 0 && reels.map((element) => (
                <>
                  <video
                    src={element.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                  />

                </>
              ))}
            </div>
          </div>
        </section>

        <section id="s-3">
          <h5 className="title">Editing that grows brand audiences</h5>
          <Testimonial />
        </section>

        <section id="s-4">
          <div className="box-1">
            <div className="small">
              <hr />
              <span>Why Choose Us</span>
            </div>
            <h2>
              What We Can <span>Do <br />
                For You</span>
            </h2>
          </div>
          <div className="box-2">
            <p>
              Stand out in the fast-paced world of short-form content. We create high-energy,
              engaging edits that keep viewers hooked and help you grow your audience.
            </p>
          </div>
        </section>


        <section id="s-5">
          <ServicesGrid />
        </section>

        <section id="s-6">
          <h1>
            UGC Videos For All <span className="mark">Industries</span>
          </h1>
          <Industries />
        </section>
      </div>


    </>
  );
}
