import { GoogleMap, Marker, LoadScript, MarkerF } from "@react-google-maps/api";
import { memo, useCallback, useMemo } from "react";
import React from "react";
import TopBar from "../components/TopBar";
import buildingList from "../SampleData";

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
