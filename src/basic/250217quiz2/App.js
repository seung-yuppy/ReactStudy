// 요구사항 :
// 1. 메모 입력 및 목록 표시
//  - 메모 추가하기
//  - 메모 삭제하기
//  - 입력값이 비어있으면 추가 버튼 비활성화
// 2. 메모 목록 표시
//  - 메모가 없을 때 "메모가 없습니다." 표시
//  - 각 메모에 삭제 버튼 표시
// 3. 메모 개수 표시

import { useState } from "react";

export default function App() {
    const [memos, setMemos] = useState([]);
    const [content, setContent] = useState("");

    const handleAddMemo = (e) => {
        e.preventDefault();
        setMemos((prevMemos) => [...prevMemos, { id: Date.now(), content: content }]);
        setContent("");
    };

    const handleContent = (e) => {
        setContent(e.target.value);
    };

    const deleteMemo = (id) => {
        setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
    };

    console.log(memos)

    return (
        <>
            <MemoForm content={content} handleAddMemo={handleAddMemo} handleContent={handleContent} />
            <MemoList memos={memos} deleteMemo={deleteMemo} />
        </>
    );
};

const MemoForm = ({ content, handleAddMemo, handleContent }) => {
    return (
        <>
            <h1>메모 작성</h1>
            <form onSubmit={handleAddMemo}>
                <input type="text" placeholder="메모를 입력하세요~" value={content} onChange={handleContent} />
                <br />
                <button type="submit" disabled={!content}>메모 추가</button>
            </form>
        </>
    );
};

const MemoList = ({ memos, deleteMemo }) => {
    return (
        <>
            <h1>메모 목록 {memos.length > 0 && <>: {memos.length}개</>}</h1>
            {memos.length > 0 ? (
                <ul>
                    {memos.map((memo, index) => (
                        <li key={memo.id} style={{ listStyleType: "none" }}>
                            <span>{index + 1}번 글: {memo.content}</span>
                            <button onClick={() => deleteMemo(memo.id)} aria-label="메모 삭제">
                                삭제
                            </button>
                        </li>
                    ))}
                </ul>
            ) : (
                <h2>메모가 없습니다.</h2>
            )}
        </>
    );
};