// 4강. useEffect Hook
// 의존성 배열(dependency array)

import { useEffect, useState } from "react";

function App() {
  const [value, setValue] = useState("");

  // clean Up : ~컴포넌트가 사라졌을때 무엇을 실행하고 싶다
  useEffect(() => {
    console.log(`hi useEffect : ${value}`);
    return () => {
      // 여기 로직이 컴포넌트가 죽을때(사라졌을때), 동작한다 / 실습은 아직 안함 이거 안됨
      console.log("나 사라진다아");
    };
  }, [value]);

  // useEffect(() => {
  //   console.log(`hi useEffect : ${value}`);
  //   // value가 바뀔때마다 useEffect를 실행시킬거야!
  // }, [value]);

  // useEffect(() => {
  //   console.log("hi useEffect");
  // }, []);
  // 의존성 배열 - useEffect 함수가 끝나는 부분 뒤에 배열 형태로 넣는것
  // []안에 값이 바뀔때 useEffect를 실행시키기 위한 조건(값)을 넣는것
  // 의존성 배열 넣지 않을 경우, 리렌더링될때마다 useEffect가 실행되었다면,
  // 배열을 넣으면 배열의 값이 바뀔때와 처음 렌더링 됐을때 실행된다(첫 렌더링 시 실행은 무조건임)

  // 1. 렌더링하면 useEffect가 먼저 실행된다
  // 2. input 에 값을 입력하면 value, 즉 state(상태)가 변경됨
  // 3. state가 변경되었기 때문에 App 컴포넌트가 리렌더링된다
  // 4. 리렌더링이 되면 useEffect가 다시 실행된다 input 값이 바뀔때마다 리렌더링 되고, useEffect가 계속 실행됨
  // 5. useEffect가 실행될때마다 리렌더링이 되고 있는 것

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
}

export default App;
// useEffect
// - 렌더링 될 때, 특정한 작업을 수행해야 할 때 설정하는 훅 (ex.alert, console... 등)
// - 컴포넌트가 화면에 보여졌을때, 또는 컴포넌트가 사라졌을때(컴포넌트가 죽었을때) 실행된다

// 의존성 배열(dependency array)
// 이 배열에 값을 넣으면, 그 값이 바뀔때만 useEffect을 실행한다!
