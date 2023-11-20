import { useNavigate } from 'react-router-dom';
import styles from './ClassifiedRestaurant.module.css';

function ClassifiedRestaurant({ restaurant }) {
  const { _id, name, typeOfFood, tags, images } = restaurant;
  const navigate = useNavigate();

  const imageFilePath = images ? images[0] : require(`../../assets/images/SKUPLATE_ICON.png`);
  // const imageFilePath = require(`../../assets/images/SKUPLATE_ICON.png`);

  return (
    <div className={styles.classifiedRestaurant} onClick={() => navigate(`/restaurant/${_id}`)}>
      <img src={imageFilePath} alt='restaurant-thumbnail' className={styles.thumbnail} />
      <span className={styles.name}>{name}</span>
      <div className={styles.restaurantInfo}>
        <span className={styles.category}>{typeOfFood} / </span>
        <span className={styles.tags}>{`${tags.join(', ')}`}</span>
      </div>
    </div>
  );
}

export default ClassifiedRestaurant;
