import { useState } from "react";
import { useParams } from "react-router-dom";
import { Title, Menu, Information, Comment } from "../../components/RestaurantInfo";
import { KakaoMap } from "../../components/KakaoMap"
import { restaurants } from '../../data/dummyData.js';

import styles from "./Restaurant.module.css";

function TabContent(props, id) {
  if (props.tab === 0) {
    return <Menu restaurantId={id}/>;
  } 
  if (props.tab === 1) {
    return <Information restaurantId={id}/>;
  }
  if (props.tab === 2) {
    return <Comment restaurantId={id}/>;
  }
}

function Restaurant() {
  const { restaurantParam } = useParams();
  const [tab, setTab] = useState(0);

  const restaurantData = restaurants['all'];
  //const restaurant = restaurantData.find(restaurant => restaurant.id === restaurantParam);
  const restaurant = restaurantData[0];

  return (
    <div>
      <section aria-label="place-info">
        <Title restaurant={restaurant}/>
      </section>
      <section aria-label="kakaoMap" className={styles.kakaoMap}>
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
        <TabContent tab={tab} restaurantId={restaurantParam} />
      </section>
    </div>
  );
}

export default Restaurant;
