import Archive from "../components/Archive";
import Highlight from "../components/Highlight";
import League from "../components/League";
import UserInfo from "../components/UserInfo";
import { InfoContainer } from "../styles/Mypage";

function Mypage() {
  return (
    <>
      <h3>마이페이지 레이아웃</h3>
      <UserInfo />
      <Highlight />
      <League />
      <Archive />
    </>
  );
}

export default Mypage;
