import { createContext, useContext, useEffect, useState } from "react";

// 인증관련 데이터를 저장할 Context를 생성
// 커스텀 훅의 context나 컴포넌트, 메서드들을 전역에서 쓰려면 export를 추가
export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    // 로그인 상태 관리가 필요
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // useEffect는 랜더링 시 실행되기 때문에 제일 먼저 실행한다
        // 그래서 먼저 토큰이 있으면 상시 로그인을 처리한다
        // 추후에는 로컬스토리지 대신 우리가 구축한 DB에서 정보를 가져오거나 was에 저장해둔후 해당 토큰정보를 로딩
        const token = localStorage.getItem('token');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    // 처음 로그인 한번 할 때만 실행해주면됨
    const login = (username, password) => {
        // 형식적으로만 처리
        if (username === "gunchim" && password === "1234") {
            localStorage.setItem('token', 'test-token');
            setIsLoggedIn(true);
            return true;
        }
        return false;
    }

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    // 로그인시, 로그아웃시 상태
    return (
        <>
            <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
                {children}
            </AuthContext.Provider>
        </>
    );
};

// 커스텀 훅은 만들고 나면 처리를 위해 일부 설정이 필요,
// AuthContext의 사용을 간편하게 어디에서나 처리
// useContext를 통해 AuthContext에서 제공하는 값들을 가져옴
// 커스텀 훅의 이름을 useAuth로 지정 그 후 다른 컴포넌트에서 쉽게 인증관련 기능을 사용할 수 있도록 처리
export const useAuth = () => useContext(AuthContext);

// 이렇게 한 이유는 무엇? 재사용성 향상, 문법자체를 좀 더 간결히