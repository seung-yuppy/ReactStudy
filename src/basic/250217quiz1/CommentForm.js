import { useState } from "react";

function CommentForm({ addComment }) {
    const [comment, setComment] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addComment(comment);
        setComment("");
    };

    return (
        <>
            <div>
                <h3>댓글 작성</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="댓글을 입력하세요" value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button type="submit">작성</button>
                </form>
            </div>
        </>
    );
}

export default CommentForm;