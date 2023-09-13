import styled from "styled-components";
import { useState } from "react";
import Board from "../components/ranking/Board";
import Footer from "../components/Footer";
import BuildingSelect from "../components/ranking/BuildingSelect";
import buildingList from "../SampleData";

const Background = styled.div`
  /* position: absolute; */
  width: 100%;
  min-height: calc(100vh - 82px);
  height: calc(100vh - 82px);
  padding-bottom: 82px;
  background-color: #233554;
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
`;

const Title = styled.h1`
  font-family: "Nexon Football Gothic B";
  font-weight: 400;
  font-size: 35px;
  line-height: 50px;
  text-align: center;
  margin: 10px 0px 30px 0px;
  color: #ffffff;
`;

const Name = styled(Title)`
  display: inline;
  color: #d34a4d;
`;

export default function Ranking() {
  const [place, setPlace] = useState(0);
  return (
    <>
      <Background>
        <BuildingSelect place={place} setPlace={setPlace} />
        <Title>
          <Name as={"span"}>{buildingList[place].name}</Name> 리그
        </Title>
        <Board place={place} />
      </Background>
      <Footer chosen={1} />
    </>
  );
}
