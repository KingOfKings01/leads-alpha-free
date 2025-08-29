import ActionButton from '../ActionButton';
import MarqueeSection from './UI/MarqueeSection';
import img1 from '../../assets/10x/img1.jpg'
import img2 from '../../assets/10x/img2.jpg'
import img3 from '../../assets/10x/img3.jpg'
import img4 from '../../assets/10x/img4.jpg'
import img5 from '../../assets/10x/img5.jpg'
export default function CTASection() {
    const content = [{ url: img1 }, { url: img2 }, { url: img3 }, { url: img4 }, { url: img5 }]
    const contentReverse = [{ url: img5 }, { url: img4 }, { url: img3 }, { url: img2 }, { url: img1 }]

    return (
        <div className="flex justify-between items-center gap-10 px-[18vw] py-[50px] bg-[#fff8ee] max-md:flex-col! max-md:text-center! max-md:gap-10! max-md:px-[5vh]! max-md:py-[25px]!">
            {/* Left Side */}
            <div className="flex-1">
                <h2 className="text-[25px] leading-[1.2] font-bold text-[#111] mb-5 max-md:text-xl!">
                    Ready to 10x your{" "}
                    <span className="text-[#1e60db]">Video Views?</span>
                </h2>
                <p className="text-[10px] leading-[1.6] text-[#333] mb-8">
                    Let’s turn your content into scroll-stopping videos that grow your
                    audience and boost your engagement. Book a call and let’s bring your
                    vision to life.
                </p>
                <ActionButton label="Get Started" />
            </div>

            {/* Right Side */}


            <div className="part-2 relative  gap-4 hidden md:flex!">

                {/* Top & Bottom fog */}
                <div className="pointer-events-none absolute inset-x-0 top-0 w-[66.5%] h-12 bg-gradient-to-b from-white to-transparent z-20" />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 w-[66.5%] h-12 bg-gradient-to-t from-white to-transparent z-20" />

                <MarqueeSection
                    details={content}
                    isImage={true}
                    direction="up"
                    height="70vh"
                    cardWidth="150px"
                />
                <MarqueeSection
                    details={contentReverse}
                    isImage={true}
                    direction="down"
                    height="70vh"
                    cardWidth="150px"
                />
            </div>
        </div>
    )
}
