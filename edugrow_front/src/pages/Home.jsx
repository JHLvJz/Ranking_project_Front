import { GoogleMap, Marker, LoadScript, MarkerF } from "@react-google-maps/api";
import { memo, useCallback, useMemo } from "react";
import React from "react";
import TopBar from "../components/TopBar";

const buildingList = [
  {
    id: 1,
    name: "운초우선교육관",
    lat: 37.591584,
    lng: 127.034381,
  },
  {
    id: 2,
    name: "백주년기념삼성관",
    lat: 37.589553,
    lng: 127.034358,
  },
  {
    id: 3,
    name: "중앙도서관",
    lat: 37.590814,
    lng: 127.034115,
  },
  {
    id: 4,
    name: "하나스퀘어",
    lat: 37.584919,
    lng: 127.025963,
  },
  {
    id: 5,
    name: "과학도서관",
    lat: 37.584631,
    lng: 127.026541,
  },
];

function Home() {
  const onLoad = (marker) => {
    console.log("마커가 뿅");
  };

  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 37.586175,
    lng: 127.029045,
  };

  const mapOptions = {
    disableDefaultUI: true,
  };

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_APIKEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15.5}
          options={mapOptions}
        >
          <TopBar />
          <p>브랜치 테스트</p>
          {buildingList?.map((building) => (
            <MarkerF
              key={building["id"]}
              icon={`/img/${building["id"]}.png`}
              position={{
                lat: building["lat"],
                lng: building["lng"],
              }}
              onLoad={() => {
                console.log(`${building.name}마커 뿅`);
              }}
            />
          ))}
          <MarkerF position={center} onLoad={onLoad}></MarkerF>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default memo(Home);
