import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.css';

function Header() {
  const navigate = useNavigate();

  const [prompt, setPrompt] = useState(null);
  const [isSafari, setIsSafari] = useState(false);

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
  }, []);

  const handleAddToHomeScreenClick = () => {
    if (!isSafari && prompt) {
      prompt.prompt();

      prompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('The app was added to the home screen');
        } else {
          console.log('The app was not added to the home screen');
        }
      });
    } else if (isSafari) {
      console.log('Safari에서는 홈 화면 추가 기능을 지원하지 않습니다.');
    } else {
      console.error('Prompt object is null');
    }
  };

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      <button
        className={styles.backButton}
        onClick={handleAddToHomeScreenClick}
        // disabled={isSafari} // Safari 환경에서 버튼 비활성화
      >
        <FontAwesomeIcon icon={faMobileScreenButton} />
      </button>
    </div>
  );
}

export default Header;
