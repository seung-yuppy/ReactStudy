// 간단한 카운팅 어플

import { useDispatch, useSelector } from "react-redux";
import { increament, decreament, increamentByAmount, decreamentByAmount } from "./counterSlice";

// useSelector : 스토어의 상태를 조회하는 hook!
function Counter() {
    // 현재 카운터 값 자체를 subscribe(가지고 있음)
    // 아래 두 줄 코드는 값을 세팅해두고 상태변화가 생기기 전까지 대기
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <>
            <div>
                <h2>카운팅 : {count}</h2>
                <button onClick={() => dispatch(increament())}>증가</button>
                <button onClick={() => dispatch(decreament())}>감소</button>
                <button onClick={() => dispatch(increamentByAmount(5))}>5증가</button>
                <button onClick={() => dispatch(decreamentByAmount(5))}>5감소</button>
            </div>
        </>
    );
}

export default Counter;