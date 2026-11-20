import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, Headphones, Laptop, Monitor, Zap } from "lucide-react";
import { useDispatch } from "react-redux";
import ProductGrid from "../Components/ProductGrid";
import heroImage from "../assets/Home.jpg";
import { setSelectedCategory } from "../Features/products/ProductSlice";

const Home = () => {
  const dispatch = useDispatch();
  const browseCategory = (category) => {
    dispatch(setSelectedCategory(category));
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
    <section className="hero-section">
      <div className="container hero-content">
        <div className="hero-copy">
          <p className="eyebrow">A smarter way to shop tech</p>
          <h1>Good technology.<br /><span>Better everyday.</span></h1>
          <p className="hero-description">
            Discover dependable laptops, monitors, audio, and PC essentials picked for your everyday setup.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/#products">
              Explore products <ArrowRight size={18} />
            </Link>
            <a className="text-link" href="#about">Get to know us</a>
          </div>
          <a className="hero-scroll" href="#products"><ArrowDown size={16} /> Scroll to explore</a>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="Featured electronics and accessories" />
          <div className="hero-image-caption">
            <span>Make room for</span>
            <strong>better ideas.</strong>
          </div>
        </div>
      </div>
      <div className="hero-accent" aria-hidden="true" />
    </section>

    <section className="category-strip container" aria-label="Shop categories">
      <button type="button" onClick={() => browseCategory("Laptops")}><Laptop size={21} /><span>Laptops</span></button>
      <button type="button" onClick={() => browseCategory("Monitors")}><Monitor size={21} /><span>Monitors</span></button>
      <button type="button" onClick={() => browseCategory("Audio")}><Headphones size={21} /><span>Audio</span></button>
      <button type="button" onClick={() => browseCategory("Power Supply")}><Zap size={21} /><span>PC essentials</span></button>
    </section>

    <section className="catalog-section container" id="products">
      <ProductGrid />
    </section>

    <section className="about-section" id="about">
      <div className="container about-content">
        <p className="eyebrow">The ElectronicStore difference</p>
        <h2>Tech shopping, without the noise.</h2>
        <p>
          We make it easier to explore everyday electronics in one place. Browse a focused
          collection, compare the details, and find the gear that fits your setup.
        </p>
        <Link className="text-link" to="/#products">Find your next upgrade <ArrowRight size={17} /></Link>
      </div>
    </section>

    <section className="faq-section container" id="faqs">
      <div className="faq-heading">
        <p className="eyebrow">A few helpful answers</p>
        <h2>Frequently asked questions</h2>
      </div>
      <div className="faq-list">
        <details>
          <summary>How do I find a product?</summary>
          <p>Use the search bar or choose a category on the shop page to narrow down the collection.</p>
        </details>
        <details>
          <summary>How does the checkout work?</summary>
          <p>This storefront is a demo. Checkout lets you try the order flow, but it does not process payments or submit a real order.</p>
        </details>
        <details>
          <summary>How can I get in touch?</summary>
          <p>Send us an email or call using the contact details at the bottom of the page.</p>
        </details>
      </div>
    </section>
    </>
  );
};

export default Home;
