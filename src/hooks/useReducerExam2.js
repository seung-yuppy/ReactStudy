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

// 리액트에서는 스프레드 연산자(...)를 자주보게됨
// 이유 : 리액트 불변성 원칙 때문
//  --> 리액트의 특성(가상 DOM을 사용하는 특성)은 기존상태를 직접 수정했을 시 변화감지를 못함
//  --> 리랜더링이 제대로 발생하지 않을 수 있음
// 스프레드 연산자를 사용해서 기존의 객체를 복사(?)해 오고 값을 변경한 것을 추가한다
const gameReducer = (state, action) => {
    switch (action.type) {
        case "체력회복":
            return {
                // 기존의 상태를 복사하고 새로운 데이터 변화를 추가함
                ...state, hp: state.hp + 10
            };
        case "데미지":
            return {
                ...state, hp: state.hp - 10
            };
        case "레벨업":
            return {
                ...state, level: state.level + 1
            };
        case "아이템획득":
            return {
                ...state, items: [...state.items, action.item1, action.item2]
            };
        default:
            return state;
    }
};

function Character1() {
    const [character, dispatch] = useReducer(gameReducer, INITIAL_STATE);

    return (
        <div>
            <h1>캐릭터 정보</h1>
            <p>체력 : {character.hp}</p>
            <p>레벨 : {character.level}</p>
            <p>아이템 :{character.items.join(', ')}</p>

            <button onClick={() => dispatch({ type: ACTIONS.HEAL })}>포션 먹기</button>
            <button onClick={() => dispatch({ type: ACTIONS.DAMAGE })}>공격 당하기</button>
            <button onClick={() => dispatch({ type: ACTIONS.LEVEL_UP })}>레벨 업</button>
            <button onClick={() => dispatch({ type: ACTIONS.GET_ITEM, item1: '집행자의 검', item2:"지옥의 쇠사슬" })}>아이템 획득</button>
        </div>
    );
}

export default Character1;