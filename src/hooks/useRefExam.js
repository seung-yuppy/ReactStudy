import React, { useState, useEffect, useRef } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const timerId = useRef(null); // 타이머 ID 저장

    const startTimer = () => {
        if (!timerId.current) {
            timerId.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        clearInterval(timerId.current);
        timerId.current = null; // 타이머 ID 초기화
    };

    const resetTimer = () => {
        stopTimer();
        setSeconds(timerId.current = 0);
    }

    useEffect(() => {
        return () => clearInterval(timerId.current); // 컴포넌트 언마운트 시 타이머 정리
    }, []);

    return (
        <div>
            <h1>타이머: {seconds}초</h1>
            <button onClick={startTimer}>시작</button>
            <button onClick={stopTimer}>정지</button>
            <button onClick={resetTimer}>초기화</button>
        </div>
    );
}

// export default Timer;

// ref를 활용하여 input창에 입력한 숫자의 개수를 체크하려 했으나 내용을 지울 때에도 카운트가 올라가는 것을 확인할 수 있었음
// --> 이유 : Ref의 카운트는 랜더링시 올라감
function App() {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);

    useEffect(() => {
        count.current = count.current + 1;
    });

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h1>Render Count: {count.current}</h1>
        </>
    );
}

// export default App;

// current : 현재값
function MagicBox() {
    const boxRef = useRef();

    const changeColor = () => {
        // boxRef.current : 요소 선택 / style.backgroundColor : DOM traversing
        // 랜덤 숫자에 16진수 색상 코드로 만들기(소수점을 없애기 위해 floor 사용)
        boxRef.current.style.backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    };

    return (
        <div>
            <div
                ref={boxRef}
                style={{
                    width: '250px',
                    height: '250px',
                    backgroundColor: 'steelblue',
                    margin: '25px',
                }}
            />
            <button onClick={changeColor}>상자색 바꾸기</button>
        </div>
    );
}

// export default MagicBox;

function FocusInput() {
    const inputRef = useRef();

    const handleTwinkle = () => {
        console.log(inputRef);
        inputRef.current.focus();
    }

    return (
        <div>
            <input
                type="text"
                placeholder="여기에 글자를 써보세요"
                ref={inputRef}
            />
            <button onClick={handleTwinkle}>입력창 반짝이게 하기</button>
        </div>
    )
}

// export default FocusInput;

function App2() {
    const [inputValue, setInputValue] = useState("");
    const previousInputValue = useRef("");

    useEffect(() => {
        previousInputValue.current = inputValue;
    }, [inputValue]);

    return (
        <>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <h2>Current Value: {inputValue}</h2>
            <h2>Previous Value: {previousInputValue.current}</h2>
        </>
    );
}


export default App2;