import { Link } from 'react-router-dom';
import googleStars from '../assets/google_with_starts.png';
import logo from '../assets/leads-alpha-logo.png';


const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-sections">
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Apps</li>
            <li>Agencies</li>
            <li>eCommerce</li>
            <li>By Platform</li>
            <li>TikTok</li>
            <li>Facebook</li>
            <li>Instagram</li>
            <li>Other</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>Help</li>
            <li>What is UGC?</li>
            <li>Case Studies</li>
            <li>Blogs</li>
            <li>Affiliate program</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Socials</h4>
          <ul>
            <li>Instagram</li>
            <li>TikTok</li>
            <li>Facebook</li>
            <li>LinkedIn</li>
            <li>X</li>
            <li>Snapchat</li>
            <li>Masterclass</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <ul>
            <li><Link to="/about" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>About Us</Link></li>
            <li><Link to="/site-notice" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Site Notice</Link></li>
            <li><Link to="/refund-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Refund Policy</Link></li>
            <li><Link to="/privacy-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Privacy Policy</Link></li>
            <li><Link to="/credit-expiration-policy" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Credit Expiration Policy</Link></li>
            <li><Link to="/terms-creators" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>T&Cs - Creators</Link></li>
            <li><Link to="/terms-brands" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>T&Cs - Brands</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>FAQs</h4>
          <ul>
            <li>FAQ's Brands</li>
            <li>FAQ's Creators</li>
          </ul>
        </div>

        <div className="footer-brand">
          {/* Add your logo image here */}
          <div className="footer-logo">
            <img src={logo} alt="Leads Alpha" />
          </div>
          <p className='footer-line'>Excel on paid social with authentic creator videos.</p>

          <div className="footer-review">
            <img src={googleStars} alt="Google Review" />
            {/* Add your SVG stars here */}
            <div className="stars">{/* ⭐⭐⭐⭐⭐ */}</div>
            <span>4.9/5 From 3,602 Customers</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;