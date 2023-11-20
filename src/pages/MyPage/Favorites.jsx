import { userData } from '../../data/userData.js';
import ListedRestaurant from '../../components/ListedRestaurant/ListedRestaurant';
import { useEffect, useState } from 'react';
import axios from 'axios';

function Favorites() {
  // const userFavorites = userData.favorites;
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const getFavorites = async () => {
      const accessToken = localStorage.getItem('token');
      const result = await axios.get(`${process.env.REACT_APP_SERVER_API_URL}/restaurants/bookmark`, {
        headers: {
          Authorization: accessToken,
        },
      });
      // console.log(result.data.bookmarkedRestaurants);
      setFavorites(result.data.bookmarkedRestaurants);
    };
    getFavorites();
  }, []);

  return (
    <section aria-label='user favorites' style={{ minHeight: 'calc(49vh - 46px)' }}>
      {favorites.map((restaurant) => {
        return (
          <div key={restaurant._id} style={{ padding: '3px 10px' }}>
            <div>
              <ListedRestaurant key={restaurant._id} restaurant={restaurant} />
            </div>
            <hr style={{ height: '1px', width: 'calc(100% - 20px)', margin: '0 auto' }} />
          </div>
        );
      })}
    </section>
  );
}

export default Favorites;
