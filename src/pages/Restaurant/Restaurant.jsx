import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { restaurantData } from '../../data/restaurantData';

import KakaoMap from '../../components/KakaoMap/KakaoMap';
import RestaurantInfo from '../../components/RestaurantInfo/RestaurantInfo';
import RestaurantMenu from '../../components/RestaurantMenu/RestaurantMenu';
import Information from './Information';
import Comment from './Comment';

import styles from './Restaurant.module.css';

function Restaurant() {
  const { restaurantParam } = useParams();
  const [tab, setTab] = useState(0);
  const [restaurant, setRestaurant] = useState(null);

  const restaurantId = restaurantParam;
  const fetchRestaurantData = async (restaurantId) => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/${restaurantId}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log('res: ', result.data.restaurant);
    setRestaurant(result.data.restaurant);
  };

  useEffect(() => {
    fetchRestaurantData(restaurantId);
  }, [restaurantId]);

  const TabContent = ({ tab }) => {
    if (tab === 0) {
      return <RestaurantMenu restaurantData={restaurant} />;
    }
    if (tab === 1) {
      return <RestaurantInfo restaurantData={restaurant} />;
    }
    if (tab === 2) {
      return <Comment restaurantData={restaurant} />;
    }
  };

  return (
    <div>
      <section aria-label='place-info' className={styles.information}>
        {/* <Information restaurantData={restaurant} /> */}
      </section>
      <section aria-label='kakaoMap' className={styles.kakaoMap}>
        <KakaoMap restaurant={restaurant} />
      </section>
      <hr />
      <section aria-label='tab' className={styles.tabContainer}>
        <div
          onClick={() => {
            setTab(0);
          }}
        >
          <div className={styles.tabCategory}>메뉴</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 0 ? '#e05757' : 'transparent'}`,
            }}
          ></div>
        </div>
        <div
          onClick={() => {
            setTab(1);
          }}
        >
          <div className={styles.tabCategory}>정보</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 1 ? '#e05757' : 'transparent'}`,
            }}
          ></div>
        </div>
        <div
          onClick={() => {
            setTab(2);
          }}
        >
          <div className={styles.tabCategory}>댓글</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 2 ? '#e05757' : 'transparent'}`,
            }}
          ></div>
        </div>
      </section>
      <hr />
      <section aria-label='detail Information'>
        <TabContent tab={tab} />
      </section>
    </div>
  );
}

export default Restaurant;
