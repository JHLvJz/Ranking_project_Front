import styled from "styled-components";
import { calcTime } from "../../function";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 80px;
`;

const Rank = styled.p`
  width: 40px;
  margin-left: 5px;
  margin-right: 10px;
  text-align: center;
  font-family: "Inter Black";
  font-size: 25px;
  display: inline-block;
  color: #517a9a;
`;

const ProfileImg = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  ${({ src }) =>
    src === null ? "background-color:white" : "backgroud-image:" + src};
  border: 3px solid #233554;
  border-radius: 100%;
`;

const Name = styled.p`
  padding-left: 20px;
  display: inline-block;
  font-family: ${({ ranking }) =>
    ranking < 4 ? "Nexon Football Gothic B" : "Nexon Football Gothic L"};
  font-size: 18px;
  ${({ ranking }) => ranking < 4 && "max-width: 120px;"}
`;

const MedalImg = styled.img`
  height: 40px;
  width: auto;
`;

const Time = styled.p`
  position: relative;
  display: inline-block;
  margin-left: auto;
  margin-right: 20px;
  text-align: center;
  font-family: "Nexon lv1";
  font-weight: 900;
  font-size: 15px;
  color: black;
  opacity: 0.6;
`;

export default function RankItem({ ranking, nickName, imageUrl, studyTime }) {
  const [hour, minute, second] = calcTime(studyTime);

  return (
    <Wrapper>
      <Rank>{ranking}</Rank>
      <ProfileImg src={imageUrl} />
      <Name ranking={ranking}>{nickName}</Name>
      {ranking < 4 && <MedalImg src={`/img/medal${ranking}.png`}></MedalImg>}
      <Time>
        {hour}h {minute}m {second}s
      </Time>
    </Wrapper>
  );
}
