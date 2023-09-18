import styled from "styled-components";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../SampleData";

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
  const [load, setLoad] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [userTime, setUserTime] = useState({});

  const getUser = async () => {
    setLoad(true);
    setUserInfo({
      nickName: "이름",
      imageUrl: "url",
      departmentName: "대학",
      collegeName: "학과",
    });
    setUserTime({
      memberDailyStudyTime: 10,
      memberWeeklyStudyTime: 100,
      memberMonthlyStudyTime: 1000,
      memberTotalStudyTime: 1110,
    });

    // await axios
    //   .get(baseUrl + '/api/members/my-page')
    //   .then((response) => {
    //     console.log(response);
    //     setUser(response.data);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });

    setLoad(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <Wrapper>
        <Topmypage />
        <UserInfo />
        <Highlight />
        <League />
        <Archive time={userTime} />
      </Wrapper>
      <Footer chosen={4} />
    </>
  );
}

export default Mypage;
