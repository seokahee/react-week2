// 8강 Hook 최적화 useCallback

import React, { useCallback, useEffect, useState } from "react";
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

  // count를 초기화 하는 함수
  // const initCount = () => {

  //   setCount(0);
  // memo hook을 사용했음에도, app컴포넌트의 state가 변경되면서 리렌더링될때마다 함수를 초기화 시키기 때문에 box1으로 전달하는 props가 바뀌었다고 판단하여 box1도 같이 리렌더링 된다, 이것을 막기 위해 useCallback을 사용한다.
  // };

  // useCallback - App 컴포넌트가 렌더링될 때 initCount함수가 메모리에 그대로 저장되어
  // []에 값이 변하지 않는 한 초기화 되지 않는다(빈 값도 마찬가지)
  // 메모리에 함수를 저장하여 최적화 (임시 저장소)
  const initCount = useCallback(() => {
    console.log(`${count} 에서 0 으로 변경되었습니다`);
    // useCallback으로 app컴포넌트의 렌더링 시점(count=0)에 저장되었기 때문에 값이 변하지 않는다 count를 []에 넣어줄 경우, 값이 변할때마다 리렌더링된다
    setCount(0);
  }, [count]);

  return (
    <>
      <h3>카운드 예제입니다</h3>
      <p>현재 카운트 : {count}</p>
      <button onClick={onPlusBtn}>+</button>
      <button onClick={onMinusBtn}>-</button>
      <div style={{ display: "flex", marginTop: "10px" }}>
        <Box1 initCount={initCount} />
        <Box2 />
        <Box3 />
      </div>
    </>
  );
}

export default App;
// Hook 최적화 (메모이제이션)
// 캐싱 - 메모리에 임시 저장

// useCallback : 함수를 캐싱한다, 함수를 useCallback으로 감싸주게되면 App 컴포넌트가 렌더링될 때 함수 그대로 메모리에 저장하여 의존성배열[] 부분의 값이 변하지 않는 한 초기화 되지 않는다(빈 값도 마찬가지)

// 정리 - useCallback , useEffect 차이
// useCallback는 컴포넌트 최적화를 위해 함수를 메모리에 저장하는데 목적이 있기때문에 의존성 배열의 값이 변경되지 않으면 해당 함수는 app컴포넌트가 리렌더링 돼도 초기화 되지 않는다,(최초 렌더링 시 그대로) 함수 임시 저장소 느낌

// useEffect는 컴포넌트 렌더링 시 내부 로직 실행에 목적이 있다. 렌더링 시 무조건 실행 또는 의존성 배열의 값이 변경될 때 마다 실행

// 컴포넌트란? 어떤 기능을 모아서 독립적으로 사용하는 함수로, 기능의 집합같은것이다
// 컴포넌트 내부에는 컴포넌트에 관한 것들로만 채워야한다(독립적인 사용과 협업시 혼선을 주지 않기 위해)
// 컴포넌트 내부 함수들은 컴포넌트의 기능을 위한 메서드와 같은 것이다.
// 반복적인 함수는 컴포넌트를 분리하여 관리하고, 하나의 컴포넌트만 사용하는 함수는 내부에 선언하여 사용된다.
// 스타일의 경우, 전역으로 선언하여 다른 컴포넌트들이 접근할 수 있게하거나, 스타일을 위한 컴포넌트를 생성하여 관리하는것이 제일 효율적이다.
