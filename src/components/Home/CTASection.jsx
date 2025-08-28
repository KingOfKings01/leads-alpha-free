import { useEffect, useState } from 'react'
import { fetchReels } from '../../apis/reels';
import ActionButton from '../ActionButton';
import MarqueeSection from './UI/MarqueeSection';

export default function CTASection() {
    const [videos, setVideos] = useState([]);
    useEffect(() => {

        const loadReels = async () => {
            try {
                const data = await fetchReels();
                const urls = data.map(item => item.url);
                setVideos(urls);
                console.log(urls)
            } catch (error) {
                console.error("Error loading reels:", error.message);
            }
        };
        loadReels();
    }, []);

    return (
        <div className="flex justify-between items-center gap-10 px-[8vw] py-[50px] bg-[#fff8ee] max-md:flex-col max-md:text-center max-md:gap-10 max-md:px-[5vh] max-md:py-[25px]">
            {/* Left Side */}
            <div className="flex-1">
                <h2 className="text-[30px] leading-[1.2] font-bold text-[#111] mb-5 max-md:text-xl">
                    Ready to 10x your{" "}
                    <span className="text-[#1e60db]">Video<br />Views?</span>
                </h2>
                <p className="text-[10px] leading-[1.6] text-[#333] mb-8">
                    Let’s turn your content into scroll-stopping videos that grow your
                    audience and boost your engagement. Book a call and let’s bring your
                    vision to life.
                </p>
                <ActionButton label="Get Started" />
            </div>

            {/* Right Side */}
            <div className="part-2 w-[45%] gap-4 hidden md:flex">
                <MarqueeSection
                    details={videos}
                    direction="up"
                    height="70vh"
                    cardHeight="300px"
                    cardWidth="150px"
                    fadeEdges={true}
                />
                <MarqueeSection
                    details={videos}
                    direction="down"
                    height="70vh"
                    cardHeight="300px"
                    cardWidth="150px"
                    fadeEdges={true}
                />
            </div>
        </div>
    )
}
