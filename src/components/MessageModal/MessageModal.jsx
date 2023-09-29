import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import styles from './MessageModal.module.css';

function MessageModal({ onClickCloseModal, message }) {
  return (
    <div className={styles.safariModal}>
      <div className={styles.modalBox}>
        <FontAwesomeIcon className={styles.lightBulbIcon} icon={faLightbulb} />
        <br />
        <span className={styles.modalMessage}>{message}</span>
        <br />
        <button className={styles.modalCloseButton} onClick={onClickCloseModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default MessageModal;
