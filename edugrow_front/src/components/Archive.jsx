import styled from "styled-components";
import { calcTime } from "../function";
const {
  ArchContainer,
  MainText,
  BasicBox,
  UnitBox,
  HourBox,
  ArchItem,
} = require("../styles/Mypage");

const TextBox = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: end;
  justify-content: center;
  padding-bottom: 15px;
  width: 100%;
  height: 80px;
`;

const Hour = styled.span`
  position: relative;
  font-family: "jsMath";
  font-size: 50px;
  font-weight: 700;
  color: #d34a4d;
  margin-right: 15px;
`;

const Text = styled.span`
  position: relative;
  font-family: "Mina Bold";
  font-size: 17px;
  margin-bottom: 10px;
`;

function Archive({ time }) {
  const [hour, minute, second] = calcTime(time.memberMonthlyStudyTime);

  return (
    <ArchContainer>
      <MainText>아카이브</MainText>
      <BasicBox>
        <ArchItem>
          <HourBox />
          <UnitBox>일간</UnitBox>
          <TextBox>
            <Hour>{hour}</Hour>
            <Text>hrs</Text>
          </TextBox>
        </ArchItem>
        <ArchItem>
          <HourBox />
          <UnitBox>주간</UnitBox>
          <TextBox>
            <Hour>{time.memberWeeklyStudyTime}</Hour>
            <Text>hrs</Text>
          </TextBox>
        </ArchItem>
        <ArchItem>
          <HourBox />
          <UnitBox>월간</UnitBox>
          <TextBox>
            <Hour>{time.memberMonthlyStudyTime}</Hour>
            <Text>hrs</Text>
          </TextBox>
        </ArchItem>
      </BasicBox>
    </ArchContainer>
  );
}

export default Archive;
