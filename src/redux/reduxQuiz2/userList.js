// 요구사항:
// 1. JSONPlaceholder API를 사용하여 사용자 목록을 불러오기
// 2. 로딩 상태와 에러 상태 처리하기
// 3. 사용자 목록에서 특정 사용자 클릭 시 상세 정보 표시
// 4. 새로고침해도 데이터 유지되도록 구현

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, selectUser } from "./userSlice";
import UserDetail from "./userDetail";

// 아래의 컴포넌트 참조
function UserList() {
    const dispatch = useDispatch();
    const { users, status, error, selectedUser } = useSelector((state) => state.users);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    if (status === 'loading') return <div>로딩 중...</div>;
    if (status === 'failed') return <div>{error}</div>;

    return (
        <div style={{ display: 'flex', gap: '20px' }}>
            <div style={{ flex: 1 }}>
                <h2>사용자 목록</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {users && users.map((user) => (
                        <li
                            key={user.id}
                            onClick={() => dispatch(selectUser(user))}
                            style={{
                                padding: '10px',
                                margin: '5px 0',
                                border: '1px solid #ddd',
                                cursor: 'pointer',
                                backgroundColor: selectedUser?.id === user.id ? '#e3e3e3' : 'white'
                            }}
                        >
                            <h3>{user.name}</h3>
                            <p>{user.email}</p>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Object.keys().length > 0는 객체의 key가 1개 이상일 때 랜더링되는 조건 랜더링문이다. */}
            {selectedUser && Object.keys(selectedUser).length > 0 && <UserDetail user={selectedUser} />}
        </div>
    );
}

export default UserList