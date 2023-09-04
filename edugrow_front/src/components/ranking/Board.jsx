import styled from "styled-components";
import Rank from "./RankItem";
import Select from "./Select";
import { rankList } from "../../SampleData";

const Wrapper = styled.div`
  position: relative;
  display: block;
  top: 200px;
  width: 100%;
  height: calc(100vh - 382px); // 수정 필요
  background-color: white;
`;

const Text = styled.p`
  position: relative;
  top: -25px;
  margin: 15px;
  font-family: "Nexon lv1";
  font-weight: 400;
  font-size: 14px;
  height: 16px;
  color: #000000;
`;

const Rankings = styled.div`
  position: relative;
  top: -25px;
  height: calc(100% - 82px);
  display: flex;
  overflow-y: scroll;
`;

const Ul = styled.ul`
  list-style-type: none;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export default function Board() {
  // 상위에서 받을 props: 랭킹 유형, 기간, 장소
  // props에 맞춰 api 호출, array 반환 받기
  // 페이지네이션 공부해서 적용

  return (
    <Wrapper>
      <Select />
      <Text>7/23 ~ 7/29 주간 랭킹</Text>
      <Rankings>
        <Ul>
          {rankList.map((rank) => (
            <li>
              <Rank
                ranking={rank.ranking}
                nickName={rank.nickName}
                imageUrl={rank.imageUrl}
                studyTime={rank.studyTime}
              />
            </li>
          ))}
        </Ul>
      </Rankings>
    </Wrapper>
  );
}
