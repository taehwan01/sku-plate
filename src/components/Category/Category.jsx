import styles from './Category.module.css';

function Category({ name, icon }) {
  const iconFilePath = require(`../../assets/images/categories/${icon}.png`);
  return (
    <div className={styles.category}>
      <div className={styles.categoryContents}>
        <img className={styles.categoryIcon} src={iconFilePath} alt='category icon' />
        <span className={styles.categoryMenu}>{name}</span>
      </div>
    </div>
  );
}

export default Category;
