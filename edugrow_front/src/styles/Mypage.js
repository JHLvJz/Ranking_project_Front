import styled from "styled-components";

export const TopNavContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0;
  height: 59px;
  text-align: center;
  line-height: 59px;
  font-family: "Mina Bold";
  font-weight: 900;
  font-size: 20px;
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
  height: fit-content;
  margin: 2vh 0 0 0;
  box-sizing: border-box;
`;

export const LeaContainer = styled.div`
  /* background-color: beige; */
  position: relative;
  margin-top: 20px;
  box-sizing: border-box;
`;

export const ArchContainer = styled.div`
  /* background-color: orange; */
  position: relative;
  height: fit-content;
  margin: 0;
  box-sizing: border-box;
`;

export const MainText = styled.div`
  display: inline-block;
  font-family: "Mina Bold";
  margin-left: 30px;
  vertical-align: middle;
  font-weight: 900;
  font-size: 23px;
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
  position: relative;

  width: 80%;
  height: 164px;
  margin: 10px auto;

  background: #d34a4d;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 35px;
`;

export const ShareBtn = styled.button`
  display: inline-block;
  position: relative;
  width: 35px;
  height: 25px;
  left: 15px;
  background: #eeeeee;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const BasicBox = styled.div`
  /* position: absolute; */
  display: flex;
  flex-direction: row;

  /* top: 13vh;
  left: 60%;
  margin-right: 0;
  padding-right: 0; */

  /* background-color: blue; */
  margin: auto;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 80%;
  overflow-x: scroll;
  overflow-y: hidden;

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
  margin: auto;
  top: 0;
`;

export const LeaItemLogo = styled.img`
  width: 110px;
  height: auto;
  position: relative;
`;

export const ArchItem = styled.div`
  position: relative;
  width: 140px;
  height: 125px;
  margin: 2%;

  top: 0.3vh;
`;

export const UnitBox = styled.div`
  position: relative;
  background: #eeeeee;

  width: 60px;
  height: 35px;

  font-family: "Nexon Football Gothic L";
  font-weight: 700;
  font-size: 17px;
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

  width: 123px;
  height: 101px;

  background: rgba(238, 238, 238, 0.51);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  z-index: 0;
`;
