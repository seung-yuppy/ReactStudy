import { useState } from "react";
import styled from "styled-components";

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
            <Wrapper>
                <h3>댓글목록</h3>
                <List>
                    {data.replies.map((reply) => (
                        <Listitem key={reply.id}>
                            {editId === reply.id ? (
                                <EditWrapper>
                                    <Addinput
                                        type="text"
                                        value={newComment}
                                        onChange={(e) =>
                                            setNewComment(e.target.value)
                                        }
                                    />
                                    <Addbtn
                                        onClick={() =>
                                            handleEditSubmit(reply.id)
                                        }
                                    >
                                        Edit
                                    </Addbtn>
                                </EditWrapper>
                            ) : (
                                <>
                                    <CommentBox>
                                        <Commentitem>
                                            {reply.comment}
                                            <Addbtn
                                                onClick={() =>
                                                    handleNewReply(reply)
                                                }
                                            >
                                                대댓글
                                            </Addbtn>
                                            <Addbtn
                                                onClick={() =>
                                                    handleEditClick(reply)
                                                }
                                            >
                                                수정
                                            </Addbtn>
                                            <Addbtn
                                                onClick={() =>
                                                    deleteComment(reply.id)
                                                }
                                            >
                                                삭제
                                            </Addbtn>
                                        </Commentitem>
                                        {reply.replies &&
                                        reply.replies.length > 0 ? (
                                            reply.replies.map((newreply) => (
                                                <Replyitem key={newreply.id}>
                                                    {newreply.comment}
                                                </Replyitem>
                                            ))
                                        ) : (
                                            <p>대댓글이 없습니다.</p>
                                        )}
                                    </CommentBox>

                                    {replyId === reply.id && (
                                        <EditWrapper>
                                            <Addinput
                                                type="text"
                                                value={newReply}
                                                onChange={(e) =>
                                                    setNewReply(e.target.value)
                                                }
                                                placeholder="대댓글을 입력하세요"
                                            />
                                            <Addbtn
                                                onClick={() =>
                                                    handleReplySubmit(reply.id)
                                                }
                                            >
                                                ADD
                                            </Addbtn>
                                        </EditWrapper>
                                    )}
                                </>
                            )}
                        </Listitem>
                    ))}
                </List>
            </Wrapper>
        </>
    );
}

export default CommentList;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f0932b;
    border-radius: 5px;
`;

const EditWrapper = styled(Wrapper)`
    flex-direction: row;
`;

const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 15px;
`;

const Listitem = styled.li`
    display: flex;
    gap: 10px;
    align-self: flex-start;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 16px;
    list-style: none;
`;

const CommentBox = styled.div`
    display: flex;
    flex-direction: column;
`;

const Commentitem = styled.span`
    background: #2979ff;
    color: #fff;
    padding: 10px 15px;
    border-radius: 16px 16px 0 16px;
    align-items: center;
`;

const Replyitem = styled.p`
    background: #f0f0f0;
    color: #333;
    padding: 10px 15px;
    border-radius: 16px 16px 16px 0;
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
