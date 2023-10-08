import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

import styles from './MessageModal.module.css';
import SKUPLATE_LOGO_S from '../../assets/images/SKUPLATE_LOGO_S.png';

function MessageModal({ onClickCloseModal, message }) {
  return (
    <div className={styles.messageModal}>
      <div className={styles.modalBox}>
        <div className={styles.modalContents}>
          <img className={styles.skuplateLogo} src={SKUPLATE_LOGO_S} alt='SKUPLATE_LOGO' />
          <span className={styles.modalMessage}>{message}</span>
        </div>
        <button className={styles.modalCloseButton} onClick={onClickCloseModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default MessageModal;
