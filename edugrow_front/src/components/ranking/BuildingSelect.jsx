import styled from "styled-components";
import buildingList from "../../SampleData";

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  overflow-x: scroll;
  overflow-y: hidden;
  box-sizing: border-box;

  width: 100%;
  height: 120px;
  margin-top: 20px;
  padding-inline-start: 15px;

  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Button = styled.div`
  position: relative;
  margin: auto 8px;
  top: 0;
  min-width: ${({ chosen }) => (chosen ? "90px" : "80px")};
  height: ${({ chosen }) => (chosen ? "100px" : "74px")};
  border-radius: 5px 5px 40px 40px;
  text-align: center;

  order: ${({ chosen }) => (chosen ? "-1" : "0")};
  line-height: ${({ chosen }) => (chosen ? "90px" : "70px")};
  background-color: ${({ chosen }) => (chosen ? "#D34A4D" : "#517a9a")};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

const Icon = styled.img`
  height: 45px;
  width: auto;
  margin: auto;
  vertical-align: middle;
  filter: invert(100%) sepia(0%) saturate(0%) hue-rotate(64deg) brightness(102%)
    contrast(102%);
`;

export default function BuildingSelect({ place, setPlace }) {
  function handleClick(idx) {
    setPlace(idx);
    // 링크 parameter 변경해서 라우팅
  }

  return (
    <Wrapper>
      {buildingList.map((b, idx) => (
        <Button onClick={() => handleClick(idx)} chosen={idx === place}>
          <Icon src={`/img/${b["id"]}.png`} />
        </Button>
      ))}
    </Wrapper>
  );
}
