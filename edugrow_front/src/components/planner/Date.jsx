import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 87px;
  line-height: 87px;
  background-color: #d34a4d;
  align-items: center;
  justify-content: space-evenly;
`;

const Btn = styled.button`
  border: 0;
  background-color: transparent;
`;

const Img = styled.img`
  width: 10px;
  height: auto;
`;

const Title = styled.h1`
  margin: 0%;
  font-family: "Nexon Football Gothic L";
  font-size: 28px;
  color: white;
`;

const Text = styled.span`
  font-size: 15px;
  font-family: "Inter Regular";
  font-weight: 400;
  color: white;
`;

export default function Date() {
  return (
    <Wrapper>
      <Title>스터디 플래너</Title>
      <Btn>
        <Img src="/img/left.png" />
      </Btn>
      <Btn>
        <Text>2023년 9월 4일</Text>
      </Btn>
      <Btn>
        <Img src="/img/right.png" />
      </Btn>
    </Wrapper>
  );
}
