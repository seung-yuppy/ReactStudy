// 커스텀 훅 : 상태로직을 재사용할 수 있도록 하는 기능
// 함수이름을 정의해놓고 useState, useEffect 등을 사용하여 구현

// 커스텀 훅은 컴포넌트 재사용성의 궁극의 정수
//  --> 기존 컴포넌트 구성코드의 중복도 줄일 수 있다는 장점이 있음
//  --> API 호출, 폼데이터 관리, 중복되는 애니메이션 기능들을 커스텀 훅으로 만들어서 사용

// 리액트 프로젝트의 일반적 폴더구조
// src
//  --> component (UI 컴포넌트 저장 폴더)
//  --> hooks (커스텀 훅 저장 폴더)
//  --> utils (유틸리티 함수 저장 폴더)
//  --> pages (페이지 컴포넌트 저장 폴더)
//  --> styles (css, scss)
//  --> assets (이미지, 폰트 등의 정적 파일)
//  --> context (리액트 컨텍스트 저장 폴더)

// 폴더구조에서 커스텀 훅과 유틸을 나눈 이유
// 커스텀 훅은 react훅을 활용하여 공통적 코드를 처리
//  --> 컴포넌트의 상태, 라이프사이클 영향을 많이 받음
// 유틸은 react와 무관한 코드들, 어디서나 호출되면서 컴포넌트에 종속x
//  --> 단순한 JS

// 커스텀 훅 특징
// 재사용성, 캡슐화(코드 보안), 모듈성

// 커스텀훅의 규칙
import React from "react";
import { useFetch } from "./customHook.js";

function LoadData() {
    // 이 부분을 커스텀 훅으로 변경
    // 요청은 이 파일에서 진행
    // 커스텀 훅을 따로 분리해서 그 다음 붙이기

    const [data] = useFetch("https://jsonplaceholder.typicode.com/todos");

    return (
        <>
            {data && data.map((item, index) => {
                return <p key={item.id}>{index}번 {item.title}</p>;
            })}
        </>
    );
}

export default LoadData;