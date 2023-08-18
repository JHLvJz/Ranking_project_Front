import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  top: 250px;
  width: 100%;
  height: calc(100vh - 327px); // 전체 뷰포트 - 상단 공간 - footer
  background-color: white;
  overflow-y: auto;
`;

const Text = styled.p`
  position: relative;
  margin: 20px;
  font-family: "Nexon lv1";
  font-weight: 400;
  font-size: 14px;
  color: #000000;
`;

export default function Board() {
  return (
    <Wrapper>
      <Text>7/23 ~ 7/29 주간 랭킹</Text>
    </Wrapper>
  );
}
