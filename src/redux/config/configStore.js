// 13강, 14강 Redux
// 사용법을 숙지하여 인풋과 아웃풋이 무엇인지 이해할것

// 중앙 데이터 관리소(store)를 설정하는 부분

import { createStore } from "redux";
import { combineReducers } from "redux";
import counter from "../modules/counter";
import users from "../modules/users";
// Reducer 들을 하나로 묶는 역할
// combine : 묶다

const rootReducer = combineReducers({
  counter,
  users,
});
// rootReducer : Reducers들을 하나로 모아 만든 기본 Reducer
// combineReducers (인자로 변수가 들어간다)
// modules에 넣은 state 모음을 객체형태로 넣으면 앱을 관리하는 스테이트의 집단들이 rootReducer로 들어가게되고, 모든 컴포넌트들은 props로 값을 전달하지 않아도 중앙관리소에서 접근 및 제어가 가능해진다

const store = createStore(rootReducer);
// createStore 컴포넌트를 하나로 묶은 Reducer을 넣어준다

export default store;
// 스토어를 사용하기 위해 내보내기
