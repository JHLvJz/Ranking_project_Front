import styled from "styled-components";
import Archive from "../components/Archive";
import Footer from "../components/Footer";
import Highlight from "../components/Highlight";
import League from "../components/League";

import Topmypage from "../components/Topmypage";
import UserInfo from "../components/UserInfo";
import { InfoContainer } from "../styles/Mypage";

function Mypage() {
  return (
    <>
      <Topmypage />
      <UserInfo />
      <Highlight />
      <League />
      <Archive />
      <Footer />
    </>
  );
}

export default Mypage;
