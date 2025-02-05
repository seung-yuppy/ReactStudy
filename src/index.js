import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

// JSX를 적용하지 않은 예시
// const el = React.createElement('h1', {}, 'jsx를 쓰는걸까요?');

// JSX를 적용하는 예시
// const el = <h1>이것이 JSX이다</h1>;

// JSX의 표현식
// const test = "으갸갸걍";
// const hello = test.length;
// const el2 = <h1>리액트의 신기한 기능 {hello}개나 있어요!!</h1>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // el2
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
