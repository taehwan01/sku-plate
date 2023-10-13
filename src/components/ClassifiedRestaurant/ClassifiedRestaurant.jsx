import { useNavigate } from "react-router-dom";
import styles from "./ClassifiedRestaurant.module.css";

function ClassifiedRestaurant({ restaurant }) {
  const { id, name, category, tags, thumbnail } = restaurant;
  const navigate = useNavigate();

  const imageFilePath = require(`../../assets/images/${thumbnail}.png`);

  return (
    <div
      className={styles.classifiedRestaurant}
      onClick={() => navigate(`/restaurant/${id}`)}
    >
      <img
        src={imageFilePath}
        alt="restaurant-thumbnail"
        className={styles.thumbnail}
      />
      <span className={styles.name}>{name}</span>
      <div className={styles.restaurantInfo}>
        <span className={styles.category}>{category} / </span>
        <span className={styles.tags}>{`${tags.join(", ")}`}</span>
      </div>
    </div>
  );
}

export default ClassifiedRestaurant;
