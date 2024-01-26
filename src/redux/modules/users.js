// 14강

// 초기 상태값(state)
const initialState = {
  userId: 123,
};

// const [number,setNumber] = useState(0) = initialState 같은 로직

// 리듀서 : state에 변화를 일으키는 함수
// 1. state를 action의 type에 따라 변경하는 함수

// input : state, action
const users = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
    // 조건 없이 무조건 state를 반환
  }
};
// action은 객체형태로 되어있고 타입과 값을 가지고 있다, state에 어떤 행동(작업)을 취할지 정한다

export default users;
// 카운더 리듀서를 반환 (왜? 딴데서 써야하니까)
