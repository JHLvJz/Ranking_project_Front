const {
  ArchContainer,
  MainText,
  BasicBox,
  UnitBox,
  HourBox,
  ArchItem,
} = require("../styles/Mypage");

function Archive() {
  return (
    <ArchContainer>
      <MainText>아카이브</MainText>
      <BasicBox>
        <ArchItem>
          <UnitBox>일간</UnitBox>
          <HourBox></HourBox>
        </ArchItem>
        <ArchItem>
          <UnitBox>주간</UnitBox>
          <HourBox></HourBox>
        </ArchItem>
        <ArchItem>
          <UnitBox>월간</UnitBox>
          <HourBox></HourBox>
        </ArchItem>
      </BasicBox>
    </ArchContainer>
  );
}

export default Archive;
