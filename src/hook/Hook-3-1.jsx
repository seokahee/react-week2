// 5강. useRef - 1

import React, { useRef, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);
  // ref : reference
  const ref = useRef("초기값");
  console.log("ref", ref); // 콘솔을 보면 객체형태로 되어있다 ref {current(키):'초기값'(값)}

  ref.current = "변경값"; // 키에 접근하여 값을 변경하면 변경된 값이 출력된다
  console.log("ref", ref);
  // 설정된 값은 컴포넌트가 계속 렌더링 되어도 unmount되기전까지(컴포넌트가 죽기 전까지) 계속 값을 유지한다

  const style = {
    border: "1px solid black",
    margin: "10px",
    padding: "10px",
  };

  const plusStateCnt = function () {
    return setCount(count + 1);
  };

  const plusRefCount = () => {
    countRef.current++;
    console.log(countRef.current);
    // 버튼을 클릭하면 화면상에 변화는 없지만 콘솔에서는 잘 작동한다
  };
  return (
    <>
      <div style={style}>
        state 영역입니다 {count} <br />
        <button onClick={plusStateCnt}>state 증가</button>
      </div>

      <div style={style}>
        ref 영역입니다 {countRef.current} <br />
        <button onClick={plusRefCount}>ref 증가</button>
      </div>
    </>
  );
}

export default App;
// useRef
// DOM요소에 접근하고, 저장공간으로 쓰인다
// state는 변화가 일어나면 다시 렌더링이 일어나 변수들은 초기화 되지만,
// useRef 저장된 값은 렌더링을 일으키지 않기 때문에 변수들이 초기화되는걸 막을 수 있다
// state - 리렌더링이 꼭 필요한 값에 사용(변화되는 값)
// useRef - 렌더링을 발생시키지 않는 값을 저장할때 사용
