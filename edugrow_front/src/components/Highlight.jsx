import { HighContainer, MainText, ShareBtn, ResultBox } from "../styles/Mypage";
import ShareImgSrc from "../img/ShareImg.png";
import styled from "styled-components";

const ShareImg = styled.img`
  position: relative;
  width: 13px;
  height: auto;
`;

const ContentWrapper = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 90%;
  padding: 0px 20px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.span`
  width: 100%;
  display: block;
  font-family: "Nexon Football Gothic B";
  text-align: left;
  font-size: 20px;
  color: #ffffff;
`;

const HighRank = styled.span`
  font-family: "jsMath";
  font-weight: 700;
  font-size: 70px;
  color: #e7b023;
  line-height: 50px;
  text-shadow: 2px 5px 8px rgba(0, 0, 0, 0.8);
`;

const Underline = styled.hr`
  border: 1.5px solid #ffffff;
  margin-top: 6px;
  margin-bottom: 1px;
`;

function Highlight() {
  return (
    <HighContainer>
      <MainText>하이라이트</MainText>
      <ShareBtn>
        <ShareImg src={ShareImgSrc}></ShareImg>
      </ShareBtn>
      <ResultBox>
        <ContentWrapper>
          <TextWrapper style={{ top: -10 }}>
            <Text>5월 26일에</Text> <Text>운초우선교육관에서</Text>
          </TextWrapper>
          <TextWrapper style={{ top: 15 }}>
            <HighRank>3</HighRank>
            <Underline style={{ width: 60 }} />
            <Underline style={{ width: 70 }} />
          </TextWrapper>

          <TextWrapper style={{ top: 15 }}>
            <Text>위를 </Text>
            <Text>달성했습니다!</Text>
          </TextWrapper>
        </ContentWrapper>
      </ResultBox>
    </HighContainer>
  );
}

export default Highlight;
