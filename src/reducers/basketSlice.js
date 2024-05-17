import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basketItems: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const { product, size, quantity } = action.payload
      const productIndex = state.basketItems.findIndex(item => item.product.SKU === product.SKU && item.size === size)
        if (productIndex !== -1) {
          state.basketItems[productIndex].quantity += quantity
        } else {
          state.basketItems.push({ product, size, quantity })
        }
        state.basketItems = state.basketItems
    },
    clearBasket: (state, action) => {
      state.basketItems = [];
    },
    deleteFromBasket: (state, action) => {
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
