import styled from "styled-components";
import Board from "../components/ranking/Board";
import Select from "../components/ranking/Select";

const Background = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  background-color: #233554;
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
`;

const Title = styled.h1`
  font-family: "Nexon Football Gothic B";
  font-weight: 400;
  font-size: 35px;
  text-align: center;
  color: #ffffff;
`;

const Name = styled(Title)`
  display: inline;
  color: #d34a4d;
`;

export default function Ranking() {
  return (
    <Background>
      <Title>
        <Name>중앙광장</Name> 리그
      </Title>
      <Select></Select>
      <Board />
    </Background>
  );
}
