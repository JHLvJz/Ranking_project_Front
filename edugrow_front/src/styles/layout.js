import styled from "styled-components";

export const Layout = styled.div`
  position: relative;

  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;

  margin: 0 auto;
  max-width: 430px;
  /* background-color: aliceblue; */
  font-family: "Noto sans KR", sans-serif;

  .scroll::-webkit-scrollbar {
    display: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const TopContainer = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;
  justify-content: center;

  position: relative;
  top: 20px;
`;
