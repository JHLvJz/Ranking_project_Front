import styled from "styled-components";
import { React, useState, useRef } from "react";
import GlobalFonts from "../fonts/fonts";
import StopwatchImg from "../img/StopwatchImg.png";
import StopImg from "../img/SwStop.png";
import StartImg from "../img/SwStart.png";
import PauseImg from "../img/SwPause.png";

const Wrapper = styled.div`
  position: absolute;
  justify-content: center;
  background-color: #233554;
  width: 100%;
  height: 100vh; // 확인해 보기
`;

const Div = styled.div`
  margin: 0 auto;
  display: block;
  height: auto;
`;

const Sw = styled(Div)`
  height: 547px;
  text-align: center;
`;

const Btns = styled(Div)`
  width: 340px;
  display: flex;
  justify-content: space-between;
`;

const Outline = styled.div`
  position: relative;
  margin: 0 auto;
  top: 15vh;
  width: 340px;
  height: 340px;
  background-color: white;
  border-radius: 100%;
  border: 10px solid #d34a4d;
`;

const Time = styled.div`
  position: relative;
  top: 134px;
  font-family: "Inter Black Italic";
  font-size: 55px;
  text-align: center;
`;

const SwImg = styled.img`
  position: relative;
  top: 15vh;
  width: 50px;
  height: 50px;
`;

const BtnImg = styled.img`
  position: relative;
  height: 22px;
  width: auto;
`;
// 수정: 이미지가 스톱워치 영역이 아닌 페이지 기준으로 가운데 정렬되어 있음
// 페이지 너비가 스톱워치보다 좁아지면 따로 움직인다

const StopwatchBtn = styled.button`
  position: relative;
  text-align: center;
  width: 97px;
  height: 61px;
  border: none;
  border-radius: 20px;
  background-color: #d34a4d;
`;

function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const increment = useRef(null);

  const handleStart = () => {
    if (!isActive) {
      setIsActive(true);
      increment.current = setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }
  };

  const handlePause = () => {
    setIsActive(false);
    clearInterval(increment.current);
  };

  const handleStop = () => {
    clearInterval(increment.current);
    setIsActive(false);
    setTimer(0);
  };

  const formatTime = () => {
    const getSeconds = `0${timer % 60}`.slice(-2);
    const minutes = `${Math.floor(timer / 60)}`;
    const getMinutes = `0${minutes % 60}`.slice(-2);
    const getHours = `0${Math.floor(timer / 3600)}`.slice(-2);

    return `${getHours}:${getMinutes}:${getSeconds}`;
  };

  return (
    <Wrapper>
      <GlobalFonts />
      <Sw id="time">
        <SwImg src={StopwatchImg} />
        <Outline>
          <Time>{formatTime()}</Time>
        </Outline>
      </Sw>
      <Btns>
        <StopwatchBtn id="start" onClick={handleStart}>
          <BtnImg src={StartImg} />
        </StopwatchBtn>
        <StopwatchBtn id="pause" onClick={handlePause}>
          <BtnImg src={PauseImg} />
        </StopwatchBtn>
        <StopwatchBtn id="stop" onClick={handleStop}>
          <BtnImg src={StopImg} />
        </StopwatchBtn>
      </Btns>
    </Wrapper>
  );
}

export default Stopwatch;
