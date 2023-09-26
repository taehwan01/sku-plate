import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.scss';

function Footer() {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div
        className={styles.icon}
        onClick={() => {
          navigate(-1);
        }}
      >
        <h1>I</h1>
        <span style={{ fontSize: '8px' }}>뒤로가기</span>
      </div>
      <div
        className={styles.icon}
        onClick={() => {
          navigate('/');
        }}
      >
        <h1>C</h1>
        <span style={{ fontSize: '8px' }}>홈</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/inquiries')}>
        <h1>O</h1>
        <span style={{ fontSize: '8px' }}>문의</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/my-page')}>
        <h1>N</h1>
        <span style={{ fontSize: '8px' }}>만든이</span>
      </div>
    </div>
  );
}

export default Footer;
