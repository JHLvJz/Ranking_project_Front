import { useEffect, useState, memo, useCallback, useMemo } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";

import buildingList from "../SampleData";
import CustomMarker from "../components/CustomMarker";

const { kakao } = window;

function Kakao() {
  useEffect(() => {
    const mapContainer = document.getElementById("map");
    const mapOptions = {
      center: new kakao.maps.LatLng(37.586175, 127.029045),
      leve: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOptions);
  }, []);

  return (
    <div
      id="map"
      style={{
        width: "100%",
        height: "calc(100vh - 82px)",
      }}
    >
      <TopBar />
      <Footer style={{ zIndex: 10 }} chosen={0} />
    </div>
  );
}

export default Kakao;
