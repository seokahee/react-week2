// 17강 payload

// Redux redux, modules 폴더, memo,파일 참고

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { plusN } from "./redux/modules/counter";
import { minusN } from "./redux/modules/counter";
// store : state들의 집합 저장소, 데이터 관리소

function App() {
  const [number, setNumber] = useState(0);

  // // 화면이 랜더링될때마다 작동하는 훅, number가 바뀔때마다 콘솔에 number를 찍어줘!
  // useEffect(() => {
  //   console.log("number", number);
  // }, [number]);

  // useSelector
  // 여기에 store에 접근하여 counter의 값을 읽어오기 위해 사용
  // 매개변수 state는 store에 저장된 state이다
  const counter = useSelector(function (state) {
    return state.counter;
    // state의 counter를 반환
  });

  // action을 보내는 dispatch
  const dispatch = useDispatch();

  return (
    <>
      <div>현재 카운트 : {counter.number}</div>
      <div>
        <input
          // 여기 입력된 값 만큼 +하는 로직만들기
          type="number"
          value={number}
          onChange={(e) => {
            // 구조분해할당으로 값에 이벤트 타켓을 담는방법  setNumber(e.target.value) 이것과 같은 로직
            const { value } = e.target;
            setNumber(+value);
            // 이벤트 앞에 +기호를 넣어주면 문자열로 들어오는 값을 숫자로 형변환해줌
          }}
        />
      </div>
      <button
        onClick={() => {
          // dispatch(plusOne()); //// counter가 +1을 해주는 로직

          dispatch(plusN(number));
          // input값을 매개변수로 전달하여 그만큼 + 해주는 로직 이 매개변수가 payload이다
          // 문자열로 들어가기때문에 + 누를경우 3+7=10이 아닌, 37 이 나옴
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          // dispatch(minusOne());
          dispatch(minusN(number));
        }}
      >
        -
      </button>
    </>
  );
}

export default App;
