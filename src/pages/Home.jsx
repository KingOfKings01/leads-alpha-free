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
import VideoMarqueeSection from "../components/Home/UI/VideoMarqueeSection";


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

          <section>
            <HeroSection />
          </section>

        <section id="s-2">
   
          <VideoMarqueeSection reels={reels} direction="left" />
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

