// 6강 useContext

import React, { useContext } from "react";
import { FamilyContext } from "../context/FamilyContext";

// 4. 전역 컨텍스트에 값을 받아오면 끝(props로 받는게 아닌 컨텍스트로 받는것)

const style = {
  color: "red",
  fontWeight: "900",
};
function Child() {
  // GF가 FamilyContext에 담아 보낸 정보를 useContext를 통해 변수에 담아 꺼낸다(컨텍스트 이름을 넣어야함)
  const data = useContext(FamilyContext);
  console.log("data", data);

  return (
    <div>
      나는 이 집안의 막내에요 <br />
      할아버지가 우리 집 이름은 <span style={style}>{data.houseName}</span>라고
      하셨어요 <br />
      게다가 용돈도 <span style={style}>{data.pocketMoney}</span>원이나 주셨어요
    </div>
  );
}

export default Child;
