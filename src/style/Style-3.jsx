// 2강. 스타일 컴포넌트 - default style 제거 - CSS RESET
import React from "react";
// 1. Css 파일을 만들어 준다(Reset.css)
// 2. 구글에 스타일 리셋으로 검색하면 소스가 나온다 복사 > css파일에 붙이기
// 3. index.js에 import하면 끝

function App() {
  return (
    <div>
      <span>default style 테스트</span>
      <h1>이건 h1태그입니다.</h1>
      <p>나는 p태그 입니다</p>
    </div>
  );
}

export default App;
