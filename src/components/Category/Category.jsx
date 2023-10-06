import { useNavigate } from 'react-router-dom';
import styles from './Category.module.css';

function Category({ category }) {
  const navigate = useNavigate();

  const { name, icon, sizeOfWidth, sizeOfHeight, name_eng } = category;

  const iconFilePath = require(`../../assets/images/categories/${icon}.png`);

  const onClickCategory = () => {
    navigate(`/categories/${name_eng}`);
  };

  return (
    <div className={styles.category}>
      <div className={styles.categoryContents} onClick={onClickCategory}>
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
