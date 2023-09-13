import styled from "styled-components";
import Archive from "../components/Archive";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import League from "../components/League";

import Topmypage from "../components/Topmypage";
import UserInfo from "../components/UserInfo";
import { InfoContainer } from "../styles/Mypage";

const Wrapper = styled.div`
  height: auto;
  min-height: 100%;
  padding-bottom: 82px;
`;

function Mypage() {
  return (
    <>
      <Wrapper>
        <Topmypage />
        <UserInfo />
        <Highlight />
        <League />
        <Archive />
      </Wrapper>
      <Footer chosen={4} />
    </>
  );
}

export default Mypage;
