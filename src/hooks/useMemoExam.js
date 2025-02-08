import React, { useCallback, useMemo, useState } from "react";
import Todos from "./useMemoTodo.js";

// 구성요소 랜더링 관리 기법
//  --> props(컴포넌트에 전달되는 파라미터)가 전달(변경)이 되지 않으면 react가 구성요소 렌더링을 생략

// useMemo, useCallback === 메모장
//  --> 메모리에 값을 등록하여 다시 계산할 필요가 없도록 하는 개념
// useMemo, useCallback의 사용이유
//  --> 성능 최적화, 불필요한 실행 방지

// memo - 계산한 값을 기억하는 hook
//  --> 답을 미리 계산해뒀다가 필요할 때 꺼내보는 개념
// callback - 함수 자체를 기억하는 hook
//  --> 문제풀이 자체를 기억하는 개념

// useMemo Hook이 있고 리액트에는 Memo라는 개념도 존재
//  --> 결과를 기억하는 기법(메모리제이션)
//  --> 컴포넌트의 리랜더링 없이 마지막으로 랜더링된 결과를 재사용한다
//  --> state, context가 변할 때 리랜더링됨

// useMemo, useCallback은 메모리 관리 전략
// 주의사항
// 1. 남용하면 안쓰느니만 못함
//      --> 복잡한 코드에서 강력한 성능 전략을 발휘하는거지 단순연산에서는 의미x
// 2. 의존성 배열의 관리 필요
//      --> 필요한 의존성만 포함시켜야함, 객체나 배열을 가능한 분해하여 사용
// 3. 의존성 배열을 함수형 업데이트(set~)를 활용하면 줄일 수도 있음

// useCallback의 예시
function Calbak() {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount((count) => count + 1)
    };

    // 필요할 때만 랜더링되도록 useCallback hook을 활용
    //  -> 요약하자면 addTodo는 요청했을 때만 다시 랜더링되도록 처리
    const addTodo = useCallback(() => {
        setTodos((todos) => [...todos, "새로운 할 일"]);
        // 의존성 배열을 통해 todos의 변경을 감지했을 때만 처리되도록 진행
    }, [todos]);

    return (
        <>
            <Todos todos={todos} addTodo={addTodo} />
            <div>
                Count : {count}
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

// export default Calbak;

function SquCal() {
    const [number, setNumber] = useState(0);

    // squareNumber와 memoSquare는 결과 자체는 똑같지만 둘의 차이는 
    // squareNumber는 그 어떤 이벤트가 발생되어도 리랜더링되지만
    // memoSquare는 말 그대로 계산시에만 리랜더링된다는 차이점이 있음
    // --> memo, useMemo Hook은 불필요한 실행을 막을 수 있다는 장점이 있음

    // 매번 결과 리턴
    const squareNumber = number * number;

    // 메모 활용
    const memoSquare = useMemo(() => {
        console.log("지금 계산 중...");
        return number * number;
    }, [number]);

    return (
        <div>
            <input type="number" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
            <p>제곱값 : {squareNumber} </p>
            <p>메모 제곱값 : {memoSquare} </p>
        </div>
    );
}

export default SquCal;

// useMemo, useCallback을 활용하는 리액트 성능 최적화 전략
// 1. 의존성 배열의 선언과 최적화
// function OptimizedComponent({ data, onUpdate }) {
//     // 의존성 배열에 필요한 값만 포함
//     const processData = useCallback(() => {
//         // 데이터 처리 로직
//     }, [data]); // onUpdate는 제외

//     const heavyCalculation = useMemo(() => {
//         // 복잡한 계산 로직
//     }, [data.id]); // data 전체가 아닌 필요한 속성만 포함
// }

// 2. 조건문 메모리제이션
// function ConditionalMemo({ data, threshold }) {
//     const expensiveValue = useMemo(() => {
//         if (data.length < threshold) {
//             // 데이터가 적을 때는 직접 계산
//             return calculateSimple(data);
//         }
//         // 데이터가 많을 때만 메모이제이션 사용
//         return calculateComplex(data);
//     }, [data, threshold]);
// }

// 3. 중첩 메모리제이션 처리
// function NestedMemoization({ data }) {
    // 1단계 데이터 처리
//     const processedData = useMemo(() => {
//       return data.map(item => ({
//         ...item,
//         processed: true
//       }));
//     }, [data]);
  
//     // 2단계 데이터 처리
//     const finalData = useMemo(() => {
//       return processedData.filter(item => item.value > 0);
//     }, [processedData]);
  
//     // 처리된 데이터를 사용하는 함수
//     const handleDataOperation = useCallback((id) => {
//       const item = finalData.find(item => item.id === id);
//       // 작업 수행
//     }, [finalData]);
  
//     return (
//       <div>
//         {finalData.map(item => (
//           <DataItem
//             key={item.id}
//             data={item}
//             onOperation={handleDataOperation}
//           />
//         ))}
//       </div>
//     );
//   }
