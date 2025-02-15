import { useState } from "react";
import Cart from "./Cart";
import ProductList from "./ProductList";

// 예시 데이터
const products = [
    { id: 1, name: "노트북", price: 1000000, category: "전자기기" },
    { id: 2, name: "티셔츠", price: 20000, category: "의류" }
];

function ProductItem() {
    const [items, setItems] = useState(products);
    const [carts, setCarts] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const gotoCart = (item) => {
        setCarts((prev) => [...prev, { item }]);
        setTotalPrice((prev) => prev + item.price);
    };

    return (
        <>
            <h1>제품 목록</h1>
            <ProductList products={items} gotoCart={gotoCart} />

            <h1>장바구니</h1>
            <Cart carts={carts} />

            <h1>총 합계 : {totalPrice}</h1>
        </>
    );
}

export default ProductItem;