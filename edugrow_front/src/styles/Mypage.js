import styled from "styled-components";

export const HighContainer = styled.div`
  background-color: yellow;
  position: relative;
  height: 200px;
  margin: 5px;
`;

export const LeaContainer = styled.div`
  background-color: beige;
  position: relative;
  height: 200px;
  margin: 5px;
`;

export const ArchContainer = styled.div`
  background-color: orange;
  position: relative;
  height: 200px;
  margin: 5px;
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

export const BasicBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  top: 17vh;
  left: 50%;

  background-color: blue;
  width: 50vw;
  overflow-x: scroll;
  overflow-y: hidden;
  transform: translate(-50%, -50%);
`;

// Lock상태인지 아닌지에 따라
// background값과 가운데 img값 다르게 주기 (props로 렌더링) -> img src는 jsx에서 처리
export const LeaItem = styled.div`
  position: relative;
  width: 12vw;
  height: 14vh;
  margin: 1.5vw;
  border-radius: 5px 5px 40px 40px;

  background-color: ${(props) =>
    props.lock === "on" ? "rgba(177, 177, 177, 0.25)" : "#233554"};
`;

export const LeaItemLogo = styled.img`
  width: ${(props) => (props.lock === "on" ? "3.5vw" : "6vw")};
  height: ${(props) => (props.lock === "on" ? "4.5vh" : "6vh")};

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  filter: ${(props) =>
    props.lock === "on" ? "none" : "brightness(0) invert(1)"};
`;

export const ArchItem = styled.div`
  position: relative;
  width: 40vw;
  height: 15vh;

  top: 1vh;
  left: 3vw;
`;

export const UnitBox = styled.div`
  position: relative;
  background: #eeeeee;

  width: 8vw;
  height: 4.5vh;

  font-weight: 700;
  font-size: 1em;
  line-height: 4.5vh;
  text-align: center;

  /* background-color: red; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const HourBox = styled.div`
  position: absolute;
  left: 1vw;
  top: 2vh;

  width: 15vw;
  height: 10vh;

  background: rgba(238, 238, 238, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
