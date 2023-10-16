import styles from "./Information.module.css";

export function Information({ restaurantData }) {
  const { introduce, information } = restaurantData;
  return (
    <div className={styles.container}>
      <div className={styles.introduce}>
        <span>식당 소개</span>
        <span className={styles.text}>{introduce}</span>
      </div>
      <div className={styles.information}>
        <span>상세 정보</span>
        <div className={styles.detail}>
          <span className={`material-icons ${styles.infoIcon}`}>redeem</span>
          <span style={{ marginLeft: "5px" }}>{information.detail}</span>
        </div>
        <div className={styles.detail}>
          <span className={`material-icons ${styles.infoIcon}`}>info</span>
          <span style={{ marginLeft: "5px" }}>시설 정보</span>
        </div>
        <div style={{ display:"flex", flexDirection:"row" }}>
          <div className={styles.facility} is={information.park}>
            <span className={`material-icons ${styles.facilityIcon}`}>
              local_parking
            </span>
            <span>주차</span>
          </div>
          <div className={styles.facility} is={information.wifi}>
            <span className={`material-icons ${styles.facilityIcon}`}>
              wifi
            </span>
            <span>WIFI</span>
          </div>
        </div>

        <div
          className={styles.selectedCategoryTag}
          style={{
            backgroundColor: `${information.facility.park} ? '#e05757' : 'transparent'}`,
          }}
        >
          {/* selected category tagline */}
        </div>
      </div>
    </div>
  );
}
