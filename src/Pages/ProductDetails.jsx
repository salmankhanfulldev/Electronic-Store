import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ShoppingCart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/cart/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.product.items.find((item) => item.id === Number(id))
  );

  if (!product) {
    return (
      <section className="container not-found-page">
        <p className="eyebrow">Product unavailable</p>
        <h1>We couldn’t find that product.</h1>
        <p>It may have moved or is no longer in our collection.</p>
        <Link className="button button-primary" to="/#products">Back to the shop</Link>
      </section>
    );
  }

  return (
    <section className="container detail-page">
      <Link className="back-link" to="/#products"><ArrowLeft size={17} /> Back to the shop</Link>
      <div className="detail-layout">
        <div className="detail-image">
          <img src={product.img} alt={product.title} />
        </div>
        <div className="detail-info">
          <p className="eyebrow">{product.category}</p>
          <h1>{product.title}</h1>
          <p className="detail-description">{product.des}</p>
          <p className="detail-price">{formatCurrency(product.price)}</p>
          <p className="detail-availability"><span /> Available in this collection</p>
          <button
            type="button"
            className="button button-primary detail-add-button"
            onClick={() => dispatch(addToCart(product))}
          >
            <ShoppingCart size={18} /> Add to cart
          </button>
          <p className="checkout-disclaimer">Demo storefront. Orders and payments are not processed.</p>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
