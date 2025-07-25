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
            <li>About Us</li>
            <li>Site Notice</li>
            <li>Refund Policy</li>
            <li>Privacy Policy</li>
            <li>Credit Expiration Policy</li>
            <li>T&Cs - Creators</li>
            <li>T&Cs - Brands</li>
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
