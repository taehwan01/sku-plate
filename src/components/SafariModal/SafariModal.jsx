import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

import styles from './SafariModal.module.css';

function SafariModal({ onClickCloseModal }) {
  return (
    <div className={styles.safariModal}>
      <div className={styles.modalBox}>
        <FontAwesomeIcon className={styles.lightBulbIcon} icon={faLightbulb} />
        <br />
        <span className={styles.modalMessage}>
          홈화면에 <span className={styles.appName}>서경 PLATE</span>를 추가하시려면
          <br />
          기기 하단 탭 버튼 <FontAwesomeIcon className={styles.shareIcon} icon={faArrowUpFromBracket} /> 클릭 후
          <br />
          홈화면 추가 <FontAwesomeIcon className={styles.plusIcon} icon={faSquarePlus} /> 를 눌러주세요.
        </span>
        <br />
        <button className={styles.modalCloseButton} onClick={onClickCloseModal}>
          확인
        </button>
      </div>
    </div>
  );
}

export default SafariModal;
