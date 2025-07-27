import BrandsLogoGroup from '../assets/brands.svg';

export default function HeroSection() {
  return (
    <section className="hero">
      <h1 className="hero-heading">
        Connecting <span className="highlight">Brands</span>
        <img src={BrandsLogoGroup} alt="Brand Logos" className="brand-logos" />
        <span className="highlight">To UGC</span>
      </h1>
      <h2 className="sub-heading">That Skyrockets Your Ads</h2>
      <p className="hero-desc">
        Produce high-quality, authentic, and personalised user-generated content videos for your business<br />
        crafted by genuine creators from around the globe
      </p>
    </section>
  );
}
