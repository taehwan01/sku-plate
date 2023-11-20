import { useEffect, useState } from 'react';
import styles from './ListedRestaurant.module.css';
import { useNavigate } from 'react-router-dom';

function TodaysRestaurant({ restaurant }) {
  const navigate = useNavigate();
  const { images, name, tags } = restaurant;
  const imageFilePath = images ? images[0] : require(`../../assets/images/SKUPLATE_ICON.png`);

  const [isBookmarked, setIsBookmarked] = useState(true);

  return (
    <div
      className={styles.todaysRestaurant}
      onClick={() => {
        navigate(`/restaurant/${restaurant._id}`);
      }}
    >
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
        <div className={styles.rightContents}>
          {/* <div className={styles.ratings}>
            <span className={`material-icons ${styles.ratingsIcon}`}>star_rate</span>
            <span className={`${styles.ratingsScore} jua`}>{ratings.toFixed(1)}</span>
          </div> */}
          {/* {bookmark && (
            <span onClick={() => setIsBookmarked(!isBookmarked)} className={`material-icons ${styles.bookmark}`}>{`${
              isBookmarked ? 'bookmark' : 'bookmark_border'
            }`}</span>
          )} */}
          {/* <span className='material-icons'>bookmark_border</span> */}
        </div>
      </div>
    </div>
  );
}

export default TodaysRestaurant;
