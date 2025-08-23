import ActionButton from "../components/ActionButton"
import img from '../assets/services/main-img.png'

export default function Services() {

    const Svg = ({ width = 28, height = 28 }) => (
        <svg width={width} height={height} viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1201_965)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 14C0 10.287 1.475 6.72601 4.1005 4.1005C6.72601 1.475 10.287 0 14 0C17.713 0 21.274 1.475 23.8995 4.1005C26.525 6.72601 28 10.287 28 14C28 17.713 26.525 21.274 23.8995 23.8995C21.274 26.525 17.713 28 14 28C10.287 28 6.72601 26.525 4.1005 23.8995C1.475 21.274 0 17.713 0 14ZM13.2011 19.992L21.2613 9.91573L19.8053 8.75093L12.9323 17.3395L8.064 13.2832L6.86933 14.7168L13.2011 19.992Z" fill="#1E60DB" />
            </g>
            <defs>
                <clipPath id="clip0_1201_965">
                <rect width="28" height="28" fill="white" />
            </clipPath>
        </defs>
    </svg>
    )

    return (
        <>
            {/*/ First Section */}
            <section className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-20 px-6 lg:px-16 py-12">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
                        Effective Creator ADS With{" "}
                        <span className="text-[#1E60DB]">High-ROAS For e-Commerce</span> Brands
                    </h1>

                    <p className="text-gray-600 leading-relaxed text-[13px]">
                        Elevate your e-commerce marketing strategy with our innovative on-demand
                        creator advertisements, meticulously crafted to align with your brand’s
                        vision. Our approach is powered by comprehensive analytics, ensuring every
                        aspect—from the careful selection of creators tailored to your target
                        audience to the final touches in the editing process—is backed by
                        real-time data. Experience a seamless integration of creativity and
                        performance to drive engagement and conversions for your online store.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Svg width="20" height="20" />
                            <span>Drive traffic to your Amazon storefront</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg width="20" height="20" />
                            <span>Drive traffic to your Takealot storefront</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg width="20" height="20" />
                            <span>1000+ Verified creators</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg width="20" height="20" />
                            <span>100+ Brands have already signed up</span>
                        </li>
                    </ul>

                    <ActionButton label="Explore creators for free" />
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative rounded-[20px] shadow-lg overflow-hidden">
                        <img
                            src={img}
                            alt="Services"
                            className="rounded-[20px] max-w-full h-auto"
                        />

                        {/* Top to mid gradient */}
                        <div className="absolute inset-x-0 top-0 h-1/4 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

                        {/* Bottom to mid gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-white/60 to-transparent pointer-events-none" />
                    </div>
                </div>

            </section>

            {/* second section */}
        </>
    )
}
