import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => { // Add product to basket by SKU and size
      const { product, size, quantity } = action.payload
      const productIndex = state.basketItems.findIndex(item => item.product.SKU === product.SKU && item.size === size)
        if (productIndex !== -1) {
          state.basketItems[productIndex].quantity += quantity
        } else {
          state.basketItems.push({ product, size, quantity })
        }
        state.basketItems = state.basketItems
    },
    clearBasket: (state, action) => { // Clear basket
      state.basketItems = [];
    },
    deleteFromBasket: (state, action) => { // Delete product from basket by SKU and size
      const { product, size } = action.payload
      const productIndex = state.basketItems.findIndex(item => item.product.SKU === product.SKU && item.size === size)
      if (productIndex !== -1) {
        state.basketItems.splice(productIndex, 1)
      }
      state.basketItems = state.basketItems
    },
  },
});

export const { addToBasket, clearBasket, deleteFromBasket } = basketSlice.actions;
export default basketSlice.reducer;
