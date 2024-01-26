// 13강, 14강(counter만들기) MVC모델 느낌?

// Redux redux, modules 폴더, memo,파일 참고

import React from "react";
import { useDispatch, useSelector } from "react-redux";

// store : state들의 집합 저장소, 데이터 관리소

function App() {
  // useSelector
  // 여기에 store에 접근하여 counter의 값을 읽어오기 위해 사용
  // 매개변수 state는 store에 저장된 state이다
  const counter = useSelector(function (state) {
    return state.counter;
    // state의 counter를 반환
  });
  console.log("counter", counter.number);

  // action을 보내는 dispatch
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <button
        onClick={() => {
          // counter가 +1을 해주는 로직 작성
          dispatch({
            type: "PLUS_ONE",
            // 모듈 리듀스 액션 타입을 넣어줌
          });
          // dispatch 안에 액션 객체를 넣어줘야한다 type,payload
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({
            type: "MINUS_ONE",
          });
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
