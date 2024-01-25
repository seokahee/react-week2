// 8강, 9강 React.memo, useCallback

import React from "react";

const style = {
  width: "100px",
  height: "100px",
  backgroundColor: "#01c49f",
  color: "white",
};

function Box1({ initCount }) {
  console.log("Box1 컴포넌트가 렌더링 되었습니다");

  return (
    <div style={style}>
      <button
        onClick={() => {
          initCount();
        }}
      >
        초기화
      </button>
    </div>
  );
}

// 부모 컴포넌트의 state가 변경돼 props가 변하지 않는 한 자식 컴포넌트는 리렌더링 되지 않는다.
// memo - 컴포넌트 캐싱(컴포넌트를 메모리에 저장하여 필요할때 사용한다)
export default React.memo(Box1);
