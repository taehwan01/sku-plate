import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './SearchedRestaurants.module.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import { categories } from '../../data/categories';
import ClassifiedRestaurants from '../../components/ClassifiedRestaurants/ClassifiedRestaurants';

import { restaurants } from '../../data/dummyData';
import axios from 'axios';

function SearchedRestaurants() {
  const { searchParam } = useParams();
  const navigate = useNavigate();
  const [restaurants, setRestaurants] = useState([]);

  const getResult = async () => {
    const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/search/${searchParam}`, {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setRestaurants(result.data.result);
  };
  useEffect(() => {
    getResult();
  }, []);

  return (
    <div>
      <section aria-label='search bar with categories' className={styles.searchBar}>
        <section aria-label='search restaurant'>
          <SearchBox />
        </section>
        <hr />
        {/* <section className={styles.categories}>
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
        </section> */}
        <hr />
      </section>
      <ClassifiedRestaurants
        listedRestaurants={restaurants}
        // currentCategoryRestaurants={restaurants[categoryParam]}
      />
    </div>
  );
}

export default SearchedRestaurants;
