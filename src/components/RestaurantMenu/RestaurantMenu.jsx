import { useEffect } from 'react';
import styles from './RestaurantMenu.module.css';

function RestaurantMenu({ restaurantData }) {
  // const { name, tags, menu, images } = restaurantData;
  const name = restaurantData?.name;
  const tags = restaurantData?.tags;
  const menu = restaurantData?.menu;
  const images = restaurantData?.images;

  useEffect(() => {
    console.log('restaurantData', restaurantData);
  }, [restaurantData]);
  if (!restaurantData) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.name}>{name} 메뉴판</span>
        <div className={styles.tags}>
          {/* {tags[0]} */}
          {tags.map((tag, index) => (
            <span key={index}>#{tag}&nbsp;</span>
          ))}
        </div>
      </div>

      {/* {menu.map((menu) => ( */}
      <div>
        {/* <div>
            <div
              // key={menu.category}
              className={styles.categoryText}
              style={{ fontSize: '15px' }}
            >
              {menu.category}
            </div>
            <hr className={styles.categoryHr} />
          </div> */}
        <div className={styles.menus}>
          <table>
            <th className={styles.menu}></th>
            <th className={styles.price}></th>
            {menu.map((item) => (
              <tr>
                <td style={{ fontSize: '12px' }}>{item.name}</td>
                <td style={{ fontSize: '12px' }}>
                  {item.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'KRW',
                  })}
                </td>
              </tr>
            ))}
          </table>
          <div className={styles.categoryImage}>
            {images.map((image, index) => (
              <img src={images[index]} alt='' />
            ))}
          </div>
        </div>
      </div>
      {/* ))} */}
    </div>
  );
}

export default RestaurantMenu;
