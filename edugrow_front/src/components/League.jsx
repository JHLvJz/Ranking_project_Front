import {
  BasicBox,
  LeaContainer,
  LeaItem,
  LeaItemLogo,
  MainText,
} from "../styles/Mypage";

function League() {
  return (
    <LeaContainer>
      <MainText>내 리그</MainText>
      <BasicBox>
        <LeaItem>
          <LeaItemLogo src="/img/2.png" />
        </LeaItem>
        <LeaItem lock="on">
          <LeaItemLogo lock="on" src="/img/lock.png" />
        </LeaItem>
        <LeaItem>
          <LeaItemLogo src="/img/2.png" />
        </LeaItem>
      </BasicBox>
    </LeaContainer>
  );
}

export default League;
