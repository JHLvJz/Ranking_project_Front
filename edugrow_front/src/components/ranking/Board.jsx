import styled from "styled-components";
import { useState, useEffect } from "react";
import Rank from "./RankItem";
import Select from "./Select";
import Loading from "../Loading";
import { rankList, buildingList, baseUrl } from "../../SampleData";
import axios from "axios";

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
  const [load, setLoad] = useState(false);
  const [period, setPeriod] = useState(0);
  const periodList = [
    { name: "주간", api: "weekly" },
    { name: "월간", api: "monthly" },
    { name: "전체", api: "total" },
  ];

  useEffect(() => {
    async function FetchData() {
      const Url =
        baseUrl +
        `/api/${buildingList[place].api}/${periodList[period].api}-rankings`;
      console.log(Url);
      // await axios
      //   .get(Url)
      //   .then((response) => {
      //     console.log(response);
      //     // setRankList
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    }
    setLoad(true);
    FetchData();
    setTimeout(() => setLoad(false), 3000);
    // 함수 내부에서 호출하는 게 더 좋을지?
  }, [period, place]);

  // 상위에서 받을 props: 랭킹 장소
  // props에 맞춰 api 호출, array 반환 받기

  function getDateString(period) {
    const today = new Date();
    if (period == 0) {
      // 현재 날짜의 요일 기반으로 이번 주의 월요일 / 일요일 날짜 연산
      // 리렌더링 문제 없을지?
      const day = today.getDay() - 1;
      const startDate = new Date(today);
      startDate.setDate(today.getDate() - (day < 0 ? 6 : day));
      const endDate = new Date(today);
      endDate.setDate(today.getDate() + (6 - (day < 0 ? 6 : day)));
      return `${startDate.getMonth() + 1}/${startDate.getDate()} ~ ${
        endDate.getMonth() + 1
      }/${endDate.getDate()} `;
    } else if (period == 1) {
      return `${today.getMonth() + 1}월 `;
    } else {
      return "";
    }
  }

  return (
    <Wrapper>
      <Select period={period} setPeriod={setPeriod} />
      <Text>
        {getDateString(period)}
        {periodList[period].name} 랭킹
      </Text>
      {load ? (
        <Loading />
      ) : (
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
      )}
    </Wrapper>
  );
}
