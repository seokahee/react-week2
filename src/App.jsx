// 리액트 생명주기 Mount -> Update -> Umount

import React from "react";

function App() {
  return <div>App</div>;
}

export default App;
// DOM과 Virtual DOM

// DOM(Document Object Model)
// Element를 트리형태로 표현한 것 (DOM Tree)
// 트리의 요소 하나하나를 노느라고하고, 각각의 노드는 해당 노드에 접근과 제어(조작)이 가능한 Api를 제공한다(API = 기능 모음집, html요소에 접근하여 수정할수있는 함수 느낌)
// EX
// <접근 예시>
// document.getElementById("dom").innerHTML="hello" > dom이란 id를 갖고있는 요소를 찾아서 hello 글씨를 넣어줘
// const element =document.getElementsByTagName("p") > p 태그를 element 이 변수에 저장해줘

// <조작 예시>
// if(id.value===0 || id.length===""){
//   alert("아이디가 입력되지 않았습니다")
// } > 아이디가 입력되지 않으면 알림창을 띄워줘

// VirtualDOM
// 렌더링을 통해 원하는 화면을 브라우저에 그려주는 것, VirtualDOM은 실제 DOM과 구조가 완벽히 동일한 복사본 형태이다
// 실제 DOM은 아니지만, 객체(Object)형태로 메모리에 저장되며 실제 DOM조작보다 훨씬 빠르게 동작함 실제 DOM을 조작하는 것보다, 메모리상에 올라와있는 Javascript객체(키:값)를 변경하는 작업이 훨신 더 가볍기 때문

// 리액트는 항상 2가지 버전의 VirtualDOM을 가지고 있다
// 리액트는 state가 변경되면 리렌더링된다, 그 때 2번에 해당되는 가상DOM을 만드는 것
// 1. 화면 갱신되기 전 (최초 로딩 화면, 초기화면) 구조가 담겨있는 가상DOM객체
// 2. 화면 갱신 후 보여야하는 가상DOM 객체
// 이후 state가 변경되면 2번에서 생성된 가상돔과 1번에서 이미 갖고 있던 가상 돔을 비교하여 변경사항을 빠르게 파악하고, 변경이 일어난 부분만 실제 DOM에 적용시켜준다.  *하나씩 적용시키는 것이 아닌 변경사항을 한꺼번에 모아서 변경해 준다 (배치 업데이트)
