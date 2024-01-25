// 6강 useContext

import React from "react";
import Father from "./Father";
import { FamilyContext } from "../context/FamilyContext";

// 1. 하위 컴포넌트가 모두 접근 할 수 있는 전역객체 FamilyContext생성
// 2. 정보를 보낼 부모와 컨텍스트 연결, 정보를 내려줄 자식 컴포넌트 연결
// 3. 기존에는 props를 이용했지만 Provider value={{ houseName, pocketMoney }} 데이터 전달

// GF가 Child한테 정보를 전달하여 Child한테 내용을 출력하도록 하자
function GrandFather() {
  const houseName = "스파르타"; // 집안 이름
  const pocketMoney = 10000; // 손자 용돈

  return (
    // Father 컴포넌트 아래로 FamilyContext를 제공해준다는 의미
    // props를 value로 보낸다(객체니까 {} 안에 담아야함)
    <FamilyContext.Provider value={{ houseName, pocketMoney }}>
      <Father />
    </FamilyContext.Provider>
  );
}

export default GrandFather;
