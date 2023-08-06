import { useEffect } from "react";

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
        width: "500px",
        height: "500px",
      }}
    ></div>
  );
}

export default Kakao;
