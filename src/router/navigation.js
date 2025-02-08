import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Product from "./product";
import Header from "./header";
import List from "./list";
import Detail from "./detail";

export default function Navigation() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/product" element={<Product />} />
                <Route path="/list" element={<List />} />
                <Route path="/list/:id" element={<Detail />} />
                <Route path="*" element={<h1>페이지를 찾을 수 없습니다.</h1>} />
            </Routes>
        </BrowserRouter>
    );

};