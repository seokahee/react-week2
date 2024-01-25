// 9강 useMemo-2

import React, { useEffect, useMemo, useState } from "react";

function ObjectComponent() {
  const [isAlive, setIsAlive] = useState(true);
  const [uselessCount, setUselessCount] = useState(0);

  // me 객체를 useMemo에 담아 렌더링 시 데이터에 저장하고 생사 토글이 작동할때만 useMemo가 갱신되도록 하면 아래 토글의 영향을 받지 않는다.
  const me = useMemo(() => {
    return {
      name: "Ted Chang",
      age: 21,
      isAlive: isAlive ? "생존" : "사망",
    };
  }, [isAlive]);

  // useEffect는 컴포넌트가 렌더링되거나 의존성 배열에 담긴 값이 변경될 때 실행된다, 근데 setUselessCount state가 변경될때도 작동된다. 원래 둘은 아무 상관이 없기때문에 작동하지 않아야 한다.
  // 원인은, setUselessCount state가 변경될때마다 컴포넌트가 리렌더링하기때문에 렌더링 시 실행되는 useEffect도 영향을 받는 것. 불변성의 법칙과 같다

  // 컴포넌트 내부 함수들은 객체와 같음, 주소를 참조한다 리렌더링 될때마다 새로운 메모리에 할당하기 때문에 주소값이 달라짐
  useEffect(() => {
    console.log("생존여부가 바뀔 때만 호출해주세요!");
  }, [me]);

  return (
    <>
      <div>
        내 이름은 {me.name}이구, 나이는 {me.age}야!
      </div>
      <br />
      <div>
        <button
          onClick={() => {
            setIsAlive(!isAlive);
          }}
        >
          누르면 살았다가 죽었다가 해요
        </button>
        <br />
        생존여부 : {me.isAlive}
      </div>
      <hr />
      필요없는 숫자 영역이에요!
      <br />
      {uselessCount}
      <br />
      <button
        onClick={() => {
          setUselessCount(uselessCount + 1);
        }}
      >
        누르면 숫자가 올라가요
      </button>
    </>
  );
}

export default ObjectComponent;
