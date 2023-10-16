import { useState } from "react";
import { useParams } from "react-router-dom";
import { Title, Menu, Information, Comment } from "../../components/RestaurantInfo";
import { KakaoMap } from "../../components/KakaoMap"
import { restaurantData } from "../../data/restaurantData";

import styles from "./Restaurant.module.css";

function TabContent(props) {
  const { restaurantData, tab } = props;
  console.log(restaurantData);

  if (tab === 0) {
    return <Menu restaurantData={restaurantData}/>;
  } 
  if (tab === 1) {
    return <Information restaurantData={restaurantData}/>;
  }
  if (tab === 2) {
    return <Comment restaurantData={restaurantData}/>;
  }
}

function Restaurant() {
  const { restaurantParam } = useParams();
  const [tab, setTab] = useState(0);

  const restaurantId = Number(restaurantParam);
  const restaurant = restaurantData.find(restaurant => restaurant.id === restaurantId);
  return (
    <div>
      <section aria-label="place-info">
        <Title restaurantData={restaurant}/>
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
        <TabContent tab={tab} restaurantData={restaurant} />
      </section>
    </div>
  );
}

export default Restaurant;
