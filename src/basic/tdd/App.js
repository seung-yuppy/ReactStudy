// 퀴즈(만약 너무 어려우면 바닐라JS로 푸는것도 허용)
//  - 버튼 2개를 생성
//  -  +, -
//  - 값을 출력하는 영역도 정의
//  - +를 눌렀을때 최대 증가값 100
//  - -를 눌렀을때 최소값 1

import { useState } from "react";


function App() {
    const [num, setNum] = useState(0);

    const up = () => {
        if (num < 100) {
            setNum((num) => num + 1);
        }
    };

    const down = () => {
        if (num > 0) {
            setNum((num) => num - 1);
        }
    }

    return (
        <>
            {num}
            <br />
            <button onClick={down}>-</button>
            <button onClick={up}>+</button>
        </>
    )
}

export default App;