import { Link } from "react-router-dom";
import googleStars from "../assets/google_with_starts.png";
import logo from "../assets/leads-alpha-logo.png";

const footerColumns = [
  {
    groups: [
      {
        title: "Services",
        items: [
          { label: "Apps", to: "/apps" },
          { label: "Agencies", to: "/agencies" },
          { label: "eCommerce", to: "/ecommerce" },
        ],
      },
      {
        title: "By Platform",
        items: [
          { label: "TikTok", to: "/tiktok" },
          { label: "Facebook", to: "/facebook" },
          { label: "Instagram", to: "/instagram" },
          { label: "Other", to: "/other" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Resources",
        items: [
          { label: "What is UGC?", to: "/what-is-ugc" },
          { label: "Case Studies", to: "/case-studies" },
          { label: "Blogs", to: "/blogs" },
        ],
      },
    ],
  },
  {
    groups: [
      {
        title: "Socials",
        items: [
          { label: "Instagram", href: "https://www.instagram.com/" },
          { label: "TikTok", href: "https://www.tiktok.com/" },
          { label: "Facebook", href: "https://www.facebook.com/" },
          { label: "LinkedIn", href: "https://www.linkedin.com/" },
          { label: "X", href: "https://x.com/" },
          { label: "Snapchat", href: "https://www.snapchat.com/" },
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
        items: [
          { label: "FAQ's Brands", to: "/faqs-brands" },
          { label: "FAQ's Creators", to: "/faqs-creators" },
        ],
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 font-sans px-[6vw] py-[7vh]">
      <div className="flex flex-wrap justify-between gap-2 md:gap-4!">
        {/* Auto-generated Columns */}
        {footerColumns.map((col, colIdx) => (
          <div key={colIdx} className="flex-1 min-w-[150px] space-y-4">
            {col.groups.map((section, secIdx) => (
              <div key={secIdx}>
                <h4 className="text-[#6A6A70] text-xs mb-3">{section.title}</h4>
                <ul className="space-y-2 text-xs">
                  {section.items.map((item, i) => {
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
        <div className="flex-1 min-w-[200px] mt-6 md:mt-0!">
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
