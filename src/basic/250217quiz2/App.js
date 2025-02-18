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
import styled from "styled-components";

export default function App() {
    const [memos, setMemos] = useState([]);

    const addMemo = (content) => {
        setMemos((prevMemos) => [...prevMemos, { id: Date.now(), content: content }]);
    };

    const deleteMemo = (id) => {
        setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
    };

    console.log(memos)

    return (
        <>
            <MemoForm addMemo={addMemo} />
            <MemoList memos={memos} deleteMemo={deleteMemo} />
        </>
    );
};

const MemoForm = ({ addMemo }) => {
    const [content, setContent] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addMemo(content);
        setContent("");
    };

    return (
        <Wrapper>
            <h1>메모 작성</h1>
            <Memoform onSubmit={handleSubmit}>
                <Addinput type="text" placeholder="메모를 입력하세요~" value={content} onChange={(e) => setContent(e.target.value)} />
                <Addbtn type="submit" disabled={!content}>ADD</Addbtn>
            </Memoform>
        </Wrapper>
    );
};

const MemoList = ({ memos, deleteMemo }) => {
    return (
        <Wrapper>
            <h1>메모 목록 {memos.length > 0 && <>: {memos.length}개</>}</h1>
            {memos.length > 0 ? (
                <List>
                    {memos.map((memo, index) => (
                        <Listitem key={memo.id} style={{ listStyleType: "none" }}>
                            <span>{index + 1}번 메모: {memo.content}</span>
                            <Deletebtn onClick={() => deleteMemo(memo.id)} aria-label="메모 삭제">
                                DEL
                            </Deletebtn>
                        </Listitem>
                    ))}
                </List>
            ) : (
                <h2>메모가 없습니다.</h2>
            )}
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
`;

const Memoform = styled.form`
    border: 1px solid #f0f0f0;
    padding: 20px;
    display: flex;
    align-items: center;
    box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.13);
`;

const Addinput = styled.input`
    flex-grow: 1;
    padding: 10px;
    border-radius: 16px;
    border: 1px solid #ccc;
    margin-right: 10px;
`;

const Addbtn = styled.button`
    padding: 10px 20px;
    border-radius: 16px;
    border: none;
    background-color: ${(props) => (props.disabled ? '#ccc' : '#2979ff')};
    color: #fff;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 15px;
    background: #2979ff;
`;

const Listitem = styled.li`
    display: flex;
    gap: 10px;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #333;
    font-weight:bold;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 16px;
`;

const Deletebtn = styled(Addbtn)`
    background-color:crimson;
    padding: 10px;
`;