import styled from "styled-components";

export const HighContainer = styled.div`
  background-color: yellow;
  position: relative;
  height: 200px;
`;

export const MainText = styled.div`
  position: absolute;
  top: 4vh;
  left: 5vw;

  font-weight: 700;
  font-size: 1.5em;
`;

export const MedalBox = styled.div`
  position: absolute;
  top: 3vh;
  right: 6vw;

  /* max-width: 30%; */
  width: 35%;
  height: 40px;

  background: #233554;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;

export const ResultBox = styled.div`
  position: absolute;
  top: 20vh;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  width: 80%;
  height: 120px;

  background: #d34a4d;
  border: 1px solid #d34a4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
`;
