import { useNavigate } from 'react-router-dom';

import styles from './Footer.module.css';
import backIcon from '../../assets/images/icons/BACK_ICON.png';
import homeIcon from '../../assets/images/icons/HOME_ICON.png';
import inquiriesIcon from '../../assets/images/icons/INQUIRIES_ICON.png';
import myPageIcon from '../../assets/images/icons/MY_ICON.png';
import InquiryModal from '../InquiryModal/InquiryModal';
import { useState } from 'react';

function Footer() {
  const navigate = useNavigate();

  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);

  const openInquiryModal = () => {
    setIsInquiryModalOpen(true);
  };

  const closeInquiryModal = () => {
    setIsInquiryModalOpen(false);
  };

  return (
    <div className={styles.footer}>
      <div className={styles.icon} onClick={() => navigate(-1)}>
        <span className={`material-symbols-outlined ${styles.menuIcons}`}>undo</span>
        {/* <img className={styles.menuIcons} src={backIcon} alt='뒤로가기' /> */}
        <span className={styles.menuLabels}>뒤로가기</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/')}>
        {/* <img className={styles.menuIcons} src={homeIcon} alt='홈' /> */}
        <span className={`material-symbols-outlined ${styles.menuIcons}`}>home</span>
        <span className={styles.menuLabels}>홈</span>
      </div>
      <div className={styles.icon} onClick={openInquiryModal}>
        {/* <img className={styles.menuIcons} src={inquiriesIcon} alt='문의' /> */}
        <span className={`material-symbols-outlined ${styles.menuIcons}`}>edit_note</span>
        <span className={styles.menuLabels}>문의</span>
      </div>
      <div className={styles.icon} onClick={() => navigate('/my-page')}>
        {/* <img className={styles.menuIcons} src={myPageIcon} alt='만든이' /> */}
        <span className={`material-symbols-outlined ${styles.menuIcons}`} style={{ fontWeight: 'normal' }}>
          sentiment_satisfied
        </span>
        <span className={styles.menuLabels}>마이페이지</span>
      </div>
      {isInquiryModalOpen && <InquiryModal onClickCloseInquiryModal={closeInquiryModal} />}
    </div>
  );
}

export default Footer;
