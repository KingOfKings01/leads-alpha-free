import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/leads-alpha-logo.png";
import ActionButton from "./ActionButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock/unlock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="flex justify-between items-center px-8 py-4 bg-[#FFFCF0] font-sans relative z-[1000]">
      {/* Left Section */}
      <div className="flex items-center gap-[2vw]">
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="block"
        >
          <img src={logo} alt="Leads Alpha Logo" className="h-10" />
        </Link>

        <ul className="hidden md:flex! list-none gap-6 items-center">
          <li>
            <Link to="/services" className="text-[#111] font-medium">Services</Link>
          </li>
          <li>
            <Link to="/pricing" className="text-[#111] font-medium">Pricing</Link>
          </li>
          <li>
            <Link to="/creators" className="text-[#111] font-medium">Creators</Link>
          </li>
          <ActionButton label="Book A Call" />
        </ul>
      </div>

      {/* Right Section */}
      <div className="hidden md:flex! items-center gap-4">
        <span className="text-[#111] font-medium">Become a Creator</span>
        <ActionButton label="Get Started" />
      </div>

      {/* Hamburger */}
      <div
        className="flex md:hidden! flex-col gap-1 cursor-pointer"
        onClick={() => setOpen(!open)}
      >
        <div
          className={`w-6 h-[3px] bg-[#333] transition-all duration-300 ${
            open ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <div
          className={`w-6 h-[3px] bg-[#333] transition-all duration-300 ${
            open ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-6 h-[3px] bg-[#333] transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </div>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[1000]"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 left-0 h-screen w-4/5 max-w-[300px] bg-white shadow-lg z-[1100] overflow-y-auto p-6 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="list-none flex flex-col gap-4">
          <li>
            <Link
              to="/services"
              onClick={() => setOpen(false)}
              className="text-[#111] font-medium"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/pricing"
              onClick={() => setOpen(false)}
              className="text-[#111] font-medium"
            >
              Pricing
            </Link>
          </li>
          <li>
            <Link
              to="/creators"
              onClick={() => setOpen(false)}
              className="text-[#111] font-medium"
            >
              Creators
            </Link>
          </li>
          <li>
            <ActionButton label="Book A Call" />
          </li>
          <li>
            <span className="text-[#111] font-medium">Become a Creator</span>
          </li>
          <li>
            <ActionButton label="Get Started" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
