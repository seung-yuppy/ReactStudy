// // UserDetail.js
function UserDetail({ user }) {
    return (
        <div style={{ flex: 1, padding: '20px', border: '1px solid #ddd' }}>
            <h2>사용자 상세 정보</h2>
            <div>
                <p><strong>이름:</strong> {user.name}</p>
                <p><strong>사용자명:</strong> {user.username}</p>
                <p><strong>이메일:</strong> {user.email}</p>
                <p><strong>전화번호:</strong> {user.phone}</p>
                <p><strong>웹사이트:</strong> {user.website}</p>
                <h3>주소</h3>
                <p>{user.address.street}, {user.address.suite}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
                <h3>회사</h3>
                <p><strong>회사명:</strong> {user.company.name}</p>
                <p><strong>사업:</strong> {user.company.bs}</p>
                <p><strong>슬로건:</strong> {user.company.catchPhrase}</p>
            </div>
        </div>
    );
}

export default UserDetail;