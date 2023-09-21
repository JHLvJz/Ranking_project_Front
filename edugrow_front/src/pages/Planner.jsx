import { useEffect, useState } from "react";
import styled from "styled-components";
import Calender from "../components/planner/Calender";
import Chart from "../components/planner/Chart";
import Footer from "../components/Footer";
import { calcTime } from "../function";

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
  const [time, setTime] = useState({ hour: 0, minute: 0, second: 0 });

  useEffect(() => {
    setTime({
      hour: Math.floor(Math.random() * 10),
      minute: Math.floor(Math.random() * 60),
      second: Math.floor(Math.random() * 60),
    });
  }, [day]);

  return (
    <>
      <Background>
        <Calender day={day} setDay={setDay} />
        <Time>
          {time.hour < 10 ? `0${time.hour}` : time.hour} :{" "}
          {time.minute < 10 ? `0${time.minute}` : time.minute} :{" "}
          {time.second < 10 ? `0${time.second}` : time.second}{" "}
        </Time>
        <Chart />
      </Background>
      <Footer chosen={3} />
    </>
  );
}
