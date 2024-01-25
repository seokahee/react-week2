// 9강 Hook 최적화 useMemo -1

import React from "react";
import HeavyComponent from "./heavyComponents/HeavyComponent";

// 리렌더링 조건
// 1. 컴포넌트의 state가 바뀌었을때
// 2. 컴포넌트가 내려받은 props 가 변경되었을 때
// 3. 부모 컴포넌트가 리렌더링되면 자식도 모두 리렌더링된다

// heavy work > 엄청 무거운 작업
function App() {
  return (
    <>
      <nav style={{ backgroundColor: "yellow", margin: "30px" }}>
        네비게이션 바
      </nav>
      <HeavyComponent />
      <footer style={{ backgroundColor: "green", margin: "30px" }}>
        푸터 영역입니다.
      </footer>
    </>
  );
}

export default App;
// Hook 최적화 (메모이제이션)
// 캐싱 - 메모리에 임시 저장

// useMemo : 값을 캐싱한다, 함수가 반환하는 값 자체를 메모리에 저장한다
// 저장 값은 변수, 배열, 객체 등 데이터를 저장하여 사용하도록 한다

// 컴포넌트란? 어떤 기능을 모아서 독립적으로 사용하는 함수로, 기능의 집합같은것이다
// 컴포넌트 내부에는 컴포넌트에 관한 것들로만 채워야한다(독립적인 사용과 협업시 혼선을 주지 않기 위해)
// 컴포넌트 내부 함수들은 컴포넌트의 기능을 위한 메서드와 같은 것이다.
// 반복적인 함수는 컴포넌트를 분리하여 관리하고, 하나의 컴포넌트만 사용하는 함수는 내부에 선언하여 사용된다.
// 스타일의 경우, 전역으로 선언하여 다른 컴포넌트들이 접근할 수 있게하거나, 스타일을 위한 컴포넌트를 생성하여 관리하는것이 제일 효율적이다.
