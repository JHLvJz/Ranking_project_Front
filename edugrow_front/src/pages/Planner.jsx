import { useEffect, useState } from "react";
import styled from "styled-components";
import Calender from "../components/planner/Calender";
import Chart from "../components/planner/Chart";
import Footer from "../components/Footer";

const Background = styled.div`
  width: 100%;
  height: auto;
  min-height: 100%;
  padding-bottom: 82px;
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
  const today = new Date();
  const [day, setDay] = useState({ date: today });
  const [time, setTime] = useState();

  return (
    <>
      <Background>
        <Calender day={day} setDay={setDay} />
        <Time>08 : 23 : 39</Time>
        <Chart />
      </Background>
      <Footer chosen={3} />
    </>
  );
}
