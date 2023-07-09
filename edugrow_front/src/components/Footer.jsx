import styled from "styled-components";

const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: azure;
  width: 100%;
  height: 12vh;

  border-top: 1px solid rgba(0, 0, 0, 0.25);
`;
const MenuItem = styled.div`
  width: 20%;
  height: 10vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 0.4vh;
`;

const MenuIcon = styled.img`
  width: 50%;
  height: 5vh;
  margin: 0 auto;
`;

const MenuText = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 1em;
  margin-top: 0.5vh;
  text-align: center;

  color: rgba(0, 0, 0, 0.4);
`;

function Footer() {
  return (
    <MenuContainer>
      <MenuItem>
        <MenuIcon src="/img/mapicon.png" />
        <MenuText>홈</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon src="/img/charticon.png" />
        <MenuText>랭킹</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon src="/img/runicon.png" />
        <MenuText>공부</MenuText>
      </MenuItem>
      <MenuItem>
        <MenuIcon src="/img/profileicon.png" />
        <MenuText>활동</MenuText>
      </MenuItem>
    </MenuContainer>
  );
}

export default Footer;
