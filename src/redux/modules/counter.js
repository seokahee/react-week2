// 14강 counter만들기

// 초기 상태값(state)
const initialState = {
  number: 0,
};

// const [number,setNumber] = useState(0) = initialState 같은 로직

// 리듀서 : state에 변화를 일으키는 함수
// 1. state를 action의 type에 따라 변경하는 함수

// input : state, action
const counter = (state = initialState, action) => {
  console.log(state); // 카운더가 언디파인으로 떠서 콘솔로 확인해보니 {number: 0} 이렇게 나옴
  switch (action.type) {
    case "PLUS_ONE":
      return {
        // number는 객체라는것이 콘솔로 확인 되었으므로 리턴값을 객체 형태로 작성 넘버는 스테이트의 넘버이며 +1을 해줘라 그럼 app컴포넌트의 버튼 누를때마다 카운트 증가!
        number: state.number + 1,
      };
    case "MINUS_ONE":
      return {
        number: state.number - 1,
      };

    default:
      return state;
    // 조건 없이 무조건 state를 반환
  }
};
// action은 객체형태로 되어있고 타입과 값을 가지고 있다, state에 어떤 행동(작업)을 취할지 정한다

export default counter;
// 카운더 리듀서를 반환 (왜? 딴데서 써야하니까)
