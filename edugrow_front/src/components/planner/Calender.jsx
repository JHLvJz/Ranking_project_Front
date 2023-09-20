import { useEffect, useState } from "react";
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
  cursor: pointer;
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

export default function Calender({ day, setDay }) {
  function handleMinus() {
    setDay((prev) => {
      const newDate = prev.date;
      newDate.setDate(prev.date.getDate() - 1);
      return { date: newDate };
    });
  }

  function handlePlus() {
    setDay((prev) => {
      const newDate = prev.date;
      newDate.setDate(prev.date.getDate() + 1);
      return { date: newDate };
    });
  }

  return (
    <Wrapper>
      <Title>스터디 플래너</Title>
      <Btn onClick={handleMinus}>
        <Img src="/img/left.png" />
      </Btn>
      <Btn>
        {
          <Text>
            {day.date.getFullYear()}년 {day.date.getMonth() + 1}월{" "}
            {day.date.getDate()}일
          </Text>
        }
      </Btn>
      <Btn onClick={handlePlus}>
        <Img src="/img/right.png" />
      </Btn>
    </Wrapper>
  );
}
