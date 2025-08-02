import CountrySelector from "../components/CountrySelector";
import BrandLogos from "../assets/brands.svg";
import logo1 from "../assets/logo1.jpg";
import logo2 from "../assets/logo2.jpg";
import logo3 from "../assets/logo3.jpg";
import logo4 from "../assets/logo4.jpg";


export default function Home() {
  return (
    <>
      <div className="home">
        <section id="s-1">
          <CountrySelector />

          <div className="hero-content">
            <h1 className="hero-title">
              Connecting <span className="highlight">Brands</span>
              <img src={BrandLogos} alt="Brand Logos" className="brand-logos" />
              <span className="highlight">To UGC</span>
            </h1>

            <h1 className="hero-title">That Skyrockets Your Ads</h1>

            <p className="hero-description">
              Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
              crafted by genuine creators from around the globe
            </p>

            <div className="trust-container">
              <button className="get-started-btn">
                Get Started
                <svg viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.279785" width="40" height="40" rx="20" fill="#4C86F3" />
                  <path d="M16.1573 23.1248L24.4068 14.8752M24.4068 14.8752H16.1573M24.4068 14.8752V23.1248" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>

              <div className="client-info">
                <div className="client-logos">
                  <img src={logo1} alt="logo1" />
                  <img src={logo2} alt="logo2" />
                  <img src={logo3} alt="logo3" />
                  <img src={logo4} alt="logo4" />
                </div>

                <div className="trusted-text">
                  <span> ★★★★★ </span>
                  <br />
                  Trusted by 40+ clients
                </div>
              </div>
            </div>
          </div>

        </section>


        <div id="s-2">
        </div>
      </div>


    </>
  );
}
