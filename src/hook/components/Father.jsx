// 6강 useContext

import React from "react";
import Child from "./Child";

// 자식 컴포넌트만 연결하면 Father컴포넌트는 더 할 일 없음

function Father() {
  return <Child />;
}

export default Father;
