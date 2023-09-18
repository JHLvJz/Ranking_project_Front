import {
  ArchItem,
  BasicBox,
  LeaContainer,
  LeaItem,
  LeaItemLogo,
  MainText,
} from "../styles/Mypage";

function League() {
  const badgeList = [
    { name: "medal", src: `/img/badges/badge1.png` },
    { name: "medal", src: `/img/badges/badge1.png` },
    { name: "medal", src: `/img/badges/badge1.png` },
  ];
  return (
    <LeaContainer>
      <MainText>활동뱃지</MainText>
      <BasicBox>
        {badgeList.map((badge) => {
          const imgSrc = false ? badge.src : `/img/badges/lockbadge.png`;
          return (
            <LeaItem>
              <LeaItemLogo src={imgSrc} />
            </LeaItem>
          );
        })}
      </BasicBox>
    </LeaContainer>
  );
}

export default League;
