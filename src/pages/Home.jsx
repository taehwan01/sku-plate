import { categories } from '../data/categories';
import { todaysRestaurant } from '../data/todaysRestaurant';

import styles from './Home.module.css';
import AdBanner from '../components/AdBanner/AdBanner';
import Category from '../components/Category/Category';
import TodaysRestaurant from '../components/TodaysRestaurant/TodaysRestaurant';

function Home() {
  return (
    <>
      <AdBanner />
      <hr className={styles.horizontalLine} />
      <section className={styles.categories}>
        {categories.map((category) => (
          <Category
            key={category.id}
            name={category.name}
            icon={category.icon}
            sizeOfWidth={category.sizeOfWidth}
            sizeOfHeight={category.sizeOfHeight}
          />
        ))}
      </section>
      <hr className={styles.horizontalLine} />
      <section className={styles.todaysRestaurant}>
        <div className={styles.todaysRestaurant}>
          <span>오늘의 식당</span>
        </div>
        {todaysRestaurant.map((restaurant) => (
          <TodaysRestaurant
            key={restaurant.id}
            thumbnail={restaurant.thumbnail}
            name={restaurant.name}
            tags={restaurant.tags}
            ratings={restaurant.ratings}
          />
        ))}
      </section>
    </>
  );
}

export default Home;
