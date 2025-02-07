import React, { useState } from "react";

// 요구사항:
// 1. "한국어", "영어", "일본어" 버튼을 만드세요
// 2. 각 버튼을 클릭하면 해당 언어로 인사말이 표시되게 만드세요
//    - 한국어: 안녕하세요
//    - 영어: Hello
//    - 일본어: こんにちは
// 3. 현재 선택된 언어를 표시하세요
// 4. 처음 페이지가 로드될 때는 "언어를 선택해주세요"라고 표시하세요
function Quiz1() {
    const [msg, setMsg] = useState("");

    const setKor = () => {
        setMsg("안녕하세요");
    }
    const setEng = () => {
        setMsg("Hello");
    }
    const setJap = () => {
        setMsg("こんにちは");
    }

    return (
        <>
            {msg ? <h2>{msg}</h2> : <h2>언어를 선택해주세요!</h2>}
            <button onClick={setKor}>한국어</button>
            <button onClick={setEng}>영어</button>
            <button onClick={setJap}>일본어</button>
        </>
    );
}

export default Quiz1;

// 요구사항:
// 1. "안녕하세요" 텍스트를 보여주세요
// 2. 크게, 작게 버튼을 만드세요
// 3. 크게 버튼을 누르면 글자가 5px씩 커지고, 작게 버튼을 누르면 5px씩 작아지게 만드세요
// 4. 현재 폰트 크기를 px 단위로 함께 표시해주세요
function Quiz2() {
    const [size, setSize] = useState(20);

    const smallSize = () => {
        setSize((size) => size - 5)
    }
    const bigSize = () => {
        setSize((size) => size + 5)
    }

    return (
        <>
            <div>
                <button onClick={smallSize}>작게</button>
                <button onClick={bigSize}>크게</button>
                <h2>현재 폰트 크키는 {size}px입니다.</h2>
            </div>
            <h2 style={{ fontSize: `${size}px` }}>안녕하세요</h2>
        </>
    );
}

// export default Quiz2;