
function CommentList({ data, deleteComment }) {
    return (
        <>
            <div>
                <h3>댓글목록</h3>
                {data.replies.map((reply) => (
                    <li key={reply.id}>
                        {reply.comment}
                        <button onClick={() => deleteComment(reply.id)}>삭제</button>
                    </li>
                ))}
            </div >
        </>
    );
}

export default CommentList;