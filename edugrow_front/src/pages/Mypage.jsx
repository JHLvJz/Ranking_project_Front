import styled from "styled-components";
import Archive from "../components/Archive";
import Highlight from "../components/Highlight";
import League from "../components/League";
import MyProfile from "../components/MyProfile";

const Title = styled.h1`
  font-family: "Mina Bold";
  font-size: 20px;
  font-weight: 700;
  text-align: center;
`;

function Mypage() {
  return (
    <>
      <Title>My Page</Title>
      <MyProfile />
      <Highlight />
      <League />
      <Archive />
    </>
  );
}

export default Mypage;
