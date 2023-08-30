import { InfoContainer } from "../styles/Mypage";
import styled from "styled-components";

const UserName = styled.p`
  /* 사용자명 */
  position: relative;
  font-family: "Nexon Football Gothic B";
  font-style: normal;
  font-size: 36px;
  left: 5%;
  margin: 2vh;
  color: #000000;
`;

const NickName = styled.p`
  position: relative;
  font-family: "Nexon Football Gothic L";
  font-size: 15px;
  left: 6%;
  margin: 2vh;
  margin-top: 0;
  color: #000000;
`;

const DetailText = styled.p`
  /* 9 Followers */
  font-family: "Mina Bold";
  font-style: normal;
  font-weight: 700;
  font-size: 13px;
  color: #517a9a;
  margin: 0;
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
  display: inline-block;
  position: relative;
  top: -10px; // 왜 이 영역은 밑으로 내려가 있는지..
  width: 40%;
  height: 100%;
  text-align: center;
`;

const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;

  background-color: #d9d9d9;
`;

const BelongInfo = styled.div`
  position: relative;
  top: 10px;

  width: 100%;
  font-family: "Mina Regular";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  text-align: center;
`;

function UserInfo() {
  return (
    <InfoContainer>
      <div style={{ display: "inline-block", width: "60%" }}>
        <UserName>사용자명</UserName>
        <NickName>사용자 닉네임</NickName>
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            left: "6%",
            height: "4vh",
            width: "70%",
            margin: 0,
          }}
        >
          <DetailText>9 followers</DetailText>
          <DetailText>13 following</DetailText>
        </div>
      </div>

      <ProfileImgBox>
        <ProfileImg />
        <BelongInfo>고려대학교 | 교육학과</BelongInfo>
      </ProfileImgBox>

      {/* <div
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
      </div>*/}
    </InfoContainer>
  );
}

export default UserInfo;
