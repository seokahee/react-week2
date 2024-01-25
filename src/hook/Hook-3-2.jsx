// 5강. useEffect, useRef 포커스

import React, { useEffect, useRef, useState } from "react";

function App() {
  const idRef = useRef(""); // 아이디 포커스
  const pwRef = useRef(""); // 비밀번호 포커스

  const [id, setId] = useState("");

  // 화면이 렌더링 될 때 , 어떤 작업을 하고싶다 - useEffect
  useEffect(function () {
    return idRef.current.focus(); // 화면이 렌더링 되면, 아이디 포커스
    // return pwRef.current.focus(); // 비밀번호 포커스
  }, []);

  // id가 10자리가 넘어가면 pw에 포커스 옮기기
  useEffect(() => {
    if (id.length >= 10) {
      pwRef.current.focus();
    }
  }, [id]);
  // id의 값이 바뀔때마다 useEffect가 실행돼야하니까 의존성 배열에 변경 기준 값으로 id를 넣어줌

  return (
    <>
      <div>
        아이디 :{" "}
        <input
          type="text"
          ref={idRef}
          value={id}
          onChange={(e) => {
            setId(e.target.value);

            // useState는 배치업데이트로 setId 값이 변해도 바로 적용되는게 아니기때문에
            // 11자리를 입력해야 포커스가 넘어간다, useEffect를 사용하는게 더 효과적임
            // id(id.length >=10){
            //   pwRef.current.focus();
            // }
          }}
        />
      </div>
      <div>
        비밀번호 <input type="password" ref={pwRef} />
      </div>
      ;
    </>
  );
}

export default App;
// 배치 업데이트
// 컴포넌트가 여러 번 업데이트 되더라도, 실제 DOM 요소에 변경사항을 적용하는 것을 최소화하여 애플리케이션의 성능을 최적화하는 기능
// State() 메서드를 호출하면, 컴포넌트의 상태(State)를 변경하는 것이지만, 실제 변경사항이 적용되는 시점은 render() 함수 호출 후 적용되기때문에 setState() 메서드를 여러번 호출하더라도, 배치로 처리되어 실제 변경사항이 적용되는 시점이 늦춰지게된다
