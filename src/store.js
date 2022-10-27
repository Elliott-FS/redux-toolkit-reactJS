import { configureStore, createReducer } from '@reduxjs/toolkit'
import './features/cart/cartSlice';
export const store = configureStore({
    reducer: {
        cart: createReducer,
    },
});
