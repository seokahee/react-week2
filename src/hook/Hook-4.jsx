// 6강. useContext (components 폴더 참고)

import React from "react";
import GrandFather from "./hook/components/GrandFather";

function App() {
  return <GrandFather />;
  // useContext 사용 시 Provider에서 제공한 value가 달라진다면(GF) useContext를 사용하고 있는 모든 컴포넌트가 리렌더링되므로 value 부분 신경쓸것
}

export default App;
// useContext
// 전역 데이터 관리, 어떤 컴포넌트든 전역 데이터에 접근할 수 있다

// createContext : context 생성
// Consumer : context 변화 감지
// Provider : context 전달(to 하위컴포넌트)
