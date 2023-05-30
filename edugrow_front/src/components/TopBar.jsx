import {
  ListLogo,
  MypageBox,
  SearchBox,
  SearchInput,
  SearchLogo,
  UserImg,
} from "../styles/Home";
import { TopContainer } from "../styles/layout";
import x from "../SampleData";
import styled from "styled-components";
import buildingList from "../SampleData";

function TopBar() {
  let matchedList = [];

  /* 검색기능 */
  function SearchingWord(userInput) {
    if (buildingList && userInput.length !== 0) {
      matchedList = buildingList.filter((building) =>
        building["name"].includes(userInput)
      );
    }

    // buildingList?.map((building) => {
    //   //console.log(element["name"], "얍");
    //   if (building["name"].includes(userInput) && userInput.length !== 0) {
    //     matchedList.push(building["name"]);
    //   }
    // });

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
          <div>
            <SearchInput
              placeholder="공부할 장소 검색"
              onChange={(e) => SearchingWord(e.target.value)}
            />
            {buildingList?.map((building) => (
              <div key={building["id"]}>{building["name"]}</div>
            ))}
          </div>
          <SearchLogo src="img/search.png" />
        </SearchBox>
      </TopContainer>
    </div>
  );
}

/* 검색목록 */
const SearchList = styled.ul`
  width: 100%;
  background-color: blue;
  z-index: 10;
  /* display: ${({ isExist }) => (isExist ? "block" : "none")}; */
`;

const ListItem = styled.li`
  width: 200px;
  height: 20px;
  z-index: 10;
  background-color: red;
`;

export default TopBar;
