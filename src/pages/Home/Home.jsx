import { categories } from '../../data/categories';
import { todaysRestaurant } from '../../data/todaysRestaurant';

import styles from './Home.module.css';
import AdBanner from '../../components/AdBanner/AdBanner';
import Category from '../../components/Category/Category';
import ListedRestaurant from '../../components/ListedRestaurant/ListedRestaurant';

function Home() {
  return (
    <>
      <AdBanner />
      <hr />
      <section title='메뉴 카테고리' aria-label='categories' className={styles.categories}>
        {categories.map((category) => (
          <Category key={category.id} category={category} />
        ))}
      </section>
      <hr />
      <section title='오늘의 식당' aria-label="today's restaurant" className={styles.todaysRestaurant}>
        <div className={styles.todaysRestaurant}>
          <span>오늘의 식당</span>
        </div>
        {todaysRestaurant.map((restaurant) => (
          <>
            <ListedRestaurant key={restaurant.id} restaurant={restaurant} bookmark={false} />
            <div style={{ height: '20px' }}></div>
          </>
        ))}
      </section>
    </>
  );
}

export default Home;
