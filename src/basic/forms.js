import React, { useState } from "react";

function Formtest() {
    // const [name, setName] = useState("");
    const [inputs, setInputs] = useState({});   // 객체의 초기값을 설정하기 위해 {}를 useState() 안에 넣었음

    const submitTest = (event) => {
        event.preventDefault();
        console.log(inputs);
    };

    const handleChange = (event) => {
        const name = event.target.name; // 현재 입력된 필드의 name값 --> 객체에서 key로 사용될 예정
        const value = event.target.value; // 현재 입력된 필드의 value값 --> 객체에서 value로 사용될 예정

        // values는 이전 상태값들을 나타낸다, 대괄호를 사용하여 객체의 키를 동적으로 정의한다(현재 input으로 2개 이상의 key:value값을 갖고 오기 때문에 동적으로 정의함)
        // 만약에 [name]을 쓰지 않고 name으로 키를 동적으로 정의하지 않으면 마지막에 있는 key로만 선언되고 value 또한 마지막 값만 가져온다(이전 데이터는 덮어씌워진다 키값이 동일하기 때문에)
        // values는 React가 제공하는 이전 상태값으로 기존 데이터를 복사해 새로운 객체를 생성하기 위해서는 스프레드 연산자(...)을 사용한다.
        setInputs((values) => ({ ...values, [name]: value }))
    };

    return (
        <>
            <form onSubmit={submitTest}>
                <label> 이름을 입력하세요:
                    <input type="text" name="username" value={inputs?.username} onChange={handleChange} />
                </label>
                <br />
                <label> 나이을 입력하세요:
                    <input type="text" name="age" value={inputs?.age} onChange={handleChange} />
                </label>
                <br />
                <input type="submit" />
            </form>
        </>

    );
}

// export default Formtest;

function UserForm() {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [submittedData, setSubmittedData] = useState({});

    const handleSubmit = (e) => {
        e.preventDefault();  // 폼이나 데이터를 전송할 때 기존의 이벤트를 중단시켜야 오류가 많이 안생길듯...
        if (age > 0) {
            setSubmittedData({ name, age });  // 객체 타입(key:value) 형태로 상태값이 바뀐 name, age를 submittedData에 저장함
            console.log(submittedData);
            setName("");
            setAge("");
        } else {
            alert("나이는 0 이상 입력해야합니다!");
        }
    };

    return (
        <>
        {/* 값을 변경하는 이벤트로는 const로 선언해서 인라인에 붙이는 방법이 있고 useState로 직접 set함수로 변경하는 방법이 있다 */}
            <form onSubmit={handleSubmit}>
                <label>이름:
                    <input type="text" value={name} name="username" onChange={(e) => setName(e.target.value)} />    
                </label>
                <br />
                <label>나이:
                    <input type="text" value={age} name="age" onChange={(e) => setAge(e.target.value)} />
                </label>
                <br />
                <button type="submit">HI</button>
            </form>
            {submittedData && <h2>제 이름은 {submittedData?.name}이고, 제 나이는 {submittedData?.age}입니다</h2>}
        </>
    );
}

// export default UserForm;

function SelectBoxTest() {
    const [sel, setSel] = useState("test3");

    const selChange = (event) => {
        setSel(event.target.value);
        console.log(event.target.value);
        console.log(sel);
    }

    return (
        <form>
            {/* <select value={sel} onChange={selChange}> */}
            <select value={sel} onChange={(e) => setSel(e.target.value)}>
                <option value="test1">test1</option>
                <option value="test2">test2</option>
                <option value="test3">test3</option>
            </select>
        </form>
    );
}

export default SelectBoxTest;