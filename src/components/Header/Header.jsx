import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import { faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons';

import styles from './Header.module.css';
import MessageModal from '../MessageModal/MessageModal';

const safariModal = (
  <span className={styles.modalModal}>
    홈화면에 <span className={styles.appName}>서경 PLATE</span>를 추가하시려면
    <br />
    기기 하단 탭 버튼 <FontAwesomeIcon className={styles.shareIcon} icon={faArrowUpFromBracket} /> 클릭 후
    <br />
    화면 추가 <FontAwesomeIcon className={styles.plusIcon} icon={faSquarePlus} /> 를 눌러주세요.
  </span>
);

function Header() {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState(null);
  const [isSafari, setIsSafari] = useState(false);

  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalTimer, setModalTimer] = useState(null);

  useEffect(() => {
    const handler = (event) => {
      event.preventDefault();
      setPrompt(event);
    };

    window.addEventListener('beforeinstallprompt', handler);

    const userAgent = window.navigator.userAgent.toLowerCase();
    if (userAgent.includes('safari') && !userAgent.includes('chrome')) {
      setIsSafari(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, [prompt]);

  const handleAddToHomeScreenClick = () => {
    if (!isSafari && prompt) {
      prompt.prompt();

      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          setModalText('홈 화면에 추가되었습니다.');
          setShowModal(true);
          // console.log('The app was added to the home screen');
        } else {
          setModalText('홈 화면 추가가 취소되었습니다.');
          setShowModal(true);
          // console.log('The app was not added to the home screen');
        }
        const timer = setTimeout(() => {
          setShowModal(false);
        }, 5000);
        setModalTimer(timer);
      });
    } else if (isSafari) {
      setModalText(safariModal);
      setShowModal(true);
      // console.log('Safari에서는 홈 화면 추가 기능을 지원하지 않습니다.');
    } else {
      setModalText('홈 화면에 이미 추가되어 있습니다.');
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 5000);
      setModalTimer(timer);
      // setShowA2HS(true);
      // console.error('Prompt object is null');
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
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>

      {/* iOS 환경 */}
      {isSafari && !navigator.standalone && (
        <button
          className={styles.backButton}
          onClick={handleAddToHomeScreenClick}
          // disabled={isSafari} // Safari 환경에서 버튼 비활성화
        >
          <FontAwesomeIcon icon={faMobileScreenButton} />
        </button>
      )}

      {/* android 환경 */}
      {prompt && !isSafari && (
        <button
          className={styles.backButton}
          onClick={handleAddToHomeScreenClick}
          // disabled={isSafari} // Safari 환경에서 버튼 비활성화
        >
          <FontAwesomeIcon icon={faMobileScreenButton} />
        </button>
      )}
      {showModal && <MessageModal onClickCloseModal={closeModal} message={modalText} />}
    </div>
  );
}

export default Header;
