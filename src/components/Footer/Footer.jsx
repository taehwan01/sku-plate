import { useEffect } from 'react';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.icon}>
        <h1>I</h1>
        <span style={{ fontSize: '8px' }}>뒤로가기</span>
      </div>
      <div className={styles.icon}>
        <h1>C</h1>
        <span style={{ fontSize: '8px' }}>홈</span>
      </div>
      <div className={styles.icon}>
        <h1>O</h1>
        <span style={{ fontSize: '8px' }}>문의</span>
      </div>
      <div className={styles.icon}>
        <h1>N</h1>
        <span style={{ fontSize: '8px' }}>만든이</span>
      </div>
    </div>
  );
}

export default Footer;
