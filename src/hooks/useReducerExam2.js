import React, { useReducer } from "react";

// 캐릭터의 기본정보
const INITIAL_STATE = {
    hp: 100,
    level: 1,
    items: [],
}

// 캐릭터가 기본적으로 취할 수 있는 행동
const ACTIONS = {
    HEAL: "체력회복",
    DAMAGE: "데미지",
    LEVEL_UP: "레벨업",
    GET_ITEM: "아이템획득"
}

const gameReducer = (state, action) => {

}

function Character1() {
    const [character, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return (
        <div>
            <h1>캐릭터 정보</h1>
            <p>체력 : {character.hp}</p>
            <p>레벨 : {character.level}</p>
            <p>아이템 :{character.items}</p>

            <button onClick={() => dispatch({ type: ACTIONS.HEAL })}>포션 먹기</button>
            <button onClick={() => dispatch({ type: ACTIONS.DAMAGE })}>공격 당하기</button>
            <button onClick={() => dispatch({ type: ACTIONS.LEVEL_UP })}>레벨 업</button>
        </div>
    );
}

export default Character1;