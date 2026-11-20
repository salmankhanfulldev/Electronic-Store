import { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Features/cart/cartSlice";
import { formatCurrency } from "../utils/formatCurrency";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.item);
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const [isComplete, setIsComplete] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(clearCart());
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <section className="container checkout-complete">
        <div className="success-icon"><CheckCircle2 size={32} /></div>
        <p className="eyebrow">Demo order complete</p>
        <h1>Thanks for trying our checkout.</h1>
        <p>This was a demo only. No order was submitted and no payment was collected.</p>
        <Link className="button button-primary" to="/">Back to the shop</Link>
      </section>
    );
  }

  if (cartItems.length === 0) {
    return (
      <section className="container empty-cart">
        <p className="eyebrow">Checkout</p>
        <h1>Your cart is empty.</h1>
        <p>Add a product before continuing to checkout.</p>
        <Link className="button button-primary" to="/#products">Browse products</Link>
      </section>
    );
  }

  return (
    <section className="container checkout-page">
      <div className="page-heading">
        <p className="eyebrow">Secure details</p>
        <h1>Checkout</h1>
        <p>Enter your details to preview the demo order flow.</p>
      </div>
      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <h2>Contact and delivery</h2>
          <label>
            Full name
            <input autoComplete="name" name="name" required />
          </label>
          <label>
            Email address
            <input autoComplete="email" name="email" type="email" required />
          </label>
          <label>
            Delivery address
            <textarea autoComplete="street-address" name="address" rows="3" required />
          </label>
          <label>
            City
            <input autoComplete="address-level2" name="city" required />
          </label>
          <div className="demo-notice">
            This is a demo checkout. It does not submit personal details, create an order, or collect payment.
          </div>
          <button className="button button-primary" type="submit">Preview order confirmation</button>
        </form>
        <aside className="order-summary checkout-order-summary">
          <h2>Your order</h2>
          {cartItems.map((item) => (
            <div className="checkout-line-item" key={item.id}>
              <span>{item.title} <small>× {item.quantity}</small></span>
              <strong>{formatCurrency(item.price * item.quantity)}</strong>
            </div>
          ))}
          <div className="summary-total"><span>Total</span><strong>{formatCurrency(total)}</strong></div>
          <Link className="text-link" to="/cart">Return to cart</Link>
        </aside>
      </div>
    </section>
  );
};

export default CheckoutPage;
