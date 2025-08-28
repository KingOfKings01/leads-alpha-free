import { useSearchParams } from "react-router-dom";

import ukIcon from "../../../assets/uk.svg";
import zaIcon from "../../../assets/za.svg";
import zmIcon from "../../../assets/zm.svg";
import zwIcon from "../../../assets/zim.svg";

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
        <div className="flex flex-col md:flex-row! justify-center items-center gap-4 p-4 mt-5">
            <span className="font-medium">I'm based in:</span>

            <div className="flex flex-col md:flex-row! flex-wrap gap-2">
                {countries.map((country) => (
                    <button
                        key={country.slug}
                        onClick={() => handleSelect(country.slug)}
                        className={`flex items-center  gap-2 px-3 py-1.5 rounded-full border text-gray-900 font-medium transition-colors
              ${selectedCountry === country.slug
                                ? "border-2 border-blue-600 bg-blue-50 text-black"
                                : "border-gray-300 hover:bg-gray-100"
                            }`}
                    >
                        <img
                            src={country.flag}
                            alt={country.slug}
                            className="w-6 h-6 object-contain"
                        />
                        <span className="text-center w-full">
                            {country.name}
                        </span>
                    </button>
                ))}
            </div>
        </div>
    );
}
