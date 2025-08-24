import BrandLogos from "../assets/brands.svg";

import { useEffect, useState } from "react";
import { fetchReels } from "../apis/reels";

import Testimonial from "../components/Home/Testimonial";
import ServicesGrid from "../components/Home/ServicesGrid";
import Industries from "../components/Home/Industries";
import VideoCarousel from "../components/Home/VideoCarousel";
import Connect from "../components/Home/Connect";
import Pricing from "../components/Home/Pricing";
import ActionButton from "../components/ActionButton";
import HeroSection from "../components/Home/UI/HeroSection";
import MarqueeSection from "../components/Home/UI/MarqueeSection";
import ServicesSection from "../components/Home/ServicesSection";

export default function Home() {

  const [reels, setReels] = useState([]);

  useEffect(() => {
    const loadReels = async () => {
      try {
        const data = await fetchReels();
        setReels(data);
      } catch (error) {
        console.error("Error loading reels:", error.message);
      }
    };
    loadReels();
  }, []);

  return (
    <>
      <div className="home">

      {/* s-1 Hero Section */}
        <section>
          <HeroSection />
        </section>

        {/* s-2 Marquee Section */}
        <section>
          <MarqueeSection details={reels} direction="left" />
        </section>

        {/* s-3 Testimonial Section */}
        <section>
          <Testimonial />
        </section>

        {/* s-4 Services Section */}
        <section>
          <ServicesSection />
        </section>

        {/* s-5 Services Grid Section */}
        <section id="s-5">
          <ServicesGrid />
        </section>

        <section id="s-6">
          <h1>
            UGC Videos For All <span className="mark">Industries</span>
          </h1>
          <Industries />
          <VideoCarousel />
        </section>

        <div id="s-7">
          <div className="head">
            <h1>Connect With <span className="mark">1000+<br />
              UGC Creators
            </span>
            </h1>
            <p>Access Creators who speak 2 or more languages to advertise your product and services in a
              language of your choice. From *English to Nyanja, to IsiZulu and more!</p>
          </div>
        </div>


        <section id="s-8">
          <Connect />
        </section>

        <section id="s-9">
          <h1>Pricing</h1>
          <Pricing />
        </section>

        <section id="s-10">
          <div className="part-1">
            <h2>Ready to 10x your <span className="mark">Video<br />
              Views?</span></h2>
            <p>Let’s turn your content into scroll-stopping videos that grow your audience and boost your
              engagement. Book a call and let’s bring your vision to life. </p>
            <ActionButton label="Get Started" />
          </div>
          <div className="part-2">
            <div className="left-videos"></div>
            <div className="right-videos"></div>
          </div>
        </section>

      </div>


    </>
  );
}

