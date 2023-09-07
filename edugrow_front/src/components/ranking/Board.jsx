import styled from "styled-components";
import { useState, useEffect } from "react";
import Rank from "./RankItem";
import Select from "./Select";
import { rankList, buildingList } from "../../SampleData";

const Wrapper = styled.div`
  position: relative;
  display: block;
  top: 50px;
  width: 100%;
  min-height: 400px;
  height: calc(100% - 250px); // 100% - 위에서 차지하는 영역
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

export default function Board({ place }) {
  const [period, setPeriod] = useState(0);
  const periodList = ["주간", "월간", "전체"];

  useEffect(() => {
    console.log(periodList[period], buildingList[place].name);
  }, [period, place]);
  // 기간 state: 초기에는 0 = 주간 랭킹, 하위 컴포넌트 select에서 수정
  // 실제 기간은 어떻게 표시할지?

  // 상위에서 받을 props: 랭킹 장소
  // props에 맞춰 api 호출, array 반환 받기
  // 페이지네이션 공부해서 적용

  return (
    <Wrapper>
      <Select period={period} setPeriod={setPeriod} />
      <Text>7/23 ~ 7/29 {periodList[period]} 랭킹</Text>
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
