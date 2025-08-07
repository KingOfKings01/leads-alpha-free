import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import ActionButton from "../ActionButton";

const pricingPlans = [
    {
        id: 1,
        label: "Basic",
        title: "Basic Plan",
        price: "300",
        bonus: "A basic plan with exciting features",
        features: [
            "Covers 1–3 campaigns / 12 months",
            "Tracked post results.",
            "Up to 5 creator invitations",
            "Standard support",
        ],
    },
    {
        id: 2,
        label: "+100 Bonus credit",
        title: "Standard Plan",
        price: "1000",
        bonus: "Get +100 Bonus Credits",
        features: [
            "Covers 3–8 campaigns / 12 months",
            "Up to 15 creator invitations",
            "Tracked post results.",
            "Standard support",
            "AI brief writing",
        ],
    },
    {
        id: 3,
        label: "+150 Bonus credit",
        title: "Professional Plan",
        price: "2500",
        bonus: "Get +150 Bonus Credits",
        features: [
            "8–20 campaigns / 12 months",
            "Up to 25 creator invitations",
            "Tracked post results.",
            "Priority support",
            "AI brief writing",
            "Dedicated Account Manager",
        ],
    },
    {
        id: 4,
        label: "+200 Bonus credit",
        title: "Premium Plan",
        price: "5000",
        bonus: "Get +200 Bonus Credits",
        features: [
            "20–35 videos",
            "Up to 40 creator invitations",
            "Tracked post results",
            "Priority support",
            "AI brief",
            "Dedicated Account Manager",
        ],
    },
];


export default function Pricing() {
    return (
        <div className="carousel">
            {/* Custom Prev Button */}
            <div className="swiper-button-prev-custom">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_13)">
                        <path d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z" fill="#1E60DB" />
                        <path d="M33.5834 26.0001H18.4167M18.4167 26.0001L26 18.4167M18.4167 26.0001L26 33.5834" stroke="white" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_13">
                            <rect width="52" height="52" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>

            {/* Custom Next Button */}
            <div className="swiper-button-next-custom">
                <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_2_13)">
                        <path d="M0 26C0 11.6406 11.6406 0 26 0C40.3594 0 52 11.6406 52 26C52 40.3594 40.3594 52 26 52C11.6406 52 0 40.3594 0 26Z" fill="#1E60DB" />
                        <path d="M18.4166 26H33.5833M33.5833 26L26 18.4167M33.5833 26L26 33.5833" stroke="white" strokeWidth="2.16667" strokeLinecap="round" strokeLinejoin="round" />
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
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {pricingPlans.map((plan) => (
                    <SwiperSlide key={plan.id}>
                        <div className="pricing-card">
                            <div className="card-heading">
                                <span className="label">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="8" height="8" rx="4" fill="#36A379" />
                                    </svg>
                                    {plan.label}</span>
                                <h4>{plan.title}</h4>
                                <p className="bonus">{plan.bonus}</p>
                                <p className="price">${plan.price}</p>
                                <ActionButton label="Add To Wallet" option="w" />
                            </div>

                            <ul>
                                {plan.features.map((feat, i) => (

                                    <li key={i}>
                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_18_1469)">
                                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 7.5C0 5.51088 0.790176 3.60322 2.1967 2.1967C3.60322 0.790176 5.51088 0 7.5 0C9.48912 0 11.3968 0.790176 12.8033 2.1967C14.2098 3.60322 15 5.51088 15 7.5C15 9.48912 14.2098 11.3968 12.8033 12.8033C11.3968 14.2098 9.48912 15 7.5 15C5.51088 15 3.60322 14.2098 2.1967 12.8033C0.790176 11.3968 0 9.48912 0 7.5ZM7.072 10.71L11.39 5.312L10.61 4.688L6.928 9.289L4.32 7.116L3.68 7.884L7.072 10.71Z" fill="#232825" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_18_1469">
                                                    <rect width="15" height="15" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        {feat}
                                    </li>

                                ))}
                            </ul>

                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
