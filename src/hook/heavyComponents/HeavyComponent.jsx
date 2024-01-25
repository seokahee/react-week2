// 9강 useMemo-1

import React, { useMemo, useState } from "react";

function HeavyComponent() {
  const [count, setCount] = useState(0);

  const heavyWork = function () {
    for (let i = 0; i < 2000000000; i++) {}
    return 100;
  };
  // 컴포넌트가 렌더링 될때마다, 함수가 초기화되어 다시 실행된다 많은 양의 데이터를 한꺼번에 처리하려 하다보니, 렌더링 시간이 지연됨
  // 그래서 useMemo로 데이터(값)을 감싸주면 컴포넌트의 최초 렌더링 시 해당 값이 메모리에 저장되므로 [의존성 배열] 이 변하지 않으면 함수가 초기화되지않아 속도가 안정적이게된다

  // const value = heavyWork(); // useMemo 사용 전
  const value = useMemo(() => heavyWork(), []);
  console.log("value는 ", value);
  return (
    <>
      <p>나는 엄청 무거운 컴포넌트야</p>
      <button onClick={() => setCount(count + 1)}>
        누르면 아래 count가 올라가요!
      </button>
      <br />
      {count}
    </>
  );
}

export default HeavyComponent;
