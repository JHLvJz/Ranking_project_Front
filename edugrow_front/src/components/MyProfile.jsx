import styled from "styled-components";
import { ProfileContainer } from "../styles/Mypage";
import DefImg from "../img/DefProfile.png";

const userName = "사용자명";
const userProfImg = DefImg;

const TextDiv = styled.div`
  position: relative;
  display: inline-block;
  left: 30px;
  height: 105px;
  width: 150px;
`;

const ImgDiv = styled.div`
  position: relative;
  display: inline-block;
`;

const UserName = styled.span`
  position: relative;
  font-family: "Nexon Football Gothic B";
  top: 25px;
  font-weight: 400;
  font-size: 36px;
`;

const ImgField = styled.div`
  position: relative;
  top: 25px;
  width: 80px;
  height: 80px;
  background-color: #d9d9d9;
  border-radius: 100%;
  text-align: center;
`;

const UserImg = styled.img`
  width: 35px;
  height: 35px;
`;

function MyProfile() {
  return (
    <ProfileContainer>
      <TextDiv>
        <UserName>{userName}</UserName>
      </TextDiv>
      <ImgDiv>
        <ImgField></ImgField>
      </ImgDiv>
    </ProfileContainer>
  );
}

export default MyProfile;
