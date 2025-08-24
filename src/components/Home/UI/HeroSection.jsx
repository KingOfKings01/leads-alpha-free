import CountrySelector from "./CountrySelector";
import ActionButton from "../../ActionButton";
import BrandLogos from "../../../assets/brands.svg"; 
import logo1 from "../../../assets/logo1.jpg";
import logo2 from "../../../assets/logo2.jpg";
import logo3 from "../../../assets/logo3.jpg";
import logo4 from "../../../assets/logo4.jpg";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center text-center px-4 py-10"
    >
      <CountrySelector />
      <div className="max-w-4xl mt-8">
        {/* Hero Title */}
        <h1 className="flex flex-wrap justify-center items-center gap-2 text-3xl md:text-5xl font-medium">
          Connecting <span className="text-blue-600">Brands</span>
          <img
            src={BrandLogos}
            alt="Brand Logos"
            className="h-8 sm:h-12 md:h-14"
          />
          <span className="text-blue-600">To UGC</span>
        </h1>

        <h1 className="text-2xl md:text-4xl font-medium mt-2">
          That Skyrockets Your Ads
        </h1>

        {/* Description */}
        <p className="mt-4 text-sm md:text-lg text-gray-600 leading-relaxed">
          Produce high-quality, authentic, and personalised user-generated
          content videos for your business <br className="hidden sm:block" />
          crafted by genuine creators from around the globe
        </p>

        {/* CTA + Trust Section */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-8">
          <ActionButton label="Get Started" />

          <div className="flex flex-col md:flex-row items-center gap-3">
            {/* Client logos */}
            <div className="flex -space-x-4">
              {[logo1, logo2, logo3, logo4].map((logo, i) => (
                <img
                  key={i}
                  src={logo}
                  alt={`client-${i}`}
                  className="w-10 h-10 rounded-full object-cover border border-white shadow"
                />
              ))}
            </div>

            {/* Trust text */}
            <div className="text-sm font-medium text-gray-700 text-center md:text-left">
              <span>★★★★★</span>
              <br />
              Trusted by 40+ clients
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
