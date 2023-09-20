import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const MenuContainer = styled.div`
  box-sizing: border-box;
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
  ${({ highlight }) =>
    highlight &&
    "filter: invert(0%) sepia(100%) saturate(0%) hue-rotate(21deg) brightness(97%) contrast(103%);"}
`;

const MenuText = styled.span`
  font-family: "Inter Regular";
  font-style: normal;
  font-weight: ${({ highlight }) => (highlight ? "700" : "400")};
  font-size: 1em;
  text-align: center;
  color: ${({ highlight }) =>
    highlight ? "rgba(0, 0, 0, 0.6)" : "rgba(0, 0, 0, 0.4)"};
`;

function Footer({ chosen }) {
  const navigate = useNavigate();
  return (
    <MenuContainer>
      <MenuItem onClick={() => navigate("/")}>
        <MenuIcon src="/img/mapicon.png" highlight={chosen === 0} />
        <MenuText highlight={chosen === 0}>홈</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/ranking")}>
        <MenuIcon src="/img/charticon.png" highlight={chosen === 1} />
        <MenuText highlight={chosen === 1}>랭킹</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon src="/img/runicon.png" highlight={chosen === 2} />
        <MenuText highlight={chosen === 2}>공부</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/planner")}>
        <MenuIcon highlight={chosen === 3} />
        <MenuText highlight={chosen === 3}>플래너</MenuText>
      </MenuItem>
      <MenuItem onClick={() => navigate("/mypage")}>
        <MenuIcon src="/img/profileicon.png" highlight={chosen === 4} />
        <MenuText highlight={chosen === 4}>활동</MenuText>
      </MenuItem>
    </MenuContainer>
  );
}

export default Footer;
