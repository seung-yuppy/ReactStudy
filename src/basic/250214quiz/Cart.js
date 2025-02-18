const Cart = ({ carts }) => {
    return (
        <>
            {carts && carts.map((cart, index) => (
                <div key={index}>
                    <p>{cart.item.name} - {cart.item.price}원</p>
                </div>
            ))}
        </>
    )
}

export default Cart;