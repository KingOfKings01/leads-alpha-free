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

  return (
    <div className="industries">
    <div className="industries_1">
      {industries_1.map(({ icon: Icon, title, slug }) => (
        <button
        key={slug}
          onClick={() => handleSelect(slug)}
          className={`option ${selectedIndustry === slug ? "active" : ""}`}
        >
          <Icon />
          <p>{title}</p>
        </button>
      ))}
    </div>
    <div className="industries_2">
      {industries_2.map(({ icon: Icon, title, slug }) => (
        <button
        key={slug}
          onClick={() => handleSelect(slug)}
          className={`option ${selectedIndustry === slug ? "active" : ""}`}
        >
          <Icon />
          <p>{title}</p>
        </button>
      ))}
    </div>
      </div>
  );
}
