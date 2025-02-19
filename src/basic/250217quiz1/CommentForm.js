import { useState } from "react";
import styled from "styled-components";

function CommentForm({ addComment }) {
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(comment);
        setComment("");
    };

    return (
        <>
            <Commentform onSubmit={handleSubmit}>
                <Addinput
                    type="text"
                    placeholder="댓글을 입력하세요"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                />
                <Addbtn type="submit" disabled={!comment}>
                    Add
                </Addbtn>
            </Commentform>
        </>
    );
}

export default CommentForm;

const Commentform = styled.form`
    border: 1px solid #f0f0f0;
    border-radius: 5px;
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
    background-color: ${(props) => (props.disabled ? "#ccc" : "#2979ff")};
    color: #fff;
    cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
`;
