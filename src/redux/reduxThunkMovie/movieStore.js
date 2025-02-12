import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice";

export const movieStore = configureStore({
    reducer: {
        movies: movieReducer,
    }
});