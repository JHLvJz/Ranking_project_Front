import { useState } from "react";
import styled from "styled-components";
import Date from "../components/planner/Date";

const Background = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: white;
  overflow: auto;
  text-align: center;
`;

const Time = styled.p`
  font-family: "Nexon Football Gothic L";
  margin: 20px;
  font-size: 35px;
  color: black;
`;

export default function Planner() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();

  return (
    <Background>
      <Date />
      <Time>08 : 23 : 39</Time>
    </Background>
  );
}
