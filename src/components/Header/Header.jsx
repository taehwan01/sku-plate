import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';
import MessageModal from '../MessageModal/MessageModal';

const safariModal = (
  <span>
    홈화면에 <span className={styles.appName}>서경 PLATE</span> 를 추가하시려면
    <br />
    기기 하단 탭 버튼 <FontAwesomeIcon className={styles.shareIcon} icon={faArrowUpFromBracket} /> 클릭 후
    <br />
    화면 추가 <FontAwesomeIcon className={styles.plusIcon} icon={faSquarePlus} /> 를 눌러주세요.
  </span>
);

function Header() {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);

  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTimer, setModalTimer] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      setPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handler);

    const userAgent = window.navigator.userAgent;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsIOS(true);
    }
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [prompt]);

  const handleAddToHomeScreenClick = () => {
    const modalTimerMilliseconds = 5000;

    if (!isIOS && prompt) {
      prompt.prompt();

      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setModalText('홈 화면에 추가되었습니다.');
          setShowModal(true);
        } else {
          setModalText('홈 화면 추가가 취소되었습니다.');
          setShowModal(true);
        }
        const timer = setTimeout(() => {
          setShowModal(false);
        }, modalTimerMilliseconds);
        setModalTimer(timer);
      });
    } else if (isIOS) {
      setModalText(safariModal);
      setShowModal(true);
    } else {
      setModalText('홈 화면에 이미 추가되어 있습니다.');
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, modalTimerMilliseconds);
      setModalTimer(timer);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    // 모달이 닫힐 때 타이머도 해제
    if (modalTimer) {
      clearTimeout(modalTimer);
    }
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        {/* <FontAwesomeIcon icon={faAngleLeft} /> */}
        {/* <span
          className={`material-symbols-outlined ${styles.headerIcons}`}
          // style={{ fontWeight: 'bold' }}
          // 
        >
          navigate_before
        </span> */}
        <span
          className={`material-symbols-outlined ${styles.headerIcons}`}
          // style={{ fontWeight: 'bold' }}
          style={{ fontSize: '30px' }}
          //
        >
          arrow_back_ios_new
        </span>
      </button>

      {/* iOS 환경 */}
      {isIOS && !navigator.standalone && (
        <button className={styles.backButton} onClick={handleAddToHomeScreenClick}>
          {/* <FontAwesomeIcon icon={faMobileScreenButton} /> */}
          <span
            className={`material-symbols-outlined ${styles.headerIcons}`}
            // style={{ fontWeight: 'bold' }}
            //
          >
            add_to_home_screen
          </span>
        </button>
      )}

      {/* android 환경 */}
      {prompt && !isIOS && (
        <button className={styles.backButton} onClick={handleAddToHomeScreenClick}>
          {/* <FontAwesomeIcon icon={faMobileScreenButton} /> */}
          <span className={`material-symbols-outlined ${styles.headerIcons}`}>add_to_home_screen</span>
        </button>
      )}

      {showModal && <MessageModal onClickCloseModal={closeModal} message={modalText} />}
    </div>
  );
}

export default Header;
