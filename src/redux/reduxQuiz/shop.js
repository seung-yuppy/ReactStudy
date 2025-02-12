// 요구사항:
// 1. 상품 목록을 보여주세요 (상품명, 가격만 있으면 됨)
// 2. 각 상품에 [담기] 버튼을 만드세요
// 3. 장바구니에 담긴 상품의 총 개수를 상단에 표시하세요
// 4. 장바구니 비우기 버튼을 만드세요

import { useDispatch, useSelector } from "react-redux";
import { addItem, clearItems, clearItem } from "./shopSlice";

function Shop() {
    const { items } = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    const products = [
        { id: 1, name: '사과', price: 1000 },
        { id: 2, name: '바나나', price: 2000 },
        { id: 3, name: '오렌지', price: 1500 }
    ];

    return (
        <>
            <div>
                <h2>장바구니 수량: {items.length}개</h2>
                <button onClick={() => dispatch(clearItems())}>장바구니 비우기</button>
                {items && items.map((item, index) => (
                    <div key={index}>
                        <span>{index + 1}번.  {item.name} : {item.price}원</span>
                        <button onClick={() => dispatch(clearItem(index))}>개별 삭제</button>
                    </div>
                ))}

                <h2>상품목록</h2>
                {products && products.map((product) => (
                    <div key={product.id}>
                        <span>{product.name} : {product.price}원</span>
                        <button onClick={() => dispatch(addItem(product))}>
                            담기
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Shop;