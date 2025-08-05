import { useSearchParams } from "react-router-dom";

import ukIcon from "../../assets/uk.svg";
import zaIcon from "../../assets/za.svg";
import zmIcon from "../../assets/zm.svg";
import zwIcon from "../../assets/zim.svg";

const countries = [
  { name: "United Kingdom", slug: "uk", flag: ukIcon },
  { name: "South Africa", slug: "za", flag: zaIcon },
  { name: "Zambia", slug: "zm", flag: zmIcon },
  { name: "Zimbabwe", slug: "zw", flag: zwIcon },
];

export default function CountrySelector() {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCountry = searchParams.get("country");

  const handleSelect = (slug) => {
    searchParams.set("country", slug);
    setSearchParams(searchParams);
  };

  return (
    <div className="country-selector">
      <span className="label">I'm based in:</span>
      <div className="country-buttons">
        {countries.map((country) => (
          <button
            key={country.slug}
            onClick={() => handleSelect(country.slug)}
            className={`country-btn ${
              selectedCountry === country.slug ? "active" : ""
            }`}
          >
            <img src={country.flag} alt={country.slug} className="country-logo" />
            {country.name}
          </button>
        ))}
      </div>
    </div>
  );
}
