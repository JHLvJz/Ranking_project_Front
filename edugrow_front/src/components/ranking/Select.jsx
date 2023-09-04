import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
  position: relative;
  top: -25px;
  display: flex;
  justify-content: space-around;
  left: 10px;
`;

const Btn = styled.button`
  border: none;
  height: 35px;
  background-color: white;
  border-radius: 10px;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  color: #000000;
  font-family: "Nexon lv1";
  font-size: 18px;
  font-weight: 700;
`;

export default function Select() {
  return (
    <Wrapper>
      <Btn>week</Btn>
      <Btn>month</Btn>
      <Btn>total</Btn>
    </Wrapper>
  );
}
