
import Testimonial from "../components/Home/Testimonial";
import CTASection from "../components/Home/CTASection";

import img from "../assets/services/main-img.png";
import img1 from "../assets/services/img-2.png";
import img2 from "../assets/section-7/img-3.png";
import DetailCard from "../components/DetailCard";

export default function Services() {
  return (
    <>
      {/* First Section */}
      <DetailCard
        title={
          <>
            Effective Creator ADS With{" "}
            <span className="text-[#1E60DB] block">
              High-ROAS For e-Commerce
            </span>{" "}
            Brands
          </>
        }
        description="Elevate your e-commerce marketing strategy with our innovative on-demand
        creator advertisements, meticulously crafted to align with your brand’s
        vision. Our approach is powered by comprehensive analytics, ensuring every
        aspect—from the careful selection of creators tailored to your target
        audience to the final touches in the editing process—is backed by
        real-time data."
        points={[
          "Drive traffic to your Amazon storefront",
          "Drive traffic to your Takealot storefront",
          "1000+ Verified creators",
          "100+ Brands have already signed up",
        ]}
        image={img}
        buttonLabel="Explore creators for free"
        imageSide="right"
        imgWidth={90}
        shadow={true}
      />

      {/* Second Section */}
      <Testimonial />

      {/* Third Section */}
      <DetailCard
        title={
          <>
            Video Marketing Solutions{" "}
            <span className="text-[#1E60DB]">For Marketing Agencies</span>
          </>
        }
        description="Create effective campaigns by leveraging top-tier user-generated content
        (UGC) from verified creators. Utilise our streamlined workflows designed
        for Marketing Agencies to maximise ROAS and minimise CAC."
        points={[
          "Establish a new revenue stream for your agency by offering user-generated content for resale to clients",
          "Manage your clients UGC accounts and outsource creators on their behalf",
          "Explore creator for free",
        ]}
        image={img1}
        buttonLabel="Book a Call"
        imageSide="left"
      />

      {/* Fourth Section */}
      <DetailCard
        title={
          <>
            Elevate your app marketing by harnessing{" "}
            <span className="text-[#1E60DB]">
              The Power Of Data-Driven Advertisements
            </span>
          </>
        }
        description="Supercharge your installations and slash your CPA with compelling creator videos,
        fuelled by real ad data from over 1,000 successful campaigns!"
        points={[
          "Boost downloads via the App Store and Google Play Store",
          "Get authentic reviews",
          "Create How-to guides",
          "Access over 1000+ creators",
        ]}
        image={img2}
        buttonLabel="Explore creators for free"
        imageSide="right"
      />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
