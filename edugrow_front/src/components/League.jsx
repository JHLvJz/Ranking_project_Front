import {
  ArchItem,
  BasicBox,
  LeaContainer,
  LeaItem,
  LeaItemLogo,
  MainText,
} from "../styles/Mypage";

function League() {
  return (
    <LeaContainer>
      <MainText>활동뱃지</MainText>

      <BasicBox>
        <LeaItem lock="on">
          <LeaItemLogo lock="on" src="/img/lock.png" />
        </LeaItem>
        <LeaItem>
          <LeaItemLogo src="/img/2.png" />
        </LeaItem>
        <LeaItem>
          <LeaItemLogo src="/img/2.png" />
        </LeaItem>
      </BasicBox>
    </LeaContainer>
  );
}

export default League;
