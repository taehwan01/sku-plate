import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './Restaurants.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import { categories } from '../../data/categories';
import ClassifiedRestaurants from '../../components/ClassifiedRestaurants/ClassifiedRestaurants';

import { restaurants } from '../../data/dummyData';
import axios from 'axios';

function Restaurants() {
  const { categoryParam } = useParams();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  const getRestaurants = async (typeOfFood) => {
    const result = await axios.get(
      `${process.env.REACT_APP_SERVER_API_URL}/restaurants/${typeOfFood === 'all' ? '' : `type/${typeOfFood}`}`,
      {
        withCredentials: true,
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    // console.log(result.data.restaurants);
    setRestaurants(result.data.restaurants);
  };

  useEffect(() => {
    getRestaurants(categoryParam);
  }, [categoryParam]);

  return (
    <div>
      <section aria-label='search bar with categories' className={styles.searchBar}>
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
                style={{ backgroundColor: `${categoryParam === category.name_eng ? '#e05757' : 'transparent'}` }}
              ></div>
            </div>
          ))}
        </section>
        <hr />
      </section>
      <ClassifiedRestaurants listedRestaurants={restaurants} />
    </div>
  );
}

export default Restaurants;
