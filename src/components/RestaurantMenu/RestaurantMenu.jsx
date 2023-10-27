import styles from "./RestaurantMenu.module.css";

function RestaurantMenu({ restaurantData }) {
  const { name, tags, menu } = restaurantData;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <span className={styles.name}>{name} 메뉴판</span>
        <div className={styles.tags}>
          {tags.map((tag, index) => (
            <span key={index}>#{tag}&nbsp;</span>
          ))}
        </div>
      </div>

      {menu.map((menu) => (
        <div>
          <div>
            <div
              key={menu.category}
              className={styles.categoryText}
              style={{ fontSize: "15px" }}
            >
              {menu.category}
            </div>
            <hr className={styles.categoryHr} />
          </div>
          <div className={styles.menus}>
            <table>
              <th className={styles.menu}></th>
              <th className={styles.price}></th>
              {menu.items.map((item) => (
                <tr>
                  <td style={{ fontSize: "12px" }}>{item.name}</td>
                  <td style={{ fontSize: "12px" }}>
                    {item.price.toLocaleString("en-US", {
                      style: "currency",
                      currency: "KRW",
                    })}
                  </td>
                </tr>
              ))}
            </table>
            <div
              className={styles.categoryImage}
              style={{
                backgroundColor: "#D9D9D9",
                width: "85px",
                height: "85px",
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RestaurantMenu;
