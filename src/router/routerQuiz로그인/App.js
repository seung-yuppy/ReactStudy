// 요구사항:
// 1. 로그인 페이지와 관리자 페이지를 만드세요
// 2. 관리자 페이지는 로그인한 사용자만 접근할 수 있습니다
// 3. 로그인하지 않은 상태로 관리자 페이지 접근 시 로그인 페이지로 리다이렉트됩니다
// 4. 로그인 상태는 localStorage를 사용하여 유지하세요

// 로그인
// 사용자 입력화면 --> 사용자가 정보를 입력 --> 확인 후 인증 처리

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./login";
import AdminPag from "./admin";
import ProtectedRoute from "./ProtectedRoute";
import { AuthProvider } from "./AuthContext";

// 이 과제는 조원들과 진행해주세요.
function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute>
                                <AdminPag />
                            </ProtectedRoute>
                        }
                    />
                    {/* 다른 라우트들 */}
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;