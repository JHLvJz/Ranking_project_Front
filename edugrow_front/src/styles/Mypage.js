import styled from "styled-components";


export const TopNavContainer = styled.div`
  position: relative;
  margin: 0;
  height: 4vh;
  text-align: center;
  padding: 2%;
  line-height: 4vh;
  font-weight: 900;
  font-size: 1.2em;
`;

export const InfoContainer = styled.div`
  position: relative;
  height: 24vh;
  margin: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.25);
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
`;

export const HighContainer = styled.div`
  /* background-color: yellow; */

  position: relative;
  height: 180px;
  margin: 2vh 0 0 0;
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
  margin-top: 40px;
  position: absolute;
  font-family: "Mina Bold";
  font-size: 25px;
  font-weight: 700;

  left: 60px;
`;

export const MedalBox = styled.div`
  position: absolute;
  top: 40px;
  right: 7%;

  /* max-width: 30%; */

  width: 40%;
  height: 40px;

  background: #eeeeee;
  border: none;
  border-radius: 5px;

  font-family: "Mina Bold";
  font-weight: 700;

  cursor: pointer;
`;

export const ResultBox = styled.div`
  position: absolute;
  top: 173px;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);

  width: 342px;
  height: 164px;

  background: #d34a4d;
  border: 1px solid #d34a4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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

  width: 55px;
  height: 30px;

  font-family: "Nexon Football Gothic B";
  font-size: 1em;
  line-height: 4.5vh;
  text-align: center;

  margin-right: 100px;

  /* background-color: red; */
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 2;
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
  z-index: 1;
`;
