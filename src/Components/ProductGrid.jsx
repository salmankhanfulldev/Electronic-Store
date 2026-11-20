import { useDispatch, useSelector } from "react-redux";
import ProductCart from "./ProductCart";
import {
  clearProductFilters,
  setSelectedCategory,
} from "../Features/products/ProductSlice";

const ProductGrid = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredItems);
  const { searchTerm, selectedCategory } = useSelector((state) => state.product);
  const categories = ["All", "Laptops", "Monitors", "Audio", "Power Supply"];

  return (
    <>
      <div className="catalog-heading">
        <div>
          <p className="eyebrow">Find your next favorite</p>
          <h2>Shop the collection</h2>
        </div>
        <p className="catalog-count">{products.length} products</p>
      </div>
      <div className="category-list" aria-label="Filter by category">
        {categories.map((category) => (
          <button
            className={`category-button${selectedCategory === category ? " is-active" : ""}`}
            key={category}
            type="button"
            aria-pressed={selectedCategory === category}
            onClick={() => dispatch(setSelectedCategory(category))}
          >
            {category}
          </button>
        ))}
      </div>

      {products.length > 0 ? (
        <div className="product-grid">
          {products.map((product) => (
            <ProductCart key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h3>No products found</h3>
          <p>
            {searchTerm
              ? `We couldn't find anything for “${searchTerm}”. Try another search or clear your filters.`
              : "There are no products in this category yet. Browse all products instead."}
          </p>
          <button
            className="button button-secondary"
            type="button"
            onClick={() => dispatch(clearProductFilters())}
          >
            Clear filters
          </button>
        </div>
      )}
    </>
  );
};

export default ProductGrid;
