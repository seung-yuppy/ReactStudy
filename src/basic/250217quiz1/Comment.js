import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
import styled from "styled-components";

// 예시 데이터
const initialComments = [
    {
        id: 1,
        text: "멋진 게시물이네요!",
        author: "user1",
        timestamp: new Date(),
        likes: 0,
        replies: [],
    },
];

function Comment() {
    const [datas, setDatas] = useState(initialComments);

    // 좋아요 버튼 누르면 좋아요 개수 1개씩 증가
    const addLikes = (id) => {
        // 초기 데이터 값이 배열이어서 map함수를 통해 해당 게시글의 id와 일치하면 해당 데이터를 접근한다.
        // 해당 데이터에 접근해 likes를 제외한 객체들은 복사하고 key가 likes인 객체의 value를 한개 증가한다
        setDatas((prev) =>
            prev.map(
                (data) => data.id === id && { ...data, likes: data.likes + 1 }
            )
        );
    };

    const addComment = (comment) => {
        // 초기 데이터 값이 배열이어서 map함수를 통해 해당 게시글의 id가 1이면 해당 게시글 데이터에 접근한다
        // 해당 데이터에 접근해 key가 replies를 제외한 객체들은 복사하고 key가 replies인 value에 접근한다
        // key가 replies의 value가 배열이기 때문에 기존의 배열을 복사하고 새로운 {id, comment}를 key로 갖는 객체를 배열에 추가한다
        setDatas((prev) =>
            prev.map(
                (data) =>
                    data.id === 1 && {
                        ...data,
                        replies: [
                            ...data.replies,
                            { id: Date.now(), comment: comment },
                        ],
                    }
            )
        );
    };

    const deleteComment = (id) => {
        setDatas((prev) =>
            prev.map(
                (data) =>
                    data.id === 1 && {
                        ...data,
                        replies: data.replies.filter(
                            (reply) => reply.id !== id
                        ),
                    }
            )
        );
    };

    const editComment = (id, comment) => {
        setDatas((prev) =>
            prev.map((data) =>
                data.id === 1
                    ? {
                          ...data,
                          replies: data.replies.map((reply) =>
                              // replies 배열에 {id, comment}가 있는데 id와 editComment의 id가 같으면 id는 같으니깐 복사를 하기 스프레드 연산자를 사용하였고,
                              // comment 내용이 달라지니깐 comment로 바꿈
                              reply.id === id
                                  ? { ...reply, comment: comment }
                                  : reply
                          ),
                      }
                    : data
            )
        );
    };

    const newReplyComment = (id, comment) => {
        setDatas((prev) =>
            prev.map((data) =>
                data.id === 1
                    ? {
                          ...data,
                          replies: data.replies.map((reply) =>
                              // replies 배열에 { id, comment } 객체를 갖는 배열이 있는데 이걸 map함수를 이용해서 대댓글을 달 댓글 id와 비교해서 같으면
                              // 기존의 { id, comment } 객체는 유지(스프레드 연산자로 복사)하고 새로운 replies 배열을 만들어서 이 배열에도 { id, comment }객체를 저장하는 배열로 만들어서 대댓글을 저장하도록 코드를 작성하였다
                              // 대댓글 배열은 초기상태에 없기 때문에(초기상태가 비어있어서) 빈 배열을 선언해주고 대댓글 배열에 객체가 있으면 스프레드 연산자로 복사해 대댓글을 추가해나가는 방식으로 만들었다
                              reply.id === id
                                  ? {
                                        ...reply,
                                        replies: [
                                            ...(reply.replies || []),
                                            {
                                                id: Date.now(),
                                                comment: comment,
                                            },
                                        ], // 대댓글 추가
                                    }
                                  : reply
                          ),
                      }
                    : data
            )
        );
    };

    console.log(datas);

    return (
        <Wrapper>
            {datas.map((data) => (
                <List key={data.id}>
                    <Listitem>
                        <Title>
                            <h2>{data.text}</h2>
                            <p>-{data.author}-</p>
                        </Title>
                        <span>
                            작성 시간 : {data.timestamp.toLocaleString()}
                        </span>
                        <Heartbtn onClick={() => addLikes(data.id)}>
                            ❤️ {data.likes}
                        </Heartbtn>
                    </Listitem>
                    <CommentList
                        data={data}
                        deleteComment={deleteComment}
                        editComment={editComment}
                        newReplyComment={newReplyComment}
                    />
                    <CommentForm addComment={addComment} />
                </List>
            ))}
        </Wrapper>
    );
}

export default Comment;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;
`;

const List = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
    border-radius: 15px;
    background: #8ac007;
`;

const Listitem = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #333;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 15px;
    border-radius: 16px;
`;

const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
`;

const Heartbtn = styled.button`
    background-color: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    font-size: 20px;
`;
