import React, { useEffect, useState } from 'react';
import styles from './KakaoMap.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const { kakao } = window;

function KakaoMap({ restaurant }) {
  const address = restaurant?.address;
  const navigate = useNavigate();
  const [bookmarked, setBookmarked] = useState(false);

  const setBookmark = async () => {
    if (!localStorage.getItem('token')) {
      navigate('/login');
      return;
    }
    const accessToken = localStorage.getItem('token');
    console.log(restaurant);
    const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/${restaurant._id}/bookmark`, {
      headers: {
        Authorization: accessToken,
      },
    });
    setBookmarked(!bookmarked);
    console.log(result);
  };

  useEffect(() => {
    const loadKakaoMapScript = async () => {
      try {
        // Kakao 지도 API 스크립트 로드
        await new Promise((resolve) => {
          const script = document.createElement('script');
          script.type = 'text/javascript';
          script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_MAP_API_KEY}&libraries=services`;

          script.onload = () => {
            // 스크립트 로드 완료 후에 Kakao 객체가 정의됨
            resolve();
          };

          document.head.appendChild(script);
        });

        // Kakao 지도 API 스크립트가 로드된 후에 사용할 코드
        const container = document.getElementById('map');
        const options = {
          center: new kakao.maps.LatLng(37.61694097761553, 127.01176555739573),
          level: 3,
        };

        const map = new kakao.maps.Map(container, options);

        // 주소-좌표 변환 객체
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표 검색
        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            const marker = new kakao.maps.Marker({
              map: map,
              position: coords,
            });

            // 지도 위치 이동
            map.setCenter(coords);
          }
        });

        const accessToken = localStorage.getItem('token');
        const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/bookmark`, {
          headers: {
            Authorization: accessToken,
          },
        });
        const isBookmarked = result.data.bookmarkedRestaurants.some((res) => res._id === restaurant._id);

        if (isBookmarked) {
          setBookmarked(true);
        }
      } catch (error) {
        console.error('Error loading Kakao Map script:', error);
      }
    };

    loadKakaoMapScript();
  }, [address]);

  return (
    <div className={styles.container}>
      <div className={styles.address}>
        <span style={{ marginLeft: '10px' }}>{address}</span>
        <span onClick={setBookmark} className={`material-icons ${styles.bookmark}`}>
          {bookmarked ? 'bookmark' : 'bookmark_border'}
        </span>
      </div>
      <div id='map' style={{ height: '179px' }}></div>
    </div>
  );
}

export default KakaoMap;
