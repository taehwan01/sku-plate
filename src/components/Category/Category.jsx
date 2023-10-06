import styles from './Category.module.css';

function Category({ name, icon, sizeOfWidth, sizeOfHeight }) {
  const iconFilePath = require(`../../assets/images/categories/${icon}.png`);
  return (
    <div className={styles.category}>
      <div className={styles.categoryContents}>
        <div className={styles.categoryIcon}>
          <img
            style={{
              width: sizeOfWidth,
              height: sizeOfHeight,
              position: icon === 'ETC_ICON' && 'absolute',
              top: icon === 'ETC_ICON' && '0',
              transform: icon === 'ETC_ICON' ? 'rotate(20deg)' : 'none',
            }}
            // className={styles.categoryIcon}
            src={iconFilePath}
            alt='category icon'
          />
        </div>
        <span className={styles.categoryMenu}>{name}</span>
      </div>
    </div>
  );
}

export default Category;
