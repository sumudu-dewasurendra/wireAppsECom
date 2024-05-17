import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "../reducers/basketSlice";
import { productsApiSlice } from "../reducers/api/productsAPI";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    [productsApiSlice.reducerPath]: productsApiSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(productsApiSlice.middleware)
});
