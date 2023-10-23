import styles from "./RestaurantMenu.module.css";

function RestaurantMenu({ restaurantData }) {
  const { name, tags, menu } = restaurantData;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.name}>{name}</span>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index}>#{tag}&nbsp;</span>
          ))}
        </div>
      </div>

      <div className={styles.menus}>
        {menu.map((menu) => (
          <div style={{ marginTop: "10px" }}>
            <span key={menu.category} className={styles.category}>
              {menu.category}
            </span>
            <hr style={{ width: "100%", marginBottom: "15px" }} />
            {menu.items.map((item, index) => (
              <div key={index} className={styles.menu} >
                <span style={{fontSize:"12px"}}>{item.name}</span>
                <span style={{fontSize:"12px"}}>
                  {item.price.toLocaleString("en-US", {
                    style: "currency",
                    currency: "KRW",
                  })}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RestaurantMenu;