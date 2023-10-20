import { useEffect } from "react";
import styles from "./KakaoMap.module.css";

const { kakao } = window;

function KakaoMap(restaurantaddress) {
  const address = restaurantaddress.restaurantData;

  useEffect(() => {
    const container = document.getElementById("map");
    const options = {
      center: new kakao.maps.LatLng(37.61694097761553, 127.01176555739573),
      level: 3,
    };

    const map = new kakao.maps.Map(container, options);
    // 주소-좌표 변환 객체
    var geocoder = new kakao.maps.services.Geocoder();
    // 주소로 좌표 검색
    geocoder.addressSearch(address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
    // const markerPosition  = new kakao.maps.LatLng(lat, lon);
    // var marker = new kakao.maps.Marker({
    //   position: markerPosition
    // });
    // marker.setMap(map);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <span style={{marginLeft: "5px"}}>{address}</span>
      </div>
      <div id="map" style={{ width: "401px", height: "179px" }}></div>
    </div>
  );
}

export default KakaoMap;
