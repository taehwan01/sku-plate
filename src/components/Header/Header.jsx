import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.backButton}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    </div>
  );
}

export default Header;
