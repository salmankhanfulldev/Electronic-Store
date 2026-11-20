import { Link } from "react-router-dom";
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => (
  <footer className="site-footer" id="contact">
    <div className="container footer-main">
      <div className="footer-about">
        <Link className="footer-brand" to="/">electronic<span>STORE</span></Link>
        <p>Everyday technology for your work, your home, and everything in between.</p>
      </div>
      <div>
        <h2>Explore</h2>
        <Link to="/#products">Shop all products</Link>
        <Link to="/#about">About us</Link>
        <Link to="/#faqs">FAQs</Link>
      </div>
      <div>
        <h2>Get in touch</h2>
        <a href="mailto:salmankhan737400@gmail.com"><Mail size={16} /> salmankhan737400@gmail.com</a>
        <a href="tel:+923118298343"><Phone size={16} /> +92 311 829 8343</a>
        <p className="footer-location"><MapPin size={16} /> Islamabad, Pakistan</p>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <span>© {new Date().getFullYear()} ElectronicStore. All rights reserved.</span>
        <span>Built for a better way to shop tech.</span>
      </div>
    </div>
  </footer>
);

export default Footer;
