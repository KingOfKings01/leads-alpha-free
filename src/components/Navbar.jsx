import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/leads-alpha-logo.png";

const svg = (
  <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0.279785" y="1" width="40" height="40" rx="20" fill="#4C86F3" />
    <path d="M16.1573 24.1248L24.4068 15.8752M24.4068 15.8752H16.1573M24.4068 15.8752V24.1248"
      stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock/unlock scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Leads Alpha Logo" className="logo" />
        <ul className="nav-links desktop-only">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/creators">Creators</Link></li>
          <Link to="/book" className="cta-btn">Book A Call {svg}</Link>
        </ul>
      </div>

      <div className="navbar-right desktop-only">
        <span className="become-text">Become a Creator</span>
        <Link to="/get-started" className="cta-btn secondary">Get Started {svg}</Link>
      </div>

{/* //! Hamburger */}
      <div className="hamburger mobile-only" onClick={() => setOpen(!open)}>
        <div className={`bar ${open ? "open" : ""}`} />
        <div className={`bar ${open ? "open" : ""}`} />
        <div className={`bar ${open ? "open" : ""}`} />
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)}></div>}

      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <ul className="side-nav">
          <li><Link to="/services" onClick={() => setOpen(false)}>Services</Link></li>
          <li><Link to="/pricing" onClick={() => setOpen(false)}>Pricing</Link></li>
          <li><Link to="/creators" onClick={() => setOpen(false)}>Creators</Link></li>
          <li><Link to="/book" className="cta-btn" onClick={() => setOpen(false)}>Book A Call {svg}</Link></li>
          <li><span className="become-text">Become a Creator</span></li>
          <li><Link to="/get-started" className="cta-btn secondary" onClick={() => setOpen(false)}>Get Started {svg}</Link></li>
        </ul>
      </div>
    </nav>
  );
}
