import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Name from "../components/building/Name";
import Mytime from "../components/building/Mytime";
import Rank from "../components/building/Rank";
import BuildingInfo from "../components/building/BuildingInfo";
import BackImg from "../img/Back.png";
import Footer from "../components/Footer";

const BackBtn = styled.button`
  all: unset;
  position: absolute;
  left: 30px;
  top: 30px;
  width: 20px;
  height: auto;
  cursor: pointer;
`;

const Background = styled.div`
  /* position: absolute; */
  width: 100%;
  min-height: calc(100vh - 82px);
  height: 100%;
  padding-bottom: 82px;
  background-color: rgb(81, 122, 154);
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
  /*
  linear-gradient 적용 안 됨
  background-image: linear-gradient(
    to down,
    rgba(81, 122, 154, 1) 75%,
    rgba(81, 122, 154, 0.3) 75%
  );
  */
`;

const FooterBox = styled.div`
  position: relative;
  width: 100%;
  height: 77px;
`;

function Building() {
  const navigate = useNavigate();
  useEffect(() => console.log("building render"));

  return (
    <>
      {" "}
      <Background>
        <BackBtn onClick={() => navigate(-1)}>
          <img src={BackImg} width={"20px"} />
        </BackBtn>
        <Name></Name>
        <Mytime time={5000} />
        <Rank myRank={10} prevTime={100} nextTime={50} />
        <BuildingInfo></BuildingInfo>
        <FooterBox />
      </Background>
      <Footer chosen={-1} />
    </>
  );
}

export default Building;
