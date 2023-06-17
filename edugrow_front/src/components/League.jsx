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
      <MainText>내 리그</MainText>

      <BasicBox>
        <ArchItem>
          <LeaItem lock="on">
            <LeaItemLogo lock="on" src="/img/lock.png" />
          </LeaItem>
        </ArchItem>
        <ArchItem>
          <LeaItem>
            <LeaItemLogo src="/img/2.png" />
          </LeaItem>
        </ArchItem>
        <ArchItem>
          <LeaItem>
            <LeaItemLogo src="/img/2.png" />
          </LeaItem>
        </ArchItem>
        <ArchItem>
          <LeaItem>
            <LeaItemLogo src="/img/2.png" />
          </LeaItem>
        </ArchItem>
        <ArchItem>
          <LeaItem>
            <LeaItemLogo src="/img/2.png" />
          </LeaItem>
        </ArchItem>
      </BasicBox>
    </LeaContainer>
  );
}

export default League;
