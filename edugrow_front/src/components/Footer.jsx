import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  width: 430px; // position fixed 설정하면 width 100% 문제 생김
  height: 82px;

  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;
const MenuItem = styled.div`
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 5px;
  justify-content: space-around;
  cursor: pointer;
`;

const MenuIcon = styled.img`
  height: 40px;
  width: auto;
  margin: auto;
`;

const MenuText = styled.span`
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  text-align: center;
  color: rgba(0, 0, 0, 0.4);
`;

function Footer() {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <MenuItem onClick={() => navigate("/")}>
        <MenuIcon src="/img/mapicon.png" />
        <MenuText>홈</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/ranking")} v>
        <MenuIcon src="/img/charticon.png" />
        <MenuText>랭킹</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon src="/img/runicon.png" />
        <MenuText>공부</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/planner")}>
        <MenuIcon />
        <MenuText>플래너</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/mypage")}>
        <MenuIcon src="/img/profileicon.png" />
        <MenuText>활동</MenuText>
      </MenuItem>
    </MenuContainer>
  );
}

export default Footer;
