import { Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cart/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";

const ProductCart = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <article className="product-card">
      <Link className="product-image-link" to={`/product/${product.id}`}>
        <div className="product-image-wrap">
          <img src={product.img} alt={product.title} loading="lazy" />
        </div>
      </Link>
      <div className="product-card-content">
        <p className="product-category">{product.category}</p>
        <Link to={`/product/${product.id}`} className="product-title">
          {product.title}
        </Link>
        <p className="product-description">{product.des}</p>
        <div className="product-card-bottom">
          <span className="product-price">{formatCurrency(product.price)}</span>
          <button
            className="icon-button add-to-cart-button"
            type="button"
            aria-label={`Add ${product.title} to cart`}
            onClick={() => dispatch(addToCart(product))}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCart;
