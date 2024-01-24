// 스타일 컴포넌트
import "./App.css";
import styled from "styled-components"; // 스타일 컴포넌트 연결

// 태그에 스타일을 입힌, 스타일된 컴포넌트 만들기

const StContainer = styled.div`
  display: flex;
`;

const StBox = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${(props) => props.borderColor};
  margin: 20px;
`;

// 박스의 색
const boxList = ["red", "blue", "green"];

// 색을 넣으면, 이름을 반환하는 함수
const getBoxName = function (color) {
  switch (color) {
    case "red":
      return "빨간 박스";

    case "blue":
      return "파란 박스";

    case "green":
      return "초록 박스";

    default:
      return "검정 박스";
  }
};

function App() {
  return (
    <StContainer>
      {/* 1. div에 컴포넌트로 스타일을 입힌다 */}
      {/* <StBox borderColor="red">빨간 박스</StBox> */}

      {/* 2. map 함수로 boxList배열을 반복한다, 인덱스가 3개니까 3개가 나옴 */}
      {/* 3. switch문으로 boxList의 color를 기준으로 텍스트를 반환하게 한다 */}
      {/* 결론, boxList배열 인덱스 만큼 반복하며 switch문의 조건에 맞춰 텍스트를 넣어주고 StBox에 입력된 스타일을 넣어준다(컬러는 list에 입력된 값)*/}

      {boxList.map(function (box) {
        return <StBox borderColor={box}>{getBoxName(box)}</StBox>;
      })}
      {/* boxList - 이 배열을 반복할거야 */}
      {/* box - 배열 안에 인덱스 명을 이거로 할거야 */}
      {/* getBoxName(box) - 스위치 문 함수에 인덱스를 매개변수로 보내 작동시킬거야 */}
      {/* 인덱스가 red면 스위치문 결과로는 빨간 박스가 나오니까 스위치문에 매개변수를 보내면 각 색마다 설정해둔 텍스트가 나온다 */}
    </StContainer>
  );
}

export default App;

// 스타일 컴포넌트 설치 방법
// 확장팩으로 들어가 vscode-styled-components 설치
// 터미널에 yanr add styled-components 입력
// 난 npm add styled-components 이렇게 입력했다 보안문제 외에는 괜찮다니까 그대로 쓰는중
// package.json에 "styled-components": "^6.1.8" 있으면 제대로 설치된것
