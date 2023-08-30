import styled from "styled-components";
import Rank from "./RankItem";
import { rankList } from "../../SampleData";

const Wrapper = styled.div`
  position: absolute;
  display: block;
  top: 250px;
  width: 100%;
  height: calc(100vh - 327px); // 전체 뷰포트 - 상단 공간 - footer
  background-color: white;
`;

const Text = styled.p`
  position: relative;
  margin: 15px;
  font-family: "Nexon lv1";
  font-weight: 400;
  font-size: 14px;
  height: 16px;
  color: #000000;
`;

const Rankings = styled.div`
  position: relative;
  display: flex;
  height: calc(100% - 45.99px);
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
