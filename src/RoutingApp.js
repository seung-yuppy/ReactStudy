import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate, useLocation, useSearchParams, useParams } from "react-router-dom";
import Layout from "./pages/layout";
import Home from "./pages/home";
import Blogs from "./pages/blog";
import Contact from "./pages/contact";
import Nopage from "./pages/nopage";

export default function RoutingApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />} >
                    <Route index element={<Home />} />
                    <Route path="blogs" element={<Blogs />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Nopage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

// 라우팅에서 자주 사용되는 Hook 예시 정리
// 1. useNavigate --> 핵심은 페이지의 이동을 제어할 때 쓴다는 사실을 기억
// function LoginButton() {
//     const navigate = useNavigate();

//     const handleLogin = async () => {
//         const success = await login();
//         if (success) {
//             navigate('/dashboard', {
//                 replace: true,
//                 state: { from: 'login' }
//             });
//         }
//     };
//     return <button onClick={handleLogin}>로그인</button>;
// }

// 2. useLocation --> 현재의 URL정보로 접근, pathname 속성을 통해 쿼리 파라미터의 정보를 처리할 수 있음
// function PageTracker() {
//     const location = useLocation();

//     useEffect(() => {
//         // 페이지 조회 분석
//         analytics.trackPageView(location.pathname);
//     }, [location]);

//     return null;
// }

// 3. useParams --> URL에 제시된 파라미터를 추출하여 결과를 view, 동적 라우팅에서는 필수적으로 사용하는 Hook
// function ProductPage() {
//     const { category, id } = useParams();

//     return (
//         <div>
//             <h1>{category} 카테고리</h1>
//             <h2>상품 ID: {id}</h2>
//         </div>
//     );
// }

// 4. useSearchParams --> useState와 유사함, ? 이후에 오는 쿼리 파라미터를 다루는 특성이 있음, 동적으로 URL 쿼리 파라미터 수정이 가능
// - 검색 기능 예시
// function SearchResults() {
//     const [searchParams] = useSearchParams();
//     const query = searchParams.get("q");
//     return <div>검색 결과: {query}</div>;
// }

// - 필터링 및 정렬 예시
// function ProductList() {
//     const [searchParams, setSearchParams] = useSearchParams();
//     const category = searchParams.get("category");

//     const handleCategoryChange = (event) => {
//         setSearchParams({ category: event.target.value });
//     };
// }
