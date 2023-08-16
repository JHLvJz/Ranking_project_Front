import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: auto;
  top: 90px;
  margin: auto;
  position: relative;
  text-align: center;
`;

const Line = styled.hr`
  position: relative;
  top: -15px;
  display: inline-block;
  border: 3px solid white;
  width: 44px;
  transform: rotate(-90deg);
`;

const RankCard = styled.div`
  display: inline-block;
  position: relative;
  font-family: "Mina Bold";
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const RankText = styled.span`
  display: block;
`;

const MyRankCard = styled.div`
  position: relative;
  top: -15px;
  display: inline-block;
  font-family: "Cookierun Bold";
  color: white;
  font-size: 30px;
`;

export default function Rank({ myRank, prevTime, nextTime }) {
  const timeSplit = (time) => {
    const hour = Math.round(time / 3600);
    const minute = Math.round((time % 3600) / 60);
    // const second = Math.round(time % 60);
    return [hour, minute];
  };

  const [prevHour, prevMinute] = timeSplit(prevTime);
  const [nextHour, nextMinute] = timeSplit(nextTime);

  return (
    <Wrapper>
      <RankCard>
        <RankText>
          {myRank - 1}위<br />
          {prevHour}h {prevMinute}m
        </RankText>
      </RankCard>
      <Line />
      <MyRankCard>{myRank}위</MyRankCard>
      <Line />
      <RankCard>
        <RankText>{myRank + 1}위</RankText>
        <RankText>
          {nextHour}h {nextMinute}m
        </RankText>
      </RankCard>
    </Wrapper>
  );
}
