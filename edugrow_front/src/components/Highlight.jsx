import { HighContainer, MainText, ShareBtn, ResultBox } from "../styles/Mypage";
import ShareImgSrc from "../img/ShareImg.png";
import styled from "styled-components";

const ShareImg = styled.img`
  position: relative;
  width: 13px;
  height: auto;
`;

function Highlight() {
  return (
    <HighContainer>
      <MainText>하이라이트</MainText>
      <ShareBtn>
        <ShareImg src={ShareImgSrc}></ShareImg>
      </ShareBtn>
      <ResultBox />
    </HighContainer>
  );
}

export default Highlight;
