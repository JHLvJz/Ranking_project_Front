import styled from "styled-components";

const Wrapper = styled.div`
  top: 89px;
  position: relative;
  display: flex;
  align-items: center;
`;

const Circle = styled.div`
  border: none;
  position: relative;
  border-radius: 100%;
  margin: auto;
`;

const C1 = styled(Circle)`
  width: 269px;
  height: 269px;
  background-color: rgba(164, 201, 229, 0.3);
`;

const C2 = styled(Circle)`
  top: 23px;
  width: 223px;
  height: 223px;
  background-color: rgba(81, 122, 154, 0.3);
  border: 1px solid rgba(81, 122, 154, 1);
  filter: drop-shadow(0px 4px 4px 0px rgba(0, 0, 0, 0.25));
`;

const C3 = styled(Circle)`
  top: 22px;
  width: 179px;
  height: 179px;
  background-color: white;
  text-align: center;
`;

const Icon = styled.img`
  top: 35px;
  height: 50px;
  width: auto;
`;

const Title = styled.span`
  top: 34px;
  position: relative;
  display: block;
  color: white;

  font-family: "Nexon Football Gothic B";
  font-weight: 300;
  font-size: 32px;
  //-webkit-text-stroke: 2px #233554;
  text-shadow: -3px -3px #233554, 3px -3px #233554, 3px 3px #233554,
    -3px 3px #233554, -3px 0px #233554, 3px 0px #233554, 0px -3px #233554,
    0px 3px #233554;
`;

export default function Name() {
  return (
    <Wrapper>
      <C1>
        <C2>
          <C3>
            <Icon /> <Title>중앙광장</Title>
          </C3>
        </C2>
      </C1>
    </Wrapper>
  );
}
