import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.css';
import backIcon from '../../assets/images/BACK_ICON.png';
import homeIcon from '../../assets/images/HOME_ICON.png';
import inquiriesIcon from '../../assets/images/INQUIRIES_ICON.png';
import myPageIcon from '../../assets/images/MY_ICON.png';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.icon} onClick={() => navigate(-1)}>
        <img className={styles.menuIcons} src={backIcon} alt='뒤로가기' />
        <span style={{ height: '14px', fontSize: '8px' }}>뒤로가기</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/')}>
        <img className={styles.menuIcons} src={homeIcon} alt='홈' />
        <span style={{ height: '14px', fontSize: '8px' }}>홈</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/inquiries')}>
        <img className={styles.menuIcons} src={inquiriesIcon} alt='문의' />
        <span style={{ height: '14px', fontSize: '8px' }}>문의</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/my-page')}>
        <img className={styles.menuIcons} src={myPageIcon} alt='만든이' />
        <span style={{ height: '14px', fontSize: '8px' }}>만든이</span>
      </div>
    </div>
  );
}

export default Footer;
