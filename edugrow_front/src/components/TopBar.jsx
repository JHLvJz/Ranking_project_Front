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
import styled from "styled-components";
import buildingList from "../SampleData";
import Search from "./Search";
import { useRef, useState } from "react";

function TopBar() {
  const [word, setWord] = useState("");

  const matchedList = buildingList.filter((building) => {
    return building["name"].includes(word);
  });
  console.log(matchedList, "---");

  function SearchingWord(userInput) {
    setWord(userInput);
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

          {word && (
            <SearchList>
              {matchedList?.map((item) => (
                <SearchItem key={item["id"]}>{item["name"]}</SearchItem>
              ))}
            </SearchList>
          )}

          <SearchLogo src="img/search.png" />
        </SearchBox>
      </TopContainer>
    </div>
  );
}

export default TopBar;
