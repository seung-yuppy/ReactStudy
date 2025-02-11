import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";

export const themestore = configureStore({
    reducer: {
        theme: themeReducer,
    }
})