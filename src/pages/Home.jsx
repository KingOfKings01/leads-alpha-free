import CountrySelector from "../components/CountrySelector";
import BrandLogos from "../assets/brands.svg"; // adjust path if needed

export default function Home() {
  return (
    <div className="home">
      <section id="s-1">
        <CountrySelector />

        <div className="hero-content">
          <h1 className="hero-title">
            Connecting <span className="highlight">Brands</span>
            <img src={BrandLogos} alt="Brand Logos" className="brand-logos" />
            <span className="highlight">To UGC</span>
          </h1>

          <h2 className="hero-subtitle">That Skyrockets Your Ads</h2>

          <p className="hero-description">
            Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
            crafted by genuine creators from around the globe
          </p>
        </div>
      </section>
    </div>
  );
}
