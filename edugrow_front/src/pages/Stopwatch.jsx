import "../styles/Stopwatch.css";
import styled from "styled-components";
import React from "react";

export const Wrapper = styled.div`
  background-color: "1E1E1E";
`;

function Stopwatch() {
  return (
    <Wrapper>
      <header>
        <h1>StopWatch</h1>
        <div className="line"></div>
      </header>
      <body>
        <div className="time">
          <div id="outline"></div>
        </div>
        <div>
          <button id="start"></button>
          <button id="pause"></button>
          <button id="stop"></button>
        </div>
      </body>
    </Wrapper>
  );
}

export default Stopwatch;
