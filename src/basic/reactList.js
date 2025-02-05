import React from "react";
function Car(props) {
    return <li>I am a {props.brand}. {props.num === 1 ? `I have ${props.num}car` : `I have ${props.num}cars`} </li>;
}

function Garage() {
    const cars = [
        { id: 1, brand: "Hyendai" },
        { id: 2, brand: "BMW" },
        { id: 3, brand: "Audi" },
        { id: 4, brand: "Benz" },
    ];
    return (
        <>
            <h1>Who lives in my garage?</h1>
            <ul>
                {/* {cars.map((car) => (<Car brand={car} />))} */}
                {/* React가 해당 요소를 쉽게 추적할 수 있도록 제공된 속성, 필수는 아니지만 써주는게 좋다 */}
                {cars.map((car) => (<Car key={car.id} num={car.id} brand={car.brand} />))}
            </ul>
        </>
    );
}

export default Garage;
