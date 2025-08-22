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
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="logo-link">
          <img src={logo} alt="Leads Alpha Logo" className="logo" />
        </Link>
        <ul className="nav-links desktop-only">
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/creators">Creators</Link></li>

          <ActionButton label="Book A Call" />

        </ul>
      </div>

      <div className="navbar-right desktop-only">
        <span className="become-text">Become a Creator</span>

        <ActionButton label="Get Started" />
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
          <li>
            <ActionButton label="Book A Call" />
          </li>
          <li><span className="become-text">Become a Creator</span></li>
          <li>
            <ActionButton label="Get Started" />
          </li>
        </ul>
      </div>
    </nav>
  );
}
