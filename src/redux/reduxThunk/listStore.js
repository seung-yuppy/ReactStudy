import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./listSlice";
import { createLogger } from "redux-logger";

// 미들웨어 활용예시
const logger = createLogger();

const middlewares = [];
if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

export const liststore = configureStore({
    reducer: {
        posts: postReducer,
    },

    // action이 dispatch 되기 전 상태를 추적
    // dispatch된 action 정보 출력
    // action처리 후 새로운 상태 출력
    // 개발환경에서만 사용하도록 설정 가능
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
})