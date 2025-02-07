import React from "react";
// 조건부 랜더링
// React는 조건부의 랜더링 기준이 컴포넌트 단위도 가능

// function MissGoal() {
//     return <h1>아깝네 ㅋ</h1>;
// }

// function CorrectGoal() {
//     return <h1>축하요 ㅋ</h1>;
// }

// function App(props) {
//     // index.js에서 root.render(<Condition isGoal={true} />)에서 isGoal은 props.isGoal과 연결된다.
//     let isGoal = props.isGoal;
//     if (isGoal) {
//         return <CorrectGoal />;
//     }
//     return <MissGoal />;
// }

function App(props) {
    console.log(props);
    const test = props.test;
    return (
        <>
            <h1>파라미터로 받아온 배열 요소의 개수</h1>
            {test.length > 0 && <h2>배열 요소의 개수는 {test.length}개 입니다.</h2>}
            {/* {test.length > 0 ? <h2>배열 요소의 개수는 {test.length}개 입니다.</h2> : ""} */}
        </>
    );
}

export default App;
