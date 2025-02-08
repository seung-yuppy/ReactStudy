import { useCallback, useMemo, useState } from "react";

// 퀴즈 1
// 다음 코드의 성능을 최적화하세요.
// 불필요한 재계산과 리렌더링을 방지해야 합니다.

function ProductList({ products, onProductSelect }) {
    const [filter, setFilter] = useState("");

    // const filteredProducts = products.filter(product =>
    //     product.name.toLowerCase().includes(filter.toLowerCase())
    // );

    // 값을 리턴하기 때문에 useMemo를 사용해서 최적화하였습니다.
    const memoFilteredProducts = useMemo(() => {
        return (
            products.filter(product => product.name.toLowerCase().includes(filter.toLowerCase()))
        );
    }, [filter, products])

    // const handleSelect = (productId) => {
    //     onProductSelect(productId);
    // };

    // 함수를 사용하기 때문에 useCallback을 사용해서 최적화하였습니다
    const callbackHandleSelect = useCallback((productId) => {
        onProductSelect(productId);
    }, [onProductSelect]);

    return (
        <div>
            <input
                value={filter}
                onChange={e => setFilter(e.target.value)}
                placeholder="검색..."
            />
            {memoFilteredProducts.map(product => (
                <ProductItem
                    key={product.id}
                    product={product}
                    onSelect={callbackHandleSelect}
                />
            ))}
        </div>
    );
}

const ProductItem = ({ product, onSelect }) => {
    return (
        <div onClick={() => onSelect(product.id)}>
            {product.name} - ${product.price}
        </div>
    );
};

// export default ProductList;


//퀴즈2
// 요구사항:
// 1. 이름을 입력받는 입력창을 만드세요
// 2. 입력창 아래에 실시간으로 "안녕하세요, OOO님!" 이라고 표시됩니다
// 3. 입력값이 없을 때는 "이름을 입력해주세요" 라고 표시됩니다
// 4. 이름은 10글자를 넘을 수 없습니다

function NameForm() {
    // 여기에 코드를 작성하세요
    const [name, setName] = useState("");

    const changeHandler = (e) => {
        e.preventDefault();
        if (name.length < 10) {
            setName(e.target.value);
        }
    }

    return (
        <>
            <div>
                {name ? <h2>안녕하세요, {name}님!</h2> : <h2>이름을 입력해주세요!</h2>}
                <input type="text" value={name} onChange={changeHandler} />
            </div>
        </>
    )
}

// export default NameForm;

// 퀴즈3
// 요구사항:
// 1. 버튼을 클릭할 때마다 배경색이 변경됩니다
// 2. 색상은 빨강 -> 파랑 -> 초록 순서로 변경됩니다
// 3. 현재 색상이 무슨 색상인지 버튼 텍스트로 표시됩니다
// 4. 배경색이 변경될 때 부드러운 전환 효과를 넣어주세요

function ColorToggle() {
    // 여기에 코드를 작성하세요
    const [color, setColor] = useState("");
    const [num, setNum] = useState(0);
    const colorArr = ["red", "blue", "green"];

    const changeColor = () => {
        setColor(colorArr[num % 3]);
        setNum(num => num + 1);
    };

    return (
        <>
            <div style={{ width: "200px", height: "200px", backgroundColor: `${color}`, transition: "all 0.3s", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <h2 style={{ color: "white" }}>{color}</h2>
            </div>
            <button onClick={changeColor} style={{ padding: "10px" }}>{color ? color : "시작"}</button>
        </>
    );
}

export default ColorToggle;