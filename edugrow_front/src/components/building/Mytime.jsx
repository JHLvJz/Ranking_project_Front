import styled from "styled-components";

const Box = styled.div`
  position: relative;
  top: 23px;
  margin: auto;
  box-sizing: border-box;
  width: 209px;
  height: 44px;
  background-color: #233554;
  border: 2px solid white;
  border-radius: 20px;
  text-align: center;
  font-family: "Nexon Football Gothic B";
  font-size: 25px;
  color: white;
`;

export default function Mytime({ time }) {
  const hour = Math.round(time / 3600);
  const minute = Math.round((time % 3600) / 60);
  // const second = Math.round(time % 60);

  return (
    <Box>
      {hour} h {minute} m
    </Box>
  );
}
