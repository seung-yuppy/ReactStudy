import { useState } from "react";

function CommentList({ data, deleteComment, editComment, newReplyComment }) {
    const [newComment, setNewComment] = useState("");
    const [editId, setEditId] = useState(null);
    const [newReply, setNewReply] = useState("");
    const [replyId, setReplyId] = useState(null);

    // 수정 버튼 눌러서 수정모드 들어가는 메서드
    const handleEditClick = (reply) => {
        setNewComment(reply.comment);
        setEditId(reply.id);
    };

    // 수정 완료 후 수정된 댓글 보내는 메서드
    const handleEditSubmit = (id) => {
        editComment(id, newComment);
        setNewComment("");
        setEditId(null);
    };

    // 해당 댓글의 대댓글을 다는 모드로 들어가는 메서드
    const handleNewReply = (reply) => {
        setReplyId(reply.id);
    };

    // 대댓글을 보내는 메서드
    const handleReplySubmit = (id) => {
        newReplyComment(id, newReply);
        setNewReply("");
        setReplyId(null);
    };

    return (
        <>
            <div>
                <h3>댓글목록</h3>
                {data.replies.map((reply) => (
                    <li key={reply.id}>
                        {editId === reply.id ? (
                            <>
                                <input
                                    type="text"
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                />
                                <button onClick={() => handleEditSubmit(reply.id)}>완료</button>
                            </>
                        ) : (
                            <>
                                <div>
                                    <span>{reply.comment}</span>
                                    <h4>대댓글</h4>
                                    {reply.replies && reply.replies.length > 0 ? (
                                        reply.replies.map((newreply) => (
                                            <p key={newreply.id}>{newreply.comment}</p>
                                        ))
                                    ) : (
                                        <p>대댓글이 없습니다.</p>
                                    )}
                                </div>
                                <button onClick={() => handleNewReply(reply)}>대댓글</button>
                                <button onClick={() => handleEditClick(reply)}>수정</button>
                                <button onClick={() => deleteComment(reply.id)}>삭제</button>
                                {replyId === reply.id && (
                                    <>
                                        <input
                                            type="text"
                                            value={newReply}
                                            onChange={(e) => setNewReply(e.target.value)}
                                            placeholder="대댓글을 입력하세요"
                                        />
                                        <button onClick={() => handleReplySubmit(reply.id)}>저장</button>
                                    </>
                                )}
                            </>
                        )}
                    </li>
                ))}
            </div >
        </>
    );
}

export default CommentList;