// 이화면은 로그인이 처리되고 난 후
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from "./AuthContext";

function Admin() {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [stats] = useState({
        totalUsers: 120,
        activeUsers: 45,
        totalProducts: 89
    });

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <h1>관리자 대시보드</h1>
                <button
                    onClick={handleLogout}
                    style={styles.logoutButton}
                >
                    로그아웃
                </button>
            </div>

            <div style={styles.statsContainer}>
                <div style={styles.statBox}>
                    <h3>전체 사용자</h3>
                    <p style={styles.statNumber}>{stats.totalUsers}</p>
                </div>
                <div style={styles.statBox}>
                    <h3>활성 사용자</h3>
                    <p style={styles.statNumber}>{stats.activeUsers}</p>
                </div>
                <div style={styles.statBox}>
                    <h3>총 상품수</h3>
                    <p style={styles.statNumber}>{stats.totalProducts}</p>
                </div>
            </div>

            <div style={styles.recentActivity}>
                <h2>최근 활동</h2>
                <ul style={styles.activityList}>
                    <li>새로운 사용자 가입: 홍길동</li>
                    <li>새로운 상품 등록: 아이폰 15</li>
                    <li>주문 완료: #1234</li>
                </ul>
            </div>
        </div>
    );
}

// 스타일 객체
const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px'
    },
    logoutButton: {
        padding: '10px 20px',
        backgroundColor: '#dc3545',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
    },
    statsContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '20px',
        marginBottom: '30px'
    },
    statBox: {
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px',
        textAlign: 'center',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    statNumber: {
        fontSize: '24px',
        fontWeight: 'bold',
        color: '#007bff'
    },
    recentActivity: {
        backgroundColor: '#ffffff',
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    },
    activityList: {
        listStyle: 'none',
        padding: 0,
    }
};

export default Admin;