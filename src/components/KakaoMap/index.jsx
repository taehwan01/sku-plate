import { useEffect } from "react";

const { kakao } = window;

export function KakaoMap() {
  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.6152, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <div style={{display:"flex", justifyContent:"center", width:"100%", backgroundColor:"white"}}>
      <div id="map" style={{ width: "393px", height: "179px" }}></div>
    </div>
  );
}
