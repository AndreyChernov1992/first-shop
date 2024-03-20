import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/productSlice';
import cartReducer from './slice/cartSlice';

export default configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
