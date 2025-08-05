import { useSearchParams } from "react-router-dom";
import icon1 from "../../assets/section-6/svg_1.svg";
import icon2 from "../../assets/section-6/svg_2.svg";
import icon3 from "../../assets/section-6/svg_3.svg";
import icon4 from "../../assets/section-6/svg_4.svg";
import icon5 from "../../assets/section-6/svg_5.svg";
import icon6 from "../../assets/section-6/svg_6.svg";
import icon7 from "../../assets/section-6/svg_7.svg";
import icon8 from "../../assets/section-6/svg_8.svg";
import icon9 from "../../assets/section-6/svg_9.svg";
import icon10 from "../../assets/section-6/svg_10.svg";

const industries = [
  { icon: icon1, title: "Cosmetics & Beauty", slug: "cosmetics-n-beauty" },
  { icon: icon2, title: "Apparel & Fashion", slug: "apparel-n-fashion" },
  { icon: icon3, title: "Apps & Digital Services", slug: "apps-n-digital" },
  { icon: icon4, title: "Health & Wellness", slug: "health-n-wellness" },
  { icon: icon5, title: "Children & Family", slug: "children-n-family" },
  { icon: icon6, title: "Technology & Gadgets", slug: "technology-n-gadgets" },
  { icon: icon7, title: "Food & Beverage", slug: "food-n-beverage" },
  { icon: icon8, title: "Home & Lifestyle", slug: "home-n-lifestyle" },
  { icon: icon9, title: "Pets", slug: "pets" },
  { icon: icon10, title: "Automotive", slug: "automotive" },
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
      {industries.map(({ icon, title, slug }) => (
        <button
          key={slug}
          onClick={() => handleSelect(slug)}
          className={`option ${selectedIndustry === slug ? "active" : ""}`}
        >
          <img src={icon} alt={title} />
          <p>{title}</p>
        </button>
      ))}
    </div>
  );
}
