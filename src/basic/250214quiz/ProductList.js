const ProductList = ({ products, gotoCart }) => {
    return (
        <>
            {products && products.map((product) => (
                <div key={product.id} style={{ display: "flex", gap: "10px" }}>
                    <span style={{ fontSize: "20px" }}>{product.name}</span>
                    {product.price}원
                    ({product.category})
                    <button onClick={() => gotoCart(product)}>담기</button>
                </div>
            ))}
        </>
    );
}

export default ProductList;