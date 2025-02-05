import React from "react";

function Car(props) {
    return <h1>나는 {props.brand.model}, 차종은 {props.brand.name}이죠</h1>;
}

function Garage() {
    const carInfo = { name: "Porche", model: "paramera GTS" };
    return (
        <>
            <h1>제 차고에는 이런 차가 있어요~</h1>
            <Car brand={carInfo} />
        </>
    );
}

export default Garage;
