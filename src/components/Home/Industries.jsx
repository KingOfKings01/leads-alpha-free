/* eslint-disable no-unused-vars */
import { useSearchParams } from "react-router-dom";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6, Svg7, Svg8, Svg9, Svg10 } from "../../assets/section-6/icons/Svgs.jsx";

const industries_1 = [
  { icon: Svg1, title: "Cosmetics & Beauty", slug: "cosmetics-n-beauty" },
  { icon: Svg2, title: "Apparel & Fashion", slug: "apparel-n-fashion" },
  { icon: Svg3, title: "Apps & Digital Services", slug: "apps-n-digital" },
  { icon: Svg4, title: "Health & Wellness", slug: "health-n-wellness" },
  { icon: Svg5, title: "Children & Family", slug: "children-n-family" },
];
const industries_2 = [
  { icon: Svg6, title: "Technology & Gadgets", slug: "technology-n-gadgets" },
  { icon: Svg7, title: "Food & Beverage", slug: "food-n-beverage" },
  { icon: Svg8, title: "Home & Lifestyle", slug: "home-n-lifestyle" },
  { icon: Svg9, title: "Pets", slug: "pets" },
  { icon: Svg10, title: "Automotive", slug: "automotive" },
];

export default function Industries() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedIndustry = searchParams.get("industry");

  const handleSelect = (slug) => {
    if (slug === selectedIndustry) return;
    searchParams.set("industry", slug);
    setSearchParams(searchParams);
  };

  const option = "cursor-pointer flex items-center px-[16px] py-[8px] rounded-[24px] gap-[8px] transition-colors duration-300 hover:bg-[#0055ff14]"

  return (
    <div className=" flex flex-col items-center m-0 p-0 gap-0 md:mx-[10vw] md:pt-[20px] md:gap-[20px] ">
      <div className="flex flex-col md:flex-row! whitespace-nowrap">
        {industries_1.map(({ icon: Icon, title, slug }) => (
          <button
            key={slug}
            onClick={() => handleSelect(slug)}
            className={`${option} ${selectedIndustry === slug
                ? "bg-gradient-to-b from-[#0c52d4] to-[#6094f4] text-white"
                : "text-black"
              } `}
          >
            <Icon
              width="15px"
              height="15px"
              className="w-[22px] h-[22px] flex-shrink-0"
              fill={`${selectedIndustry === slug ? "#FFFFFF" : "#AEAEAE"}`}
            />
            <p
              className={`text-[18px] md:text-[12px]! ${selectedIndustry === slug ? "text-white" : "text-black"
                }`}
            >
              {title}
            </p>
          </button>

        ))}
      </div>

      <div className="flex flex-col md:flex-row! whitespace-nowrap">
        {industries_2.map(({ icon: Icon, title, slug }) => (
          <button
            key={slug}
            onClick={() => handleSelect(slug)}
            className={`${option} ${selectedIndustry === slug
              ? "bg-gradient-to-b from-[#0c52d4] to-[#6094f4] text-white"
              : "text-black"
              }`}
          >
            <Icon
              width="15px"
              height="15px"
              className="w-[22px] h-[22px] flex-shrink-0"
              fill={`${selectedIndustry === slug ? "#FFFFFF" : "#AEAEAE"}`}
            />
            <p
              className={`text-[18px] md:text-[12px]! ${selectedIndustry === slug ? "text-white" : "text-black"
                }`}
            >
              {title}
            </p>
          </button>

        ))}
      </div>
    </div>
  );
}
