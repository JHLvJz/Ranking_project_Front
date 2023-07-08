import { InfoContainer } from "../styles/Mypage";
import styled from "styled-components";

const UserName = styled.p`
  /* 사용자명 */
  position: relative;
  font-family: "Mina";
  font-style: normal;
  font-weight: 700;
  font-size: 1.8em;
  left: 5%;
  margin-bottom: 1vh;
  color: #000000;
`;

const NickName = styled.p`
  position: relative;
  font-family: "Mina";
  font-weight: 400;
  font-size: 1em;
  left: 6%;
  margin-top: 1vh;
  margin-bottom: 0;
  color: #000000;
`;

const DetailText = styled.p`
  /* 9 Followers */
  font-family: "Mina";
  font-style: normal;
  font-weight: 700;
  font-size: 0.8em;
  color: #517a9a;
  margin: 3%;
`;

const ProfileBox = styled.div`
  width: 37%;
  height: 3.5vh;

  background: #eeeeee;
  border-radius: 10px;
  padding: 2%;
  line-height: 3.5vh;
  text-align: center;
`;

const ProfileImgBox = styled.div`
  position: absolute;
  top: 0vh;
  right: 5%;
  width: 30%;
  height: 15vh;
`;

const ProfileImg = styled.img`
  position: absolute;
  width: 70%;
  height: 11.5vh;
  border-radius: 100%;

  top: 2vh;
  left: 50%;
  transform: translate(-50%);
  background-color: aliceblue;
`;

const BelongInfo = styled.div`
  position: absolute;
  top: 14vh;

  width: 100%;
  font-family: "Mina";
  font-style: normal;
  font-weight: 400;
  font-size: 0.8em;
  text-align: center;
`;

function UserInfo() {
  return (
    <InfoContainer>
      <UserName>사용자명</UserName>
      <NickName>사용자 닉네임</NickName>
      <ProfileImgBox>
        <ProfileImg />
        <BelongInfo>고려대학교 | 교육학과</BelongInfo>
      </ProfileImgBox>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          left: "4%",
          width: "40%",
          height: "4vh",
          margin: 0,
        }}
      >
        <DetailText>9 followers</DetailText>
        <DetailText>13 following</DetailText>
      </div>
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "70%",
          height: "5vh",
        }}
      >
        <ProfileBox>
          <img
            src="/img/setting.png"
            style={{
              position: "relative",
              top: "0.2vh",
              marginRight: "3%",
            }}
          />
          프로필 수정
        </ProfileBox>
        <ProfileBox>
          <img
            src="/img/addfriend.png"
            style={{
              position: "relative",
              top: "0.2vh",
              marginRight: "3%",
            }}
          />
          친구 추가
        </ProfileBox>
      </div>
    </InfoContainer>
  );
}

export default UserInfo;
