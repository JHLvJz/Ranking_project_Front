import { createGlobalStyle } from "styled-components";
import InterBlackItalic from "./Inter-BlackItalic.woff";
import InterBlack from "./Inter-Black.woff";
import InterRegular from "./Inter-Regular.woff";
import MinaBold from "./Mina-Bold.woff";
import MinaRegular from "./Mina-Regular.woff";
import NotoSansLight from "./NotoSans-Light.woff";
import NotoSansRegular from "./NotoSans-Regular.woff";
import NexonFootballB from "./NEXON-Football-Gothic-B.woff";
import NexonFootballL from "./NEXON-Football-Gothic-L.woff";
import CookieRun from "./CookieRun-Bold.woff";

const GlobalFonts = createGlobalStyle`
  @font-face {
    font-family: "Inter Black Italic";
    src: local("Inter Black Italic"), url(${InterBlackItalic}) format('woff');
  } // 정확한 원리

  @font-face {
    font-family: "Inter Black";
    src: local("Inter Black"), url(${InterBlack}) format('woff');
  }

  @font-face {
    font-family: "Inter Regular";
    src: local("Inter Regular"), url(${InterRegular}) format('woff');
  }

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

  @font-face {
    font-family: "Nexon Football Gothic L";
    src: local("Nexon Football Gothic L"), url(${NexonFootballL}) format('woff');
  }

  @font-face {
    font-family: "Cookierun Bold";
    src: local("Cookierun Bold"), url(${CookieRun}) format('woff');
  }

  @font-face {
    font-family: 'Nexon lv1';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-04@2.1/NEXON Lv1 Gothic OTF.woff') format('woff');
  }

  @font-face {
    font-family: "jsMath";
    src: url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.eot");
    src: url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.eot?#iefix")format("embedded-opentype"),
    url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.woff2")format("woff2"),
    url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.woff")format("woff"),
    url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.ttf")format("truetype"),
    url("https://db.onlinewebfonts.com/t/531ac7fc6c0a0f38e9a90ec916b18735.svg#jsMath-cmbx10")format("svg");
  }
`;

export default GlobalFonts;
