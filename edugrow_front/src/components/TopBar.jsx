import {
  ListLogo,
  MypageBox,
  SearchBox,
  SearchInput,
  SearchLogo,
  UserImg,
} from "../styles/Home";
import { TopContainer } from "../styles/layout";

function TopBar() {
  return (
    <TopContainer>
      <MypageBox>
        <UserImg src="/img/user.png" />
      </MypageBox>
      <SearchBox>
        <ListLogo src="img/list.png" />
        <SearchInput placeholder="공부할 장소 검색" />
        <SearchLogo src="img/search.png" />
      </SearchBox>
    </TopContainer>
  );
}

export default TopBar;
