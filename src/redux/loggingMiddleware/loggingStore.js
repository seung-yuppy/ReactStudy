import { configureStore } from "@reduxjs/toolkit";
import createLoggingMiddleware from "./loggingMiddleware";
import postReducer from "./listSlice";


export const loggingStore = configureStore({
    reducer: {
        posts: postReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createLoggingMiddleware({
                actionTypes: ['posts/fetchPosts/fulfilled'], // 특정 액션만 로깅
                development: process.env.NODE_ENV === 'development'
            })
        )
});