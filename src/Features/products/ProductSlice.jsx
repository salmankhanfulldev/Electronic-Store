import { createSlice } from "@reduxjs/toolkit";
import Products from "../../productContent";

const initialState = {
  items: Products,
  filteredItems: Products,
  searchTerm: "",
  selectedCategory: "All",
};

// search product and search categories

const filterProduct = (state) => {
  return state.items.filter((product) => {
    const searchableText =
      `${product.title} ${product.des} ${product.category}`.toLowerCase();
    const matchSearch = searchableText.includes(
      state.searchTerm.trim().toLowerCase()
    );
    const matchCategory =
      state.selectedCategory === "All" ||
      product.category === state.selectedCategory;
    return matchSearch && matchCategory;
  });
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
      state.filteredItems = filterProduct(state);
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
      state.filteredItems = filterProduct(state);
    },
    clearProductFilters: (state) => {
      state.searchTerm = "";
      state.selectedCategory = "All";
      state.filteredItems = state.items;
    },
  },
});

export const {
  setSearchTerm,
  setSelectedCategory,
  clearProductFilters,
} = productSlice.actions;
export default productSlice.reducer;
