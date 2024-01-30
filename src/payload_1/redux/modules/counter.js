// 17강 payload

// action value
const PLUS_ONE = "counter/PLUS_ONE";
const MINUS_ONE = "counter/MINUS_ONE";
const PLUS_N = "counter/PLUS_N";
const MINUS_N = "counter/MINUS_N";

// action creator : dispatch로 보낼 action객체의 value를 리턴하는 함수
export const plusOne = () => {
  return {
    type: PLUS_ONE,
  };
  // action은 객체형태이므로 반환값을 객체 형태로 만든다
};

export const minusOne = () => {
  return {
    type: MINUS_ONE,
  };
};

export const plusN = (payload) => {
  return {
    type: PLUS_N,
    payload,
    // 인풋에 입력된 값 (payload)만큼 + 해주기 위해 액션 객체에 payload를 인자로 받아 리턴해준다
  };
};
export const minusN = (payload) => {
  return {
    type: MINUS_N,
    payload,
  };
};

// 초기 상태값(state)
const initialState = {
  number: 0,
  // const [number,setNumber] = useState(0) = initialState 같은 로직
};

// 리듀서 : state에 변화를 일으키는 함수
// 1. state를 action의 type에 따라 변경하는 함수

// action 객체는 action type를 payload만큼 처리하는 것
// ex. payload가 3인경우 3만큼 plus

// 리듀서의input : state, action
const counter = (state = initialState, action) => {
  switch (action.type) {
    case PLUS_ONE:
      return {
        number: state.number + 1,
      };
    case MINUS_ONE:
      return {
        number: state.number - 1,
      };
    case PLUS_N:
      return {
        number: state.number + action.payload,
      };
    case MINUS_N:
      return {
        number: state.number - action.payload,
      };
    default:
      return state;
  }
};

export default counter;
