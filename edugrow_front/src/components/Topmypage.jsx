const { TopNavContainer } = require("../styles/Mypage");

function Topmypage() {
  return (
    <TopNavContainer>
      <img
        style={{
          position: "absolute",
          left: "2%",
          top: "1.7vh",
        }}
        src="/img/backarrow.png"
      />
      My Page
      <img
        style={{
          position: "absolute",
          right: "2%",
          top: "1.5vh",
        }}
        src="/img/home.png"
      />
    </TopNavContainer>
  );
}

export default Topmypage;
