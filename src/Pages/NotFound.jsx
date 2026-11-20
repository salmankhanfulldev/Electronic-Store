import { Link } from "react-router-dom";

const NotFound = () => (
  <section className="container not-found-page">
    <p className="eyebrow">404 · Page not found</p>
    <h1>This page isn’t in our collection.</h1>
    <p>Check the address or head back to the shop.</p>
    <Link className="button button-primary" to="/">Back to the shop</Link>
  </section>
);

export default NotFound;
