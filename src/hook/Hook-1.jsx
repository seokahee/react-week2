// 3강. useState Hook 함수형 업데이트

import React, { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <div>Number State : {number}</div>
      <button
        onClick={() => {
          // 기존 setState 업데이트 방법
          // 배치성으로 처리된다. 배치 업데이트, 한꺼번에 변경된 내용을 모아서 한번만 업데이트한다
          // setNumber에 값을 3번 넣어줬대도 명령을 모아서 한번으로 처리한다

          // setNumber(number + 1)
          // setNumber(number + 1)
          // setNumber(number + 1)

          // 함수형 setState 업데이트 방법 setState(함수를 넣고 매개변수로 현재 State를 가져올 수 있다.)
          // 명령들을 모아서 순차적으로 한번씩 실행시킨다. 인자 부분에 현재 스테이트를 받고 바뀐 스테이트를 내보내기때문에 최신값을 유지할수있는것
          // 함수는 인풋과 아웃풋이 있다, 들어오면 내보내야함

          setNumber((currNum) => currNum + 1);
          setNumber((currNum) => currNum + 1);
          setNumber((currNum) => currNum + 1);
        }}
      >
        Up
      </button>
    </>

    // 정리
    // 렌더링이 잦다 -> 성능에 이슈가있다!
    // 손님 / 웨이터 / 주방
    // 손님 : 피자, 콜라, 피클을 주문함
    // 웨이터 : 주문을 한꺼번에 들고 주방으로 간다 이런 방식이 효율적이기 때문에 함수형과 달리 기존 방식은 한번만 처리됨
  );
}

export default App;
// useState
// - 가장 기본적인 hook
// - 함수형 컴포넌트 내에서 가변적인 상태를 갖게한다
// 문법 const [state, setState] = useState(초기값);
// 원래 useState의 리턴값은 배열이다, [state, setState] 이렇게 구조분해할당을 통해 값을 받은 것
