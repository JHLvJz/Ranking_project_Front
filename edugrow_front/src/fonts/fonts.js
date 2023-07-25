import { createGlobalStyle } from "styled-components";
import InterBlackItalic from "./Inter-BlackItalic.woff";
import MinaBold from "./Mina-Bold.woff";
import MinaRegular from "./Mina-Regular.woff";
import NotoSansLight from "./NotoSans-Light.woff";
import NotoSansRegular from "./NotoSans-Regular.woff";
import NexonFootballB from "./NEXON-Football-Gothic-B.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter Black Italic";
    src: local("Inter Black Italic"), url(${InterBlackItalic}) format('woff');
  } // 정확한 원리

  @font-face {
    font-family: "Mina Bold";
    src: local("Mina Bold"), url(${MinaBold}) format('woff');
    font-weight: 700;
  }

  @font-face {
    font-family: "Mina Regular";
    src: local("Mina Regular"), url(${MinaRegular}) format('woff');
  }

  @font-face {
    font-family: "Noto Sans Light";
    src: local("Noto Sans Light"), url(${NotoSansLight}) format('woff');
  }

  @font-face {
    font-family: "Noto Sans Regular";
    src: local("Noto Sans Regular"), url(${NotoSansRegular}) format('woff');
  }

  @font-face {
    font-family: "Nexon Football Gothic B";
    src: local("Nexon Football Gothic B"), url(${NexonFootballB}) format('woff');
  }
`;

export default GlobalFonts;
