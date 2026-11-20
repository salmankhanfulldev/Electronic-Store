import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, Search, ShoppingBag, X } from "lucide-react";
import logo from "../assets/client6.png";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm } from "../Features/products/ProductSlice";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchTerm = useSelector((state) => state.product.searchTerm);
  const itemCount = useSelector((state) =>
    state.cart.item.reduce((total, item) => total + item.quantity, 0)
  );

  const handleSearch = (event) => {
    event.preventDefault();
    navigate("/#products");
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <div className="announcement-bar">
        <p>Tech essentials, thoughtfully selected.</p>
        <a href="mailto:salmankhan737400@gmail.com">Contact us</a>
      </div>
      <div className="navbar container">
        <Link className="brand" to="/" aria-label="ElectronicStore home" onClick={closeMenu}>
          <img src={logo} alt="" />
          <span>
            <strong>electronic</strong>
            <span>STORE</span>
          </span>
        </Link>

        <form className="search-form" role="search" onSubmit={handleSearch}>
          <Search size={18} aria-hidden="true" />
          <input
            type="search"
            aria-label="Search products"
            placeholder="Search laptops, monitors, audio..."
            value={searchTerm}
            onChange={(event) => dispatch(setSearchTerm(event.target.value))}
          />
          <button type="submit">Search</button>
        </form>

        <nav className={`main-nav${isOpen ? " is-open" : ""}`} aria-label="Main navigation">
          <Link to="/#products" onClick={closeMenu}>Shop</Link>
          <Link to="/#about" onClick={closeMenu}>About</Link>
          <Link to="/#faqs" onClick={closeMenu}>FAQs</Link>
          <Link to="/#contact" onClick={closeMenu}>Contact</Link>
        </nav>

        <Link className="cart-link" to="/cart" aria-label={`Shopping cart, ${itemCount} items`}>
          <ShoppingBag size={21} />
          <span className="cart-label">Cart</span>
          <span className="cart-count" aria-live="polite">{itemCount}</span>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      <form className="mobile-search container" role="search" onSubmit={handleSearch}>
        <Search size={18} aria-hidden="true" />
        <input
          type="search"
          aria-label="Search products"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(event) => dispatch(setSearchTerm(event.target.value))}
        />
        <button type="submit" aria-label="Submit search"><Search size={18} /></button>
      </form>
    </header>
  );
};

export default Navbar;
