import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';

import { useAddToHomescreenPrompt } from '../../utils/A2HS';
import styles from './Header.module.css';
import { useEffect, useState } from 'react';

function Header() {
  const navigate = useNavigate();
  const [prompt, promptToInstall] = useAddToHomescreenPrompt();

  const [isAppInstalled, setIsAppInstalled] = useState(false);

  const isPWAInstalled = async () => {
    if ('getInstalledRelatedApps' in window.navigator) {
      const relatedApps = await navigator.getInstalledRelatedApps();
      let installed = false;
      relatedApps.forEach((app) => {
        //if your PWA exists in the array it is installed
        console.log(app.platform, app.url);
        if (app.url === 'https://yourwebsite.com/manifest.json') {
          installed = true;
        }
      });
      setIsAppInstalled(installed);
    }
  };
  useEffect(() => {
    isPWAInstalled();
  }, []);

  return (
    <div className={styles.header}>
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
      {!isAppInstalled ? (
        <button className={styles.backButton} onClick={promptToInstall}>
          <FontAwesomeIcon icon={faMobileScreenButton} />
        </button>
      ) : (
        <div>
          홈화면에 추가됐습니다. <br />
          감사합니다.
        </div>
      )}
    </div>
  );
}

export default Header;
