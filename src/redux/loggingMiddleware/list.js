import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./listSlice";

function List() {
    const dispatch = useDispatch();
    const { posts, status, error } = useSelector((state) => state.posts);


    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    if (status === 'loading') {
        return <div>로딩 중...</div>
    };

    if (status === 'failed') {
        return <div>{error}</div>
    }

    return (
        <>
            <h2>게시글 목록</h2>
            <ul>
                {posts && posts.map((post) => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;