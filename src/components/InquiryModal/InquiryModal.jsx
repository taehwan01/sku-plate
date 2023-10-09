import { useState } from 'react';
import styles from './InquiryModal.module.css';

function InquiryModal({ onClickCloseInquiryModal }) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocusInquiry = () => {
    setIsFocused(true);
  };

  const handleBlurInquiry = () => {
    setIsFocused(false);
  };

  const handleUploadClick = () => {
    // axios inquiry post
    onClickCloseInquiryModal();
  };

  return (
    <div className={styles.inquiryModal}>
      <div className={styles.modalBox}>
        <div className={styles.modalContents}>
          <div className={styles.topBar}>
            <span className={`the-jamsil  ${styles.modalTitle}`}>문의</span>
            <button className={styles.exitButton} onClick={onClickCloseInquiryModal}>
              <span className={`material-symbols-outlined ${styles.exitIcon}`}>close</span>
            </button>
          </div>
          <hr style={{ width: '100%', border: '1px solid #817A7A' }} />
          <div className={styles.modalMessage}>
            <span>문의 사항 및 보완점을 자유롭게 알려주세요!</span>
          </div>
          <textarea
            cols='30'
            rows='10'
            placeholder={isFocused ? '' : '내용을 입력하세요.'}
            className={styles.userInquiry}
            onFocus={handleFocusInquiry}
            onBlur={handleBlurInquiry}
          />
          <button className={`the-jamsil  ${styles.uploadButton}`} onClick={handleUploadClick}>
            게시
          </button>
        </div>
      </div>
    </div>
  );
}

export default InquiryModal;
