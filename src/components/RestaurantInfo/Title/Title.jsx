import styles from "./Title.module.css";

export function Title({ restaurant }) {
  const { name, tags, ratings } = restaurant;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.title}>
          <div className={styles.name}>{name}</div>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index}>#{tag}&nbsp;</span>
            ))}
          </div>
        </div>
        <div className={styles.ratings}>
          <span className={`material-icons ${styles.ratingsIcon}`}>
            star_rate
          </span>
          <span className={`${styles.ratingsScore} jua`}>
            {ratings.toFixed(1)}
          </span>
          <span className={`material-icons ${styles.bookmarkIcon}`}>
            bookmark
          </span>
          <span className={`material-icons ${styles.shareIcon}`}>share</span>
        </div>
      </div>

      <div className={styles.call}>
        <span className={`material-icons ${styles.callingIcon}`}>
          phone_in_talk
        </span>
        <span>전화 걸기</span>
      </div>
    </div>
  );
}
