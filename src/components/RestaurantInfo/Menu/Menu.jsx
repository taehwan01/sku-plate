import styles from "./Menu.module.css";
import { menus } from "../../../data/menus";

export function Menu(restaurantId) {
  const menu = menus.find((menu) => menu.id === 203);
  return (
    <div className={styles.container}>
      <div className={styles.title}>
      <span className={styles.name}>{menu.name}</span>
      <div className={styles.tags}>
          {menu.tags.map((tag, index) => (
            <span key={index}>#{tag}&nbsp;</span>
          ))}
        </div>
      </div>

      <div className={styles.menus}>
      {menu.menu.map((category) => (
        <div style={{marginTop:"10px"}}>
          <span key={category.category}  className={styles.category}>{category.category}</span>
          <hr style={{width:"100%", marginBottom: "15px"}}/>
          {category.items.map((item, index) => (
            <div key={index}  className={styles.menu}>
              <span>{item.name}</span>
              <span>{item.price.toLocaleString('en-US', { style: 'currency', currency: 'KRW' })}</span>
            </div>
          ))}
        </div>
      ))}
      </div>
    </div>
  );
}
