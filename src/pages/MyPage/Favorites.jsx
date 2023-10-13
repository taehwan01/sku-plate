import { userData } from '../../data/userData.js';
import ListedRestaurant from '../../components/ListedRestaurant/ListedRestaurant';

function Favorites() {
  const userFavorites = userData.favorites;

  return (
    <section aria-label='user favorites' style={{ minHeight: 'calc(49vh - 46px)' }}>
      {userFavorites.map((restaurant) => {
        return (
          <div key={restaurant.id} style={{ padding: '3px 10px' }}>
            <div>
              <ListedRestaurant key={restaurant.id} restaurant={restaurant} bookmark={true} />
            </div>
            <hr style={{ height: '1px', width: 'calc(100% - 20px)', margin: '0 auto' }} />
          </div>
        );
      })}
    </section>
  );
}

export default Favorites;
