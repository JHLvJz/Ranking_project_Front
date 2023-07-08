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
          <HourBox />
          <UnitBox>일간</UnitBox>
        </ArchItem>
        <ArchItem>
          <HourBox />
          <UnitBox>주간</UnitBox>
        </ArchItem>
        <ArchItem>
          <HourBox />
          <UnitBox>월간</UnitBox>
        </ArchItem>
      </BasicBox>
    </ArchContainer>
  );
}

export default Archive;
