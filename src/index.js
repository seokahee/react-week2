import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./redux/config/configStore";

// import "./Reset.css"; 스타일 리셋

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // redux강의 / Provider는 스테이트의 집합인 스토어를 기반으로 지배권을 행사하기 위해 App 컴포넌트를 감싸야 스토어로 만들어 놓은 중앙데이터 관리소를 app컴포넌트 아래에서 사용 할 수 있다
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
