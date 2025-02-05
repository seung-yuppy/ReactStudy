import React from "react";
import "./test.moule.css";
import "./test.scss";   // sass/scss 인식을 못하면 npm i sass

function App() {
    // JS객체 방식
    const freeStyle = {
        color: "white",
        backgroundColor: "crimson",
        padding: "15px",
        fontFamily: "Sans-Serif",
    };

    return (
        <>
            <h1 style={{ color: "lightgreen" }}>Hi Inline</h1>
            <h1 style={freeStyle}>Hello JS객체</h1>
            <h1 className="test">Hi Hello .Module.CSS</h1>
            <h1 className="sasstest">What? 바로 SCSS가 된다고?</h1>
            <h1>Good Bye 비교용</h1>
        </>
    );
}

export default App;