import { useState } from "react";
import { useParams } from "react-router-dom";
import { restaurantData } from "../../data/restaurantData";

import RestaurantInfo from "../../components/RestaurantInfo/RestaurantInfo";
import RestaurantMenu from "../../components/RestaurantMenu/RestaurantMenu";
import Information from "./Information";
import Comment from "./Comment";
import { KakaoMap } from "../../components/KakaoMap"

import styles from "./Restaurant.module.css";

function Restaurant() {
  const { restaurantParam } = useParams();
  const [tab, setTab] = useState(0);

  const restaurantId = Number(restaurantParam);
  const restaurant = restaurantData.find(restaurant => restaurant.id === restaurantId);
  
  const TabContent = ({tab}) => {
    if (tab === 0) {
      return <RestaurantMenu restaurantData={restaurant}/>;
    } 
    if (tab === 1) {
      return <RestaurantInfo restaurantData={restaurant}/>;
    }
    if (tab === 2) {
      return <Comment restaurantData={restaurantId}/>;
    }
  }
  
  return (
    <div>
      <section aria-label="place-info">
        <Information restaurantData={restaurant}/>
      </section>
      <section aria-label="kakaoMap" classNaDme={styles.kakaoMap}>
        <KakaoMap />
      </section>
      <hr />
      <section aria-label="tab" className={styles.tabContainer}>
        <div
          onClick={() => {
            setTab(0);
          }}
        >
          <div className={styles.tabContent}>메뉴</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 0 ? "#e05757" : "transparent"}`,
            }}
          >
            {/* selected category tagline */}
          </div>
        </div>
        <div
          onClick={() => {
            setTab(1);
          }}
        >
          <div className={styles.tabContent}>정보</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 1 ? "#e05757" : "transparent"}`,
            }}
          >
            {/* selected category tagline */}
          </div>
        </div>
        <div
          onClick={() => {
            setTab(2);
          }}
        >
          <div className={styles.tabContent}>댓글</div>
          <div
            className={styles.selectedTab}
            style={{
              backgroundColor: `${tab === 2 ? "#e05757" : "transparent"}`,
            }}
          >
            {/* selected category tagline */}
          </div>
        </div>
      </section>
      <hr />
      <section aria-label="detail Information">
        <TabContent tab={tab}/>
      </section>
    </div>
  );
}

export default Restaurant;
