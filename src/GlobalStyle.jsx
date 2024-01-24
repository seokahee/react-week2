// 2강. 전역 스타일링
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{  
  font-family: "Helvetica", "Arial", sans-serif;
  line-height: 1.5;
  }`;

export default GlobalStyle;
