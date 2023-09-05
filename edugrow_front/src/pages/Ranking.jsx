import styled from "styled-components";
import Board from "../components/ranking/Board";
import Select from "../components/ranking/Select";
import Footer from "../components/Footer";

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
  margin: 30px 0px 30px 0px;
  color: #ffffff;
`;

const Name = styled(Title)`
  display: inline;
  color: #d34a4d;
`;

export default function Ranking() {
  return (
    <>
      <Background>
        <Title>
          <Name>중앙광장</Name> 리그
        </Title>
        <Board />
      </Background>
      <Footer />
    </>
  );
}
