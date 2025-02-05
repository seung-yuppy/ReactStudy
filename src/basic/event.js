// JS에서 조금 개념을 추가했다 보면됨
// 특징 : 일반함수로 선언하기보다는 arrow function을 적극적으로 활용
// React에서도 이벤트 객체를 다룰 수 있음
// Vanila Js에서는 event라는 풀네임으로 작성해야했지만, react에서는 addEventListener를 쓰듯이 event를 e로 축약해서 사용해도 문제없음
import React from "react";

function Shoot() {
    let shot = (param1, event) => {
        alert(`사냥 시작이다! ${param1}`);
        console.log(event);
        console.log(event.type);
    }

    return (
        <button onClick={(e) => shot(" 가보자!", e)}>힘껏 치세요!</button>
    );
}

export default Shoot;