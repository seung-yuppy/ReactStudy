import { useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";

// 예시 데이터
const initialComments = [
    {
        id: 1,
        text: "멋진 게시물이네요!",
        author: "user1",
        timestamp: new Date(),
        likes: 0,
        replies: [],
    }
];

function Comment() {
    const [datas, setDatas] = useState(initialComments);

    // 좋아요 버튼 누르면 좋아요 개수 1개씩 증가
    const addLikes = (id) => {
        // 초기 데이터 값이 배열이어서 map함수를 통해 해당 게시글의 id와 일치하면 해당 데이터를 접근한다.
        // 해당 데이터에 접근해 likes를 제외한 객체들은 복사하고 key가 likes인 객체의 value를 한개 증가한다
        setDatas((prev) => prev.map((data) => data.id === id && { ...data, likes: data.likes + 1 }))
    };

    const addComment = (comment) => {
        // 초기 데이터 값이 배열이어서 map함수를 통해 해당 게시글의 id가 1이면 해당 게시글 데이터에 접근한다 
        // 해당 데이터에 접근해 key가 replies를 제외한 객체들은 복사하고 key가 replies인 value에 접근한다
        // key가 replies의 value가 배열이기 때문에 기존의 배열을 복사하고 새로운 {id, comment}를 key로 갖는 객체를 배열에 추가한다 
        setDatas((prev) => prev.map((data) => data.id === 1 && { ...data, replies: [...data.replies, { id: Date.now(), comment: comment }] }));
    }

    const deleteComment = (id) => {
        setDatas((prev) => prev.map((data) => data.id === 1 && { ...data, replies: data.replies.filter((reply) => reply.id !== id) }));
    };

    return (
        <div>
            {datas.map((data) => (
                <div key={data.id}>
                    <div>
                        <h1>{data.text}</h1>
                        <p>-{data.author}-</p>
                    </div>
                    <div>
                        <h4>좋아요 {data.likes} <button onClick={() => addLikes(data.id)}>♥</button></h4>
                        <span>작성 시간 : {data.timestamp.toLocaleString()}</span>
                    </div>
                    <CommentList data={data} deleteComment={deleteComment} />
                    <CommentForm addComment={addComment} />
                </div>
            ))}
        </div>
    );
}

export default Comment;