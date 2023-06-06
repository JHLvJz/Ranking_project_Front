/*global google*/

import {
  GoogleMap,
  Marker,
  LoadScript,
  MarkerF,
  useGoogleMap,
} from "@react-google-maps/api";
import { memo, useCallback, useMemo } from "react";
import React from "react";
import { useState, useEffect } from "react";
import TopBar from "../components/TopBar";

import buildingList from "../SampleData";

function Home() {
  const [map, setMap] = useState(null);

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

  function marckerClicked(markerLat, markerLng) {
    // console.log("----~~~ 마커클릭");

    map.panTo({ lat: markerLat, lng: markerLng });
    // map.setZoom(16.5);
  }

  function myLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        console.log(pos, "---나의 위치---");
      });
    }
    // else {
    //   // Browser doesn't support Geolocation
    //   handleLocationError(false, infoWindow, map.getCenter());
    // }
  }

  return (
    <>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLEMAP_APIKEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={15.5}
          options={mapOptions}
          onLoad={(indexMap) => {
            setMap(indexMap);
          }}
        >
          <TopBar />
          {buildingList?.map((building) => (
            <MarkerF
              key={building["id"]}
              icon={{
                url: `/img/${building["id"]}.png`,
                scaledSize: { width: 50, height: 50 },
              }}
              position={{
                lat: building["lat"],
                lng: building["lng"],
              }}
              onLoad={() => {
                console.log(`${building.name}마커 뿅`);
              }}
              onClick={(e) => {
                marckerClicked(building["lat"], building["lng"]);
              }}
              animation={1}
            />
          ))}
          <MarkerF
            position={center}
            onLoad={onLoad}
            onClick={() => {
              myLocation();
            }}
          ></MarkerF>
        </GoogleMap>
      </LoadScript>
    </>
  );
}

export default memo(Home);
