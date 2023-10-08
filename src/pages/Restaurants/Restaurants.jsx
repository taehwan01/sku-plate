import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Restaurants.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import { categories } from '../../data/categories';
import ClassifiedRestaurant from '../../components/ClassifiedRestaurant/ClassifiedRestaurant';

import { restaurants } from '../../data/dummyData';

function Restaurants() {
  const { currentCategory } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(currentCategory);
    console.log('Restaurants: ', restaurants[currentCategory]);
  }, [currentCategory]);

  return (
    <div>
      <section aria-label='search restaurant'>
        <SearchBox />
      </section>
      <hr />
      <section className={styles.categories}>
        {categories.map((category) => (
          <div
            key={category.id}
            className={styles.category}
            onClick={() => navigate(`/categories/${category.name_eng}`)}
          >
            <span>{category.name}</span>
            <div
              className={styles.selectedCategoryTag}
              style={{ backgroundColor: `${currentCategory === category.name_eng ? '#e05757' : 'transparent'}` }}
            >
              {/* selected category tagline */}
            </div>
          </div>
        ))}
      </section>
      <hr />
      <section aria-label='classified restaurants' className={styles.classifiedRestaurants}>
        {restaurants[currentCategory].map((restaurant) => (
          <ClassifiedRestaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </section>
    </div>
  );
}

export default Restaurants;
