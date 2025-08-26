import { Link } from "react-router-dom";
import googleStars from "../assets/google_with_starts.png";
import logo from "../assets/leads-alpha-logo.png";

const footerColumns = [
  {
    groups: [
      {
        title: "Services",
        items: ["Apps", "Agencies", "eCommerce"],
      },
      {
        title: "By Platform",
        items: ["TikTok", "Facebook", "Instagram", "Other"],
      },
    ],
  },
  {
    groups: [
      {
        title: "Resources",
        items: ["Help", "What is UGC?", "Case Studies", "Blogs", "Affiliate program"],
      },
    ],
  },
  {
    groups: [
      {
        title: "Socials",
        items: [
          { label: "Instagram", href: "https://www.instagram.com/leadsalpha.ugc?igsh=Yzkwd3U3NmF6aXAw&utm_source=qr" },
          { label: "TikTok", href: "https://www.tiktok.com/@leadsalpha.ugc?_t=ZM-8yeQiO5LGx6&_r=1" },
          { label: "Facebook", href: "https://www.facebook.com/share/1FCLLAgsdv/?mibextid=wwXIfr" },
          { label: "LinkedIn", href: "https://www.linkedin.com/company/leadsalpha" },
          { label: "X", href: "https://x.com/leadsalpha_io?s=11&t=7v7jTjfx6LicKrQMe_SzSA" },
          { label: "Snapchat", href: "https://t.snapchat.com/DN1BcUH5" },
          { label: "Masterclass", href: "/masterclass" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Company",
        items: [
          { label: "About Us", to: "/about" },
          { label: "Site Notice", to: "/site-notice" },
          { label: "Refund Policy", to: "/refund-policy" },
          { label: "Privacy Policy", to: "/privacy-policy" },
          { label: "Careers", to: "/careers" },
          { label: "Credit Expiration Policy", to: "/credit-expiration-policy" },
          { label: "T&Cs - Creators", to: "/terms-creators" },
          { label: "T&Cs - Brands", to: "/terms-brands" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "FAQs",
        items: ["FAQ's Brands", "FAQ's Creators"],
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 font-sans px-[6vw] py-[7vh]">
      <div className="flex flex-wrap justify-between gap-2 md:gap-4">
        {/* Auto-generated Columns */}
        {footerColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[150px] space-y-4">
            {col.groups.map((section, secIdx) => (
              <div key={secIdx}>
                <h4 className="text-[#6A6A70] text-xs mb-3">{section.title}</h4>
                <ul className="space-y-2 text-xs">
                  {section.items.map((item, i) => {
                    if (typeof item === "string") {
                      return (
                        <li key={i} className="hover:underline cursor-pointer">
                          {item}
                        </li>
                      );
                    }
                    if (item.to) {
                      return (
                        <li key={i}>
                          <Link
                            to={item.to}
                            onClick={() =>
                              window.scrollTo({ top: 0, behavior: "smooth" })
                            }
                            className="hover:underline"
                          >
                            {item.label}
                          </Link>
                        </li>
                      );
                    }
                    if (item.href) {
                      return (
                        <li key={i}>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                          >
                            {item.label}
                          </a>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            ))}
          </div>
        ))}

        {/* Brand Section */}
        <div className="flex-1 min-w-[200px] mt-6 md:mt-0">
          <div className="flex items-center gap-2 mb-3">
            <img src={logo} alt="Leads Alpha" className="w-24 h-auto" />
          </div>
          <p className="text-xs">
            Excel on paid social with authentic creator videos.
          </p>

          <div className="flex items-center gap-2 mt-3">
            <img src={googleStars} alt="Google Review" className="h-9" />
            <div className="text-yellow-400 text-2xl">{/* ⭐⭐⭐⭐⭐ */}</div>
            <span className="text-xs">4.9/5 From 3,602 Customers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
