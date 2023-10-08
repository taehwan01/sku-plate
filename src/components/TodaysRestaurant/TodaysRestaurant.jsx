import styles from './TodaysRestaurant.module.css';
import RATINGS_ICON from '../../assets/images/icons/RATINGS_ICON.png';

function TodaysRestaurant({ thumbnail, name, tags, ratings }) {
  const imageFilePath = require(`../../assets/images/${thumbnail}.png`);

  return (
    <div className={styles.todaysRestaurant}>
      <img className={styles.restaurantImage} src={imageFilePath} alt='restaurant thumbnail' />
      <div className={styles.restaurantText}>
        <div className={styles.restaurantInfo}>
          <span className={styles.name}>{name}</span>
          <div>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tags}>
                #{tag}&nbsp;
              </span>
            ))}
          </div>
        </div>
        <div className={styles.ratings}>
          <img className={styles.ratingsIcon} src={RATINGS_ICON} alt='' />
          <span className={`${styles.ratingsScore} jua`}>{ratings.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
}

export default TodaysRestaurant;
