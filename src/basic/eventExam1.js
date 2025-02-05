import React, { useState } from "react";

// 실습 예시1
// function Quiz() {
//     const [msg, setMsg] = useState("하이용");

//     let quizEvt = () => {
//         if (msg === "하이용") {
//             setMsg("안녕히 가세용!");
//         } else {
//             setMsg("하이용");
//         }
//     };

//     return <button onClick={quizEvt}>{msg}</button>;
// }

// export default Quiz;

// 실습 예시2
// 1. 특문(☆) 이모티콘과 숫자를 보여주는 컴포넌트를 만드세요
// 2. 이모티콘을 클릭할 때마다 숫자가 1씩 증가해야 해요
// 3. 숫자가 10이 되면 "최대 클릭 수에 도달했습니다!"라는 메시지를 표시하세요
function Quiz2() {
    // 배열의 비구조화 할당 문법
    const [count, setCount] = useState(0);
    const [msg, setMsg] = useState("");

    const addCount = () => {
        if (count < 10) {
            // setCount((count) => count + 1); 와 setCount(count + 1);의 차이는 count를 확장할수있는가
            setCount((count) => count + 1);
        } else {
            setMsg("최대 클릭수에 도달함");
        }
    };

    return (
        <div>
            <div onClick={addCount}>☆ {count}</div>
            {/* <p>{msg}</p> */}
            {/* {count === 10 && <p>최대 클릭수에 도달함</p>} */}
            {count === 10 ? <p>최대 클릭수에 도달 뿜뿜!!</p> : ""}
        </div>
    );
}

export default Quiz2;
