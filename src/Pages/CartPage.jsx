import { Link } from "react-router-dom";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity } from "../Features/cart/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return (
      <section className="container empty-cart">
        <div className="empty-cart-icon"><ShoppingBag size={28} /></div>
        <p className="eyebrow">Your cart</p>
        <h1>It’s a little quiet in here.</h1>
        <p>Explore the collection and add something you love.</p>
        <Link className="button button-primary" to="/#products">Continue shopping</Link>
      </section>
    );
  }

  return (
    <section className="container cart-page">
      <div className="page-heading">
        <p className="eyebrow">Almost yours</p>
        <h1>Your shopping cart</h1>
        <p>{cartItems.reduce((count, item) => count + item.quantity, 0)} items in your bag</p>
      </div>
      <div className="cart-layout">
        <div className="cart-items">
          {cartItems.map((item) => (
            <article className="cart-item" key={item.id}>
              <Link className="cart-item-image" to={`/product/${item.id}`}>
                <img src={item.img} alt={item.title} />
              </Link>
              <div className="cart-item-info">
                <span className="product-category">{item.category}</span>
                <Link className="cart-item-title" to={`/product/${item.id}`}>{item.title}</Link>
                <span className="cart-item-unit-price">{formatCurrency(item.price)} each</span>
                <div className="quantity-control" aria-label={`Quantity for ${item.title}`}>
                  <button
                    type="button"
                    aria-label={`Decrease ${item.title} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  >
                    <Minus size={15} />
                  </button>
                  <span aria-live="polite">{item.quantity}</span>
                  <button
                    type="button"
                    aria-label={`Increase ${item.title} quantity`}
                    onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  >
                    <Plus size={15} />
                  </button>
                </div>
              </div>
              <div className="cart-item-total">
                <strong>{formatCurrency(item.price * item.quantity)}</strong>
                <button
                  type="button"
                  className="remove-button"
                  aria-label={`Remove ${item.title} from cart`}
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  <Trash2 size={17} /><span>Remove</span>
                </button>
              </div>
            </article>
          ))}
          <Link className="text-link back-to-shop" to="/#products">Continue shopping</Link>
        </div>

        <aside className="order-summary">
          <h2>Order summary</h2>
          <div className="summary-row"><span>Subtotal</span><span>{formatCurrency(total)}</span></div>
          <div className="summary-row"><span>Shipping</span><span>Calculated at checkout</span></div>
          <div className="summary-total"><span>Total</span><strong>{formatCurrency(total)}</strong></div>
          <Link className="button button-primary checkout-button" to="/checkout">Continue to checkout</Link>
          <p className="checkout-disclaimer">Demo checkout only. No payment will be collected.</p>
        </aside>
      </div>
    </section>
  );
};

export default CartPage;
