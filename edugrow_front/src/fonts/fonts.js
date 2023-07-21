import { createGlobalStyle } from "styled-components";
import InterBlackItalic from "./Inter-BlackItalic.woff";
import MinaBold from "./Mina-Bold.woff";
import MinaRegular from "./Mina-Regular.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter Black Italic";
    src: local("Inter Black Italic"), url(${InterBlackItalic}) format('woff');
  }

  @font-face {
    font-family: "Mina Bold";
    src: local("Mina Bold"), url(${MinaBold}) format('woff');
  }

  @font-face {
    font-family: "Mina Regular";
    src: local("Mina Regular"), url(${MinaRegular}) format('woff');
  }
`;

export default GlobalFonts;
