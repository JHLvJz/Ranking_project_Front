import styled from "styled-components";

const Wrapper = styled.div`
  width: 280px;
  position: relative;
  top: -25px;
  left: 10px;
`;

const Li = styled.li`
  display: inline-block;
  margin: 0 5px;
`;

const Ul = styled.ul`
  margin: 0;
  padding: 0;
`;

const Btn = styled.div`
  border: none;
  height: 35px;
  background-color: white;
  border-radius: 10px;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  line-height: 35px;
  color: ${({ chosen }) => (chosen ? "#000000" : "rgba(0, 0, 0, 0.5)")};
  font-family: "Nexon lv1";
  font-size: 18px;
  font-weight: 700;
`;

export default function Select({ period, setPeriod }) {
  const periodList = ["week", "month", "total"];

  function handleClick(idx) {
    setPeriod(idx);
  }
  return (
    <Wrapper>
      <Ul>
        {periodList.map((p, idx) => (
          <Li
            onClick={() => {
              handleClick(idx);
            }}
            key={idx}
          >
            <Btn chosen={idx === period}>{p}</Btn>
          </Li>
        ))}
      </Ul>
    </Wrapper>
  );
}
