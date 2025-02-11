// 요구사항:
// 1. 현재 값과 이전 값을 비교하여 표시하는 컴포넌트를 만드세요
// 2. 값이 증가했는지 감소했는지 화살표로 표시하세요 (↑ 또는 ↓)
// 3. 변화량도 함께 표시하세요
// 4. 첫 렌더링시에는 이전 값 대신 "-"를 표시하세요

import React from "react";
import { useEffect, useRef, useState } from "react";

function ValueTracker() {
    // 여기에 코드를 작성하세요
    const [value, setValue] = useState(0);
    const prev = useRef(0);

    useEffect(() => {
        prev.current = value;
    }, [value]);

    return (
        <>
            <input type="number" value={value} onChange={(e) => setValue(e.target.value)} />
            <h1>현재값 : {value}</h1>
            {prev.current !== 0 ? <h1>이전값 : {prev.current}</h1> : <h1>이전값 : -</h1>}
            <div style={{ display: "flex", gap: "10px" }}>
                <h1>변화량 :  {value - prev.current !== 0 ? value - prev.current : "-"}</h1>
                {value - prev.current > 0 ? <h1>↑</h1> : <h1>↓</h1>}
            </div>
        </>
    );
}

export default ValueTracker;