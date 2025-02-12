import { configureStore } from "@reduxjs/toolkit";
import shopReducer from "./shopSlice";

export const shopstore = configureStore({
    reducer: {
        shop: shopReducer,
    }
});