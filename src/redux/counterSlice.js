// reducer + 액션 생성자를 한번에 만들어주는 함수
import { createSlice } from "@reduxjs/toolkit";

// 초기에는 initialState를 통해 초기 상태 설정이 진행
const couterSlice = createSlice({
    // name 속성은 슬라이스의 이름을 정의할 때 사용
    name: 'counter',
    // slice의 초기값 정의(초기상태 정의)
    initialState: {
        value: 0
    },
    // 상태변경 함수들의 정의
    // 이 파일은 Counter.js의 dispatch로 부터 이벤트 실행을 받아옴
    reducers: {
        increament: (state) => {
            state.value += 1;
        },
        decreament: (state) => {
            state.value -= 1;
        },
        // action 파라미터는 dispatch된 액션 객체 자체를 의미
        // 여기서의 action객체는 counter.js의 이 함수 옆에 써둔 인수 5
        // action.payload속성에 증가시킬값 5를 담고 있음
        increamentByAmount: (state, action) => {
            state.value += action.payload;
        },
        decreamentByAmount: (state, action) => {
            state.value -= action.payload;
        }
    }
});

// createSlice가 생성한 액션 생성자 함수를 배출
//      --> 컴포넌트에서 액션 dispatch시 사용
// counter.js파일에서는 해당 액션들을 인식을 해야 dispatch를 통해 전달이 가능
export const { increament, decreament, increamentByAmount, decreamentByAmount } = couterSlice.actions;

// createSlice가 생성한 reducer를 내보냄
// store 설정시 사용
export default couterSlice.reducer;