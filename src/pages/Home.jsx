import BrandLogos from "../assets/brands.svg";

import { useEffect, useState } from "react";
import { fetchReels } from "../apis/reels";

import HeroSection from "../components/Home/UI/HeroSection";
import MarqueeSection from "../components/Home/UI/MarqueeSection";
import Testimonial from "../components/Home/Testimonial";
import ServicesSection from "../components/Home/ServicesSection";
import ServicesGrid from "../components/Home/ServicesGrid";
import Industries from "../components/Home/Industries";
import VideoCarousel from "../components/Home/VideoCarousel";
import Connect from "../components/Home/Connect";
import Pricing from "../components/Home/Pricing";
import CTASection from "../components/Home/CTASection";

export default function Home() {

  const [reels, setReels] = useState([]);

  useEffect(() => {

    const loadReels = async () => {
      try {
        const data = await fetchReels();
        setReels(data);
        const urls = data.map(item => item.url);
        console.log(urls)
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
        <section className="pb-[50px]">
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
        <section>
          <ServicesGrid />
        </section>

        {/* s-6 Industries Section */}
        <section id="s-6">
          <div className="px-[10vw] py-[10vh] bg-[#fffcf0]">
            <h1 className="text-center font-semibold text-3xl mb-10 md:mb-5 md:text-4xl">
              UGC Videos For All <span className="mark">Industries</span>
            </h1>
            <Industries />
            <VideoCarousel />
          </div>
        </section>

        {/* s-7 Connect Section */}
        <section
          className="px-[7vw] py-[60px] bg-white"
        >
          <div className="flex justify-between items-center gap-10 flex-wrap">
            <h1 className="text-[40px] font-medium leading-[1.2] text-[#111] max-md:text-[28px]">
              Connect With{" "}
              <span className="text-[#1e60db]">
                1000+ <br /> UGC Creators
              </span>
            </h1>
            <p className="flex-1 text-[11px] font-light text-[#444] leading-[1.6] max-w-[500px] max-md:text-[13px] max-md:max-w-full">
              Access Creators who speak 2 or more languages to advertise your product and
              services in a language of your choice. From *English to Nyanja, to IsiZulu
              and more!
            </p>
          </div>
        </section>

        <section id="s-8">
          <Connect />
        </section>

        <section id="s-9">
          <h1 className="text-center font-semibold text-3xl mb-10 md:mb-5 md:text-4xl">Pricing</h1>
          <Pricing />
        </section>

        {/* s-10 Final CTA Section */}
        <section>
          <CTASection />
        </section>

      </div >


    </>
  );
}

