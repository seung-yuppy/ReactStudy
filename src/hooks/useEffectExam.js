import React, { useState, useEffect } from "react";

// useEffect
// 주로 관리하는 예시는 
// 1. 데이터 가져오기시 사용
// 2. DOM direct update
// 3. timer

// useEffect의 기본양식
// 1.
// useEffect(() => {
// 언제나 랜더링 
// })
// 2.
// useEffect(() => {
// 처음만 실행
// }, [])
// 3.
// useEffect(() => {
// 처음 랜더링시 실행
// 상태값이 변경될 때마다 실행
// }, [상태값])

// useEffect는 모든 랜더링에서 실행됨
// useEffect는 실행의 기준을 개발자가 잡아줄 필요가 있음
// (ex) 마운트 될 때만 실행시킨다던지, 마운트 업데이트 때만 실행시킨다던지 

// 화면을 킨지 ~초 지났습니다. 메세지를 1초마다 갱신하여 보여주세요
function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000)
    })

    return <h1>화면을 킨치 {count}초 지났습니다.</h1>
}

export default Timer;

function Counter() {
    const [count, setCount] = useState(1);
    const [cal, setCal] = useState(0);

    // 마운트시 실행
    useEffect(() => {
        setCal((count) => count + 2);
        console.log("실행");

        // 컴포넌트 언마운트를 제어할 수도 있음
        return () => {
            console.log("계산 완료!");
        }
    }, [count])

    // 컴포넌트가 사라질 때 실행
    return (
        <>
            <p>Count : {count}</p>
            <button onClick={() => setCount((count) => count + 1)}> + </button>
            <p>x2를 한 값 : {cal} </p>
        </>
    )
}

// export default Counter;

// 데이터를 요청하여 응답받은후 처리할 때 Effect를 활용
function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        async function fetchUser() {
            try {
                const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
                const data = await response.json();
                setUsers(Array.isArray(data) ? data : []);
            } catch (error) {
                console.error("에러발생 삐용삐용 ", error);
            }
        }
        fetchUser();
    }, []);

    console.log(users);

    return (
        <>
            {users && users.map((user) =>
                <div key={user.id}>
                    <h2>{user.id}번 {user.name}</h2>
                    <p>{user.email}</p>
                </div>
            )}
        </>
    )
}

// export default App;