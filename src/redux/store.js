// Redux toolkit의 configureStore 함수를 가져옴
// redux의 스토어 설정시 사용하는 함수
import { configureStore } from "@reduxjs/toolkit";

// counterSlice에서 만든 reducer를 가져올 때 사용
import counterReducer from "./counterSlice";

// 어플리케이션이 시작되면 스토어가 생성됨
// configureStore가 Redux 스토어를 생성해줌
export const store = configureStore({
    reducer: {
        // counter라는 키 값으로 counterReducer를 등록
        // 스토어의 상태 구조를 결정
        counter: counterReducer,
    }
    // configureStore는 자동으로 Redux DevTools Extension 연결과 reduxt-thunk 미들웨어를 추가해줌
    // 또한 개발환경에서의 오류 체크도 가능함
});