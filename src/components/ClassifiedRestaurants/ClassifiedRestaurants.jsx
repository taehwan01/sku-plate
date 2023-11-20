import styles from './ClassifiedRestaurants.module.css';
import ClassifiedRestaurant from '../ClassifiedRestaurant/ClassifiedRestaurant';

function RestaurantList({ listedRestaurants }) {
  return (
    <section aria-label='classified restaurants' className={styles.classifiedRestaurants}>
      {/* {currentCategoryRestaurants.map((restaurant) => (
        <ClassifiedRestaurant key={restaurant.id} restaurant={restaurant} />
      ))} */}
      {listedRestaurants.map((restaurant) => {
        // console.log(restaurant);
        return <ClassifiedRestaurant key={restaurant._id} restaurant={restaurant} />;
      })}
    </section>
  );
}

export default RestaurantList;
