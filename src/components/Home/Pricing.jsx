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
        option: "regular",
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
        option: "regular",
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
        option: "recommended",
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
        option: "regular",
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

const Icon = ({ plan }) => <>{
    plan?.option != "recommended" ?
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
        :
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_18_1419)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0.669922 7.5C0.669922 5.51088 1.4601 3.60322 2.86662 2.1967C4.27314 0.790176 6.1808 0 8.16992 0C10.159 0 12.0667 0.790176 13.4732 2.1967C14.8797 3.60322 15.6699 5.51088 15.6699 7.5C15.6699 9.48912 14.8797 11.3968 13.4732 12.8033C12.0667 14.2098 10.159 15 8.16992 15C6.1808 15 4.27314 14.2098 2.86662 12.8033C1.4601 11.3968 0.669922 9.48912 0.669922 7.5ZM7.74192 10.71L12.0599 5.312L11.2799 4.688L7.59792 9.289L4.98992 7.116L4.34992 7.884L7.74192 10.71Z" fill="white" />
            </g>
            <defs>
                <clipPath id="clip0_18_1419">
                    <rect width="15" height="15" fill="white" transform="translate(0.669922)" />
                </clipPath>
            </defs>
        </svg>
}</>

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
                modules={[Navigation]}
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
                        <div className={"pricing-card " + plan?.option}>
                            <div className="card-heading">
                                <span className="label">
                                    <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="8" height="8" rx="4" fill="#36A379" />
                                    </svg>
                                    {plan.label}</span>
                                <h4>{plan.title}</h4>
                                <p className="bonus">{plan.bonus}</p>
                                <p className="price">${plan.price}</p>
                                <ActionButton label="Add To Wallet" arrow_bg={"#FFFFFF"} stroke="#4C86F3" bg={plan?.option == "recommended" ? "#5f91ed" : "#1E60DB"}/>
                            </div>

                            <ul className="list-of-options">
                                {plan.features.map((feat, i) => (

                                    <li key={i}>
                                        <Icon plan={plan} />
                                        {feat}
                                    </li>

                                ))}
                            </ul>

                        </div>
                        
                        
                    </SwiperSlide>
                ))}
            </Swiper>
        
            
            <div className="cta">
                <h2>Still can't decide?</h2>
                <p>Let's figure out what you need</p>
                <ActionButton label="Let's talk" arrow_bg="#ffffffff" stroke="#4C86F3" />
            </div>
            
        </div>
    );
}
