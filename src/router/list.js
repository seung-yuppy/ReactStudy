import { useNavigate } from "react-router-dom";

const products = [
    { id: 1, name: '노트북', price: 1000000 },
    { id: 2, name: '스마트폰', price: 800000 },
    { id: 3, name: '태블릿', price: 600000 }
];

const List = () => {
    const navigate = useNavigate();
    const gotoDetail = (id) => {
        navigate(`/list/${id}`)
    };

    return (
        <>

            <h1>상품 목록</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.name}입니다.
                        <button onClick={() => gotoDetail(product.id)}>상세 페이지</button>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default List;