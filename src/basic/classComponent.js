import React from "react";

// prop를 활용하여 데이터를 받아와서 처리하는 방법도 있는가?
class Test1 extends React.Component {
    // constructor() {
    //     super(); // 무조건 써야 React.Component 클래스로 접근이 가능
    //     this.state = {
    //         test: "졸리네", // props 값이 상수화되었음
    //     };
    // }

    constructor(props) {
        super(props);
        this.state = {
            brand: "Lexus",
            model: "ES300h",
            color: "white",
            year: "1970",
        };
    }

    // setState : 객체상태 변경
    changeColor = () => {
        this.setState({ color: "blue" });
    };

    render() {
        return (
            <div>
                <h1>이것은 내가 좋아하는 차량 브랜드 {this.state.brand}</h1>
                <p>이 차의 색상은 {this.state.color}</p>
                <p>차종은 {this.state.model}</p>
                <p>이 때부터 생산됨 {this.state.year}</p>
                <button type="button" onClick={this.changeColor}>
                    색상을 바꿔 보자!
                </button>
            </div>
        );
    }
}

export default Test1;

// class MainCls extends React.Component {
//     render() {
//         return <h1>여기는 Main Class의 내용을 리턴합니다!</h1>;
//     }
// }

// class Cls2 extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>여기는 cls2</h1>
//                 <MainCls />
//             </div>
//         );
//     }
// }

// export default Cls2;
