import styled from "styled-components";

export const InfoContainer = styled.div`
  position: relative;
  height: 180px;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const HighContainer = styled.div`
  /* background-color: yellow; */

  position: relative;
  height: 180px;
  margin: 0;
  box-sizing: border-box;
`;

export const LeaContainer = styled.div`
  /* background-color: beige; */
  position: relative;
  height: 160px;
  margin: 0;
  box-sizing: border-box;
`;

export const ArchContainer = styled.div`
  /* background-color: orange; */
  position: relative;
  height: 160px;
  margin: 0;
  box-sizing: border-box;
`;

export const MainText = styled.div`
  position: absolute;

  left: 5vw;

  font-weight: 700;
  font-size: 1.5em;
`;

export const MedalBox = styled.div`
  position: absolute;
  top: 1vh;
  right: 7%;

  /* max-width: 30%; */
  width: 40%;
  height: 40px;

  background: #233554;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 17px;
`;

export const ResultBox = styled.div`
  position: absolute;
  top: 63%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  width: 80%;
  height: 100px;

  background: #d34a4d;
  border: 1px solid #d34a4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
`;

export const BasicBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: row;

  top: 13vh;
  left: 60%;
  margin-right: 0;
  padding-right: 0;

  /* background-color: blue; */
  width: 100%;
  overflow-x: scroll;
  overflow-y: hidden;
  transform: translate(-50%, -50%);

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

// Lock상태인지 아닌지에 따라
// background값과 가운데 img값 다르게 주기 (props로 렌더링) -> img src는 jsx에서 처리
export const LeaItem = styled.div`
  position: relative;
  top: 0;
  width: 80px;
  height: 12vh;
  margin-right: 20px;
  border-radius: 5px 5px 40px 40px;

  background-color: ${(props) =>
    props.lock === "on" ? "rgba(177, 177, 177, 0.25)" : "#233554"};
`;

export const LeaItemLogo = styled.img`
  width: ${(props) => (props.lock === "on" ? "20%" : "27%")};
  height: ${(props) => (props.lock === "on" ? "20%" : "28%")};

  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);

  filter: ${(props) =>
    props.lock === "on" ? "none" : "brightness(0) invert(1)"};
`;

export const ArchItem = styled.div`
  position: relative;
  width: 400px;
  height: 15vh;
  margin: 2%;

  top: 0.3vh;
`;

export const UnitBox = styled.div`
  position: relative;
  background: #eeeeee;

  width: 60px;
  height: 4.5vh;

  font-weight: 700;
  font-size: 1em;
  line-height: 4.5vh;
  text-align: center;

  margin-right: 100px;

  /* background-color: red; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export const HourBox = styled.div`
  position: absolute;
  left: 5%;
  top: 2vh;

  width: 90%;
  height: 70px;

  background: rgba(238, 238, 238, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;
