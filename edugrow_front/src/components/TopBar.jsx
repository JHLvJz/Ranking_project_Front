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
import { Link } from "react-router-dom";
import buildingList from "../SampleData";
import { useRef, useState } from "react";

function TopBar() {
  const [word, setWord] = useState("");

  const matchedList = buildingList.filter((building) => {
    return building["name"].includes(word);
  });
  console.log(matchedList, "---");

  function SearchingWord(e) {
    setWord(e.target.value);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        position: "relative",
        zIndex: 10,
      }}
    >
      <TopContainer>
        <MypageBox>
          <UserImg src="/img/user.png" />
        </MypageBox>
        <SearchBox>
          <ListLogo src="img/list.png" />

          <SearchInput
            placeholder="공부할 장소 검색"
            onChange={SearchingWord}
          />

          {word && (
            <SearchList>
              {matchedList?.map((item) => (
                <Link to={`/building/${item.id}`}>
                  <SearchItem key={item["id"]}>{item["name"]}</SearchItem>
                </Link>
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
