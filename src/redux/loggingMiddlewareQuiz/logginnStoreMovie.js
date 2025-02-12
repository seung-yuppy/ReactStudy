import { configureStore } from "@reduxjs/toolkit";
import createLoggingMiddleware from "./loggingMovie";
import movieReducer from "./movieSlice";

export const loggingStore = configureStore({
    reducer: {
        movies: movieReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(createLoggingMiddleware())
});