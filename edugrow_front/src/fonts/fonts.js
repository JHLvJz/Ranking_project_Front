import { createGlobalStyle } from "styled-components";
import InterBlackItalic from "./Inter-BlackItalic.woff";

export default createGlobalStyle`
  @font-face {
    font-family: "Inter Black Italic";
    src: local("Inter Black Italic"), url(${InterBlackItalic}) format('woff');
  }
`;
