import { useNavigate, useParams } from "react-router-dom";

const products = [
    { id: 1, name: '노트북', price: 1000000 },
    { id: 2, name: '스마트폰', price: 800000 },
    { id: 3, name: '태블릿', price: 600000 }
];

// 선택한 데이터의 상세 결과만 보여주기 때문에 주소는 list컴포넌트에서 보낸 /list/id값 형태로 주어지게됨
const Detail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
        return <h1>상품을 찾을 수 없습니다.</h1>
    };

    return (
        <>
            <div style={{ padding: "20px" }}>
                <h1>{product.name}의 상세페이지 입니다.</h1>
                <p>가격은 {product.price}원 입니다.</p>
                <button onClick={() => navigate(-1)}>뒤로가기</button> {/* 뒤로가기를 만들기 위해서는 navigate(-1) 이렇게 작성하면 된다 */}
            </div>
        </>
    )
}

export default Detail;