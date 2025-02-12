import { configureStore } from "@reduxjs/toolkit";
import { createApiCacheMiddleware } from "./apiCacheMiddleware";

export const store = configureStore({
    reducer: {

    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            createApiCacheMiddleware({
                maxAge: 5 * 60 * 1000, // 5분
                maxSize: 100, // 최대 100개 요청 캐시
                ignoreCacheQuery: 'fresh' // ?fresh=true로 캐시 무시 가능
            })
        )
});