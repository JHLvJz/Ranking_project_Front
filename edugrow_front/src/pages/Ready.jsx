import styled from "styled-components";

const BackGround = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  background-color: #233554;
`;

const MainText = styled.p`
  width: 100%;
  font-weight: 900;
  font-size: 80px;
  line-height: 97px;
  text-align: center;
  color: #d34a4d;

  position: absolute;
  top: ${(props) => props.top};
`;

const Running = styled.img`
  width: 50px;
  height: 50px;
`;

function Ready() {
  return (
    <BackGround>
      <MainText top={"12vh"}>Ready?</MainText>
      <MainText top={"24vh"}>Start!</MainText>
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "50px",
          top: "50vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Running src="/img/running.png" />
      </div>
    </BackGround>
  );
}

export default Ready;
