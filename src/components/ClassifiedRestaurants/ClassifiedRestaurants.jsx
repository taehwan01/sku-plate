import styles from "./ClassifiedRestaurants.module.css";
import ClassifiedRestaurant from "../ClassifiedRestaurant/ClassifiedRestaurant";

function RestaurantList({ currentCategoryRestaurants }) {
  return (
    <section
      aria-label="classified restaurants"
      className={styles.classifiedRestaurants}
    >
      {currentCategoryRestaurants.map((restaurant) => (
        <ClassifiedRestaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </section>
  );
}

export default RestaurantList;
