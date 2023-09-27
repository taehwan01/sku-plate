import { useEffect } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button className={styles.backButton} onClick={() => {}}>
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </button>
    </div>
  );
}

export default Header;
