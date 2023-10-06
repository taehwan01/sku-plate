import styles from './Home.module.css';
import AdBanner from '../components/AdBanner/AdBanner';
import Category from '../components/Category/Category';
import { categories } from '../data/categories';

function Home() {
  return (
    <>
      <AdBanner />
      <hr className={styles.horizontalLine} />
      <div className={styles.categories}>
        {categories.map((category) => (
          <Category key={category.id} name={category.name} icon={category.icon} />
        ))}
      </div>
      <hr className={styles.horizontalLine} />
    </>
  );
}

export default Home;
