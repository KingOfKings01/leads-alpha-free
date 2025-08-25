import ActionButton from "../components/ActionButton"
import img from '../assets/services/main-img.png'
import Testimonial from "../components/Home/Testimonial"
import CTASection from "../components/Home/CTASection"
import img1 from '../assets/section-7/img-1.webp'
import img2 from '../assets/section-7/img-3.png'

export default function Services() {

    const Svg = ({ width = 28, height = 28 }) => (
        <svg width={width} height={height} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_1201_965)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 25C0 19.287 1.475 15.726 4.1005 13.1005C6.726 10.475 10.287 9 14 9C17.713 9 21.274 10.475 23.8995 13.1005C26.525 15.726 28 19.287 28 25C28 28.713 26.525 32.274 23.8995 34.8995C21.274 37.525 17.713 39 14 39C10.287 39 6.726 37.525 4.1005 34.8995C1.475 32.274 0 28.713 0 25ZM13.2011 29.992L21.2613 19.9157L19.8053 18.7509L12.9323 27.3395L8.064 23.2832L6.86933 24.7168L13.2011 29.992Z" fill="#1E60DB" />
            </g>
            <defs>
                <clipPath id="clip0_1201_965">
                    <rect width="50" height="50" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )

    return (
        <>
            {/*/ First Section */}
            <section className="flex flex-col-reverse md:flex-row! items-center justify-between gap-10 lg:gap-20 px-6 lg:px-16 py-12">
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
                            <Svg />
                            <span>Drive traffic to your Amazon storefront</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Drive traffic to your Takealot storefront</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>1000+ Verified creators</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
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
            <Testimonial />

            {/* third section */}
            <section className="flex flex-col-reverse md:flex-row-reverse! items-center justify-between gap-10 lg:gap-20 px-6 lg:px-16 py-12">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
                        Video Marketing Solutions <span className="text-[#1E60DB]">For Marketing Agencies</span>
                    </h1>

                    <p className="text-gray-600 leading-relaxed text-[13px]">
                        Create effective campaigns by leveraging top-tier user-generated content (UGC) from verified creators. Utilise our
                        streamlined workflows designed for Marketing Agencies to maximise ROAS and minimise CAC. Maximise our
                        flagship to scale high-performing UGC seamlessly across all your marketing initiatives, driving better results for
                        your clients.
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Svg width={45} height={45} />
                            <span>Establish a new revenue stream for your agency by offering user-generated content for resale to clients</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg width={50} height={50} />
                            <span>Manage your clients User-Generated Content (UGC) accounts and facilitate the outsourcing of creators on
                                their behalf.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Explore creator for free</span>
                        </li>
                    </ul>

                    <ActionButton label="Book a Call" />
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative rounded-[20px] shadow-lg overflow-hidden">
                        <img
                            src={img1}
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

            {/* fourth section */}
            <section className="flex flex-col-reverse md:flex-row! items-center justify-between gap-10 lg:gap-20 px-6 lg:px-16 py-12">
                {/* Left Content */}
                <div className="flex-1 space-y-6">
                    <h1 className="text-3xl lg:text-4xl font-semibold leading-snug text-gray-900">
                        Elevate your app marketing by harnessing
                        <span className="text-[#1E60DB]">The Power Of Data-Driven Advertisements</span>
                    </h1>

                    <p className="text-gray-600 leading-relaxed text-[13px]">
                        Supercharge your installations and slash your CPA with compelling creator videos, fuelled by real ad data from over 1,000 successful
                        campaigns! Experience the thrill of authentic content driving your results!
                    </p>

                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Boost downloads via the App Store and Google Play Store.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Get authentic reviews.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Create How-to guides.</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <Svg />
                            <span>Access over 1000+ creators.</span>
                        </li>
                    </ul>

                    <ActionButton label="Explore creators for free" />
                </div>

                {/* Right Image */}
                <div className="flex-1 flex justify-center">
                    <div className="relative rounded-[20px] shadow-lg overflow-hidden">
                        <img
                            src={img2}
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

            {/* final CTA Section */}
            <CTASection />
        </>
    )
}
