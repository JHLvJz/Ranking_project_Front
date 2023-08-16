import styled from "styled-components";

const Container = styled.div`
  top: 130px;
  width: 430px;
  margin-bottom: 100px;
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  justify-content: left;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  ::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Box = styled.div`
  display: flex;
  position: relative;
  width: 336px;
  height: 183px;
  border-radius: 20px;
  background-color: white;
  flex: 0 0 auto;
  margin: 20px;
  scroll-snap-align: center;
`;

export default function BuildingInfo() {
  return (
    <Container>
      <Box></Box>
      <Box></Box>
      <Box></Box>
    </Container>
  );
}
