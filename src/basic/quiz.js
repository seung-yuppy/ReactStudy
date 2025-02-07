import React, { useEffect, useState } from "react";

// 개선사항 : 타입을 잘 맞춰주세요. 문자는 문자, 숫자는 숫자로

function Profile(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>나이: {props.age}</p>
        </div>
    );
}

function App() {
    return (
        <>
            <Profile name="철수" age={10} />
        </>
    );
}
// export default App;

// JSX 문법위반
function Greetinng({ isLoggedIn }) {
    return (
        <div>
            {isLoggedIn ? "환영합니다!" : "로그인해주세요"};
        </div>
    );
}

// export default Greetinng;


function Num() {
    const [num, setNum] = useState(0);
    const [color, setColor] = useState("");


    const setMinus = () => {
        setNum((num) => num - 1);
    }

    const setPlus = () => {
        setNum((num) => num + 1);
    }

    const getColor = () => {
        if (num > 0) {
            return "steelblue";
        } else if (num < 0) {
            return "red";
        } else {
            return "black";
        }
    }

    useEffect(() => {
        if (num > 0) {
            setColor("steelblue");
        } else if (num < 0) {
            setColor("red");
        } else {
            setColor("black");
        }
    }, [num]);

    return (
        <>
            <button onClick={setMinus}>-</button><span style={{ color: color, fontSize: "30px", padding: "20px"}}>{num}</span><button onClick={setPlus}>+</button>
        </>
    )
}

export default Num;