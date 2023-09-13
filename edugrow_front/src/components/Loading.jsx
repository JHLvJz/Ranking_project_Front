import styled, { keyframes } from "styled-components";

const Rotate = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

const Wrapper = styled.div`
  height: calc(100% - 82px - 46px); // 상위요소 절대 길이 가져와서 임의로 맞춤
  display: flex;
  align-items: center;
`;

const Spinner = styled.div`
  margin: 0 auto;
  width: 40px;
  height: 40px;
  border: 8px solid rgba(35, 53, 84, 0.2);
  border-top: 8px solid rgba(35, 53, 84, 1);
  border-radius: 50%;
  animation: ${Rotate} 1s linear infinite;
`;

export default function Loading() {
  return (
    <Wrapper>
      <Spinner></Spinner>
    </Wrapper>
  );
}
