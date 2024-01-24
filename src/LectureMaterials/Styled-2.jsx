// 스타일 컴포넌트 - 전역 스타일링
import "./App.css";
import TestPage from "./Components/TestPage";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      {/* 1. 지역스타일링된 컴포넌트 가져와서 props에 값을 입력 */}
      <TestPage title="제목입니다" contents="내용입니다" />

      {/* 2. TestPage에서 반복되는 스타일을 createGlobalStyle로 전역스타일로 분리  */}
      <GlobalStyle />
    </>
  );
}

export default App;
