import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

// 로그인 상태가 아닐 경우에는 무조건 로그인 페이지로 리다이렉트를 하기위해 준비된 코드

function ProtectedRoute({ children }) {
    const { isLoggedIn } = useAuth();   // custom Hook(authContext파일)

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }
    return children;
}

export default ProtectedRoute;