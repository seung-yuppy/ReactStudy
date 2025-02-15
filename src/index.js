import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Car from "./util.js";
import Class from "./basic/classComponent.js";
import Props from "./basic/propsExam.js";
import Quiz from "./basic/quiz.js";
import Evt from "./basic/event.js";
import QuizExam from "./basic/eventExam1.js";
import Condition from "./basic/conditionalRender.js";
import ReactList from "./basic/reactList.js";
import ReactCss from "./basic/usingCss.js";
import Formtest from "./basic/forms.js";
import Quiz2 from "./basic/quiz0206.js";
import Hooks1 from "./hooks/useStateExam.js";
import Hooks2 from "./hooks/useEffectExam.js";
import Hooks3 from "./hooks/useContextExam.js";
import Hooks4 from "./hooks/useRefExam.js";
import Hooks5 from "./hooks/useReducerExam.js";
import Hooks6 from "./hooks/useReducerExam2.js";
import Hooks7 from "./hooks/useMemoExam.js";
import Quiz3 from "./hooks/quiz0207-1.js";
import Hooks8 from "./hooks/customHookExam.js"
import Hooks9 from "./hooks/quiz0207-2.js";
import RoutingApp from "./RoutingApp.js";
import Navigation from "./router/navigation.js";
import App2 from "./router/routerQuiz로그인/App.js";
import ValueTracker from "./router/routerQuiz0210/valueTracker.js";
import App3 from "./router/routerQuiz0210/App.js";
import Counter from "./redux/couter.js";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Shop from "./redux/reduxQuiz/shop.js";
import { shopstore } from "./redux/reduxQuiz/shopStore.js";
import ThemeToggle from "./redux/reduxQuiz/themeToggle.js";
import { themestore } from "./redux/reduxQuiz/themeStore.js";
import List from "./redux/reduxThunk/list.js";
import { liststore } from "./redux/reduxThunk/listStore.js";
import UserList from "./redux/reduxQuiz2/App.js";
import TodoList from "./redux/reduxData/App.js";
import MovieList from "./redux/reduxThunkMovie/App.js";
import Logging from "./redux/loggingMiddleware/App.js";
import MovieLogging from "./redux/loggingMiddlewareQuiz/App.js";
import FormValidation from "./basic/formAndValidation/App.js";
import CounterComponent from "./basic/250213quiz/App.js";
import ProductItem from "./basic/250214quiz/App.js";

// JSX를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx를 쓰는걸까요?');

// JSX를 적용하는 예시
// const el = <h1>이것이 JSX이다</h1>;

// JSX의 표현식
// const test = "으갸갸걍";
// const hello = test.length;
// const el2 = <h1>리액트의 신기한 기능 {hello}개나 있어요!!</h1>

// JSX 규칙
// JSX 문법을 적용시킬 때 HTML태그가 2줄이상이면 소괄호를 감싸줄 것을 권장
// 리액트에서 <>,</>를 사용하면 불필요한 DOM 노드를 생성하지 않고 간결한 코드를 작성할 수 있다.
// 만약에 <>,</>를 사용하지 않으면 <div>등과 같은 DOM을 생성해야 되기 때문에 이를 해결하기 위해서 <>, </>를 사용한다
// const el3 = (
//   <div>
//     <h1>이렇게 써도 돼?</h1>
//   </div>
// );

// JSX가 JS + html이라 한다면
// JS의 조건과 HMTL 코드를 융합하는 것도 가능?
// 위의 el3 변수에는 div이라는 body를 제외한 최상위 부모요소를 통해 코드들을 하나로 묶었음
// 하지만 부모요소가 body인 경우는 어떻게?
//  --> 그냥 써도 상관x, 다만 성능상의 문제점이 발생
//      (DOM에 불필요한 노드가 추가됨)
//  --> 위의 문제점을 해결하기 위해 fragment라는 것을 사용하여 여러줄을 한번에 묶을 수 있음
// const el4 = (
//   <>
//     <h1>이렇게 써두면 문제없습니다</h1>
//     <div>
//       배고파
//     </div>
//   </>
// );

// JSX문법은 기본적으로 XML의 규칙을 따른다
// XML : 마크업 언어(HTML과 유사함)
//  --> 다른 종류의 데이터를 기술할 때 사용하는 마크업 언어
// 규칙 : 시작이 있으면 종료가 무조건 필요

// 예시 : input 태그의 경우 종료태그를 생략해도 문제없었음
//  --> XML의 경우는 반드시 잘 작성해줘야함
// const el5 = <input type='text' />;

// JSX 규칙2
// class 관련
// JSX기반의 형식에서는 class가 아니라 className으로 작성해줘야함
// 왜 class를 사용하면 안되는가? --> JS에 class 예약어가 이미 존재해있기 때문에 구분하기 위해서이다
//  --> class로 기존처럼 써도 잘되는데?
//  --> 사실 class 속성도 잘 먹히긴 함. 다만 JSX 문법 위반
//        (JS에서는 es6 이후로는 class 키워드가 생김)
// const el6 = (
//   <>
//     <h1 class="test">클래스 테스트 해보기</h1>
//     <h1 className="test">클래스 테스트 해보기</h1>
//   </>
// );

// JSX 규칙3
// 퀴즈 : 단순 JS로 변수 test1을 선언하고
// test1의 값에 따라 나타나는 문자열을 다르게 보여줄 것
// test1의 값이 10보다 작으면 : hungry
// test1의 값이 10보다 크면 : gunchimssak
// let test1 = 13;
// let result = 'hungry';
// if(test1 > 10) {
//   result = 'gunchimssak';
// }
// let result = test1 > 10 ? "gunchimssak" : "hungry";
// const el7 = (
//   <h1>{result}</h1>
// );

// 컴포넌트 방식
// 1. 클래스 방식
// class Car extends React.Component {
//   render() {
//     return <h1>클래스 방식의 컴포넌트 리턴</h1>
//   }
// }

// 2. 함수 방식

// 컴포넌트 활용 예시!
// 함수를 컴포넌트화 하려면 첫글자를 무조건 대문자로...

// 컴포넌트 안에 컴포넌트를 포함해오는 것도 가능
// function Wide() {
//     return (
//         <>
//             <h1>test1234</h1>
//             <Car />
//         </>
//     );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Car />);
// root.render(
//     <React.StrictMode>
//         {/* <App /> */}
//         {/* <Car test="냠냠" /> */}
//         {/* <Wide /> */}
//         <Test1 />
//     </React.StrictMode>
// );
// root.render(<Class result="이게 뭐지?" />);
// root.render(<Props />);
// root.render(<Quiz />);
// root.render(<Evt />);
// root.render(<QuizExam />);
// root.render(<Condition isGoal={true} />)
// const arr = [1, 2, 3, 4, 5, 6];
// root.render(<Condition test={arr} />);
// root.render(<ReactList />);
// root.render(<ReactCss />);
// root.render(<Formtest />);
// root.render(<Quiz2 />);
// root.render(<Hooks1 />);
// root.render(<Hooks2 />);
// root.render(<Hooks3 />);
// root.render(<Hooks4 />);
// root.render(<Hooks5 />);
// root.render(<Hooks6 />);
// root.render(<Hooks7 />);
// const products = [
//     { id: 1, name: 'apple', price: 15 },
//     { id: 2, name: 'banana', price: 10 },
//     { id: 3, name: 'cake', price: 13 }
// ];
// const handleProductSelect = (productId) => {
//     console.log("Selected product ID:", productId);
// };
// root.render(<Quiz3 products={products} onProductSelect={handleProductSelect} />);
// root.render(<Hooks8 />);
// root.render(<Hooks9 />);
// root.render(<RoutingApp />);
// root.render(<Navigation />);
// root.render(<App2 />);
// root.render(<ValueTracker />);
// root.render(<App3 />);
// redux를 쓰기 위해서는 Provider 컴포넌트가 필요
// Provider에 store props를 필수로 전달해야함
// root.render(
//     <React.StrictMode>
//         {/* redux를 사용할 때는 최상위 컴포넌트는 반드시 Provider 컴포넌트에 감싸져야함, store props 또한 필수적으로 전달해줄 필요가 있음 */}
//         <Provider store={store}>
//             <Counter />
//         </Provider>
//     </React.StrictMode>
// );
// root.render(
//     <React.StrictMode>
//         {/* redux를 사용할 때는 최상위 컴포넌트는 반드시 Provider 컴포넌트에 감싸져야함, store props 또한 필수적으로 전달해줄 필요가 있음 */}
//         <Provider store={shopstore}>
//             <Shop />
//         </Provider>
//     </React.StrictMode>
// );
// root.render(
//     <React.StrictMode>
//         {/* redux를 사용할 때는 최상위 컴포넌트는 반드시 Provider 컴포넌트에 감싸져야함, store props 또한 필수적으로 전달해줄 필요가 있음 */}
//         <Provider store={themestore}>
//             <ThemeToggle />
//         </Provider>
//     </React.StrictMode>
// );
// root.render(
//     <React.StrictMode>
//         {/* redux를 사용할 때는 최상위 컴포넌트는 반드시 Provider 컴포넌트에 감싸져야함, store props 또한 필수적으로 전달해줄 필요가 있음 */}
//         <Provider store={liststore}>
//             <List />
//         </Provider>
//     </React.StrictMode>
// );
// root.render(<UserList />);
// root.render(<TodoList />);
// root.render(<MovieList />);
// root.render(<Logging />);
// root.render(<MovieLogging />);
// root.render(<FormValidation />);
// root.render(<CounterComponent />);
root.render(<ProductItem />);