// 7강, Hook 최적화 React.memo

import React, { useCallback, useState } from "react";
import Box1 from "./boxComponents/Box1";
import Box2 from "./boxComponents/Box2";
import Box3 from "./boxComponents/Box3";

// 리렌더링 조건
// 1. 컴포넌트의 state가 바뀌었을때
// 2. 컴포넌트가 내려받은 props 가 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링되면 자식도 모두 리렌더링된다

function App() {
  console.log("App 컴포넌트가 렌더링되었습니다!");
  const [count, setCount] = useState(0);

  // 1증가
  const onPlusBtn = function () {
    return setCount(count + 1);
  };

  // 1감소
  const onMinusBtn = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h3>카운드 예제입니다</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtn}>+</button>
      <button onClick={onMinusBtn}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
// Hook 최적화 (메모이제이션)
// 캐싱 - 메모리에 임시 저장

// React.memo : 컴포넌트를 캐싱한다, 컴포넌트를 메모리에 저장해두고 필요할 때 갖다 쓰는것 그러면 부모 컴포넌트의 state 변경으로 props가 변경되지 않는 한 자식 컴포넌트는 리렌더링 하지 않는다 (컴포넌트 임시 저장소)

// 컴포넌트란? 어떤 기능을 모아서 독립적으로 사용하는 함수로, 기능의 집합같은것이다
// 컴포넌트 내부에는 컴포넌트에 관한 것들로만 채워야한다(독립적인 사용과 협업시 혼선을 주지 않기 위해)
// 컴포넌트 내부 함수들은 컴포넌트의 기능을 위한 메서드와 같은 것이다.
// 반복적인 함수는 컴포넌트를 분리하여 관리하고, 하나의 컴포넌트만 사용하는 함수는 내부에 선언하여 사용된다.
// 스타일의 경우, 전역으로 선언하여 다른 컴포넌트들이 접근할 수 있게하거나, 스타일을 위한 컴포넌트를 생성하여 관리하는것이 제일 효율적이다.
