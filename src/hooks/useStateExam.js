// useState의 경우는 익숙치 않아서 처음에는 어색한 느낌이 들음
// 컴포넌트의 변수값 관리라고 생각
// 클래스 만들 때 필드 + 메서드를 만들었음
// useState를 통해서 이 부분을 요약해서 진행

import React, { useState } from "react";

function App() {
    // state는 필요한 만큼 선언해서 컴포넌트 내부의 변수값을 컨트롤함
    const [name, setName] = useState('');
    const [age, setAge] = useState(0);
    const [hobby, setHobby] = useState('');
    const [data, setData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({ name, age, hobby });
        setName("");
        setAge("");
        setHobby("");
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={name}
                    name="username"
                    onChange={(e) => setName(e.target.value)}
                    placeholder="이름을 입력하세요"
                />
                <input
                    type="number"
                    name="age"
                    value={age}
                    onChange={(e) => setAge(Number(e.target.value))}
                    placeholder="나이를 입력하세요"
                />
                <input
                    type="text"
                    name="hobby"
                    value={hobby}
                    onChange={(e) => setHobby(e.target.value)}
                    placeholder="취미를 입력하세요"
                />
                <button type="submit">입력</button>
            </form>
            <div>
                <h2>나는 {data.name}입니다. {data.age}이고, 취미는 {data.hobby}입니다.</h2>
            </div>
        </>
    );
}

export default App;