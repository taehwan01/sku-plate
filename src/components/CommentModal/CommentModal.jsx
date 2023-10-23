import { useState } from "react";
import { useNavigate } from "react-router-dom";

import styles from "./CommentModal.module.css";

function CommentModal() {
  const [isFocused, setIsFocused] = useState(false);
  const [rate, setRate] = useState();
  const navigate = useNavigate();

  const onRate = (e) => {
    setRate(e.target.value);
  };

  const uploadImage = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.addEventListener('change', handleFileSelection);
    fileInput.click();
  }

  const handleFileSelection = (e) => {
    const selectedFile = e.target.files[0];

    if (selectedFile) {
      console.log('선택한 파일:', selectedFile);
    }
  };

  const handleFocusInquiry = () => {
    setIsFocused(true);
  };

  const handleBlurInquiry = () => {
    setIsFocused(false);
  };

  const handleUploadClick = () => {
    navigate("/oauth");
  };

  return (
    <div className={styles.container}>
      <div className={styles.modalBox}>
        <div className={styles.modalContents}>
          <div className={styles.ratingInquiry}>
            <span
              className={`material-icons`}
              style={{ marginLeft: "9px", color: "#92979E" }}
            >
              star_rate
            </span>
            <hr
              style={{
                width: "1px",
                height: "22px",
                backgroundColor: "#92979E",
                margin: "0 5px",
              }}
            />
            <span style={{ color: "#92979E" }}> 0.0 / </span>
            <input onChange={onRate} value={rate} />
          </div>
          <textarea
            cols="30"
            rows="10"
            placeholder={isFocused ? "" : "내용을 입력하세요."}
            className={styles.userInquiry}
            onFocus={handleFocusInquiry}
            onBlur={handleBlurInquiry}
          />
          <div className={styles.bottomBar}>
            <div style={{cursor: "pointer"}} onClick={uploadImage}>
              <span
                className={`material-icons ${styles.cameraIcon}`}
                style={{ color: "#92979E", fontSize: "50px" }}
              >
                photo_camera
              </span>
            </div>

            <button
              className={`the-jamsil  ${styles.uploadButton}`}
              onClick={handleUploadClick}
            >
              게시
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CommentModal;
