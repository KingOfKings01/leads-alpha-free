// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import logo_1 from "../../assets/testimonial/img-1.png";
import logo_2 from "../../assets/testimonial/img-2.png";
import logo_3 from "../../assets/testimonial/img-3.png";
import logo_4 from "../../assets/testimonial/img-4.png";
import logo_5 from "../../assets/testimonial/img-5.png";
import logo_6 from "../../assets/testimonial/img-6.png";
import logo_7 from "../../assets/testimonial/img-7.png";
import logo_8 from "../../assets/testimonial/img-8.png";
import logo_9 from "../../assets/testimonial/img-9.png";
import logo_10 from "../../assets/testimonial/img-10.png";

export default function Testimonial() {
  const logoList = [
    { url: logo_1, alt: "flipbox" },
    { url: logo_2, alt: "flipbox" },
    { url: logo_3, alt: "flipbox" },
    { url: logo_4, alt: "flipbox" },
    { url: logo_5, alt: "flipbox" },
    { url: logo_6, alt: "flipbox" },
    { url: logo_7, alt: "flipbox" },
    { url: logo_8, alt: "flipbox" },
    { url: logo_9, alt: "flipbox" },
    { url: logo_10, alt: "flipbox" },
  ];

  return (
    <div className="relative bg-white py-[5vh] overflow-hidden">
      {/* Title */}
      <h5 className="text-center text-[#444a46] font-light text-lg mb-6">
        Editing that grows brand audiences
      </h5>

      {/* Marquee container */}
      <div className="flex gap-20 sm:gap-16">
        <motion.div
          className="flex gap-20 sm:gap-16"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          {[...logoList, ...logoList].map((element, idx) => (
            <img
              key={idx}
              src={element.url}
              alt={element.alt}
              className="h-24 sm:h-28 object-contain flex-shrink-0"
            />
          ))}
        </motion.div>
      </div>

      {/* Left gradient overlay */}
      <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white to-transparent pointer-events-none z-10" />
      {/* Right gradient overlay */}
      <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
    </div>
  );
}
