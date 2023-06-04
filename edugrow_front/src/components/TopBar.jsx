import {
  ListLogo,
  MypageBox,
  SearchBox,
  SearchContainer,
  SearchInput,
  SearchItem,
  SearchList,
  SearchLogo,
  UserImg,
} from "../styles/Home";
import { TopContainer } from "../styles/layout";
import x from "../SampleData";
import styled from "styled-components";
import buildingList from "../SampleData";
import Search from "./Search";

function TopBar() {
  let matchedList = [];

  /* 검색기능 */
  function SearchingWord(userInput) {
    if (buildingList && userInput.length !== 0) {
      matchedList = buildingList.filter((building) =>
        building["name"].includes(userInput)
      );
    }

    console.log(matchedList, "-----");
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <TopContainer>
        <MypageBox>
          <UserImg src="/img/user.png" />
        </MypageBox>
        <SearchBox>
          <ListLogo src="img/list.png" />

          <SearchInput
            placeholder="공부할 장소 검색"
            onChange={(e) => SearchingWord(e.target.value)}
          />
          <SearchList>
            {buildingList?.map((item) => (
              <SearchItem>{item["name"]}</SearchItem>
            ))}
          </SearchList>

          <SearchLogo src="img/search.png" />
        </SearchBox>
      </TopContainer>
    </div>
  );
}

export default TopBar;
