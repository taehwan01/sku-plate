import Thumbnail from "../../assets/images/USER_ICON.png";
import GoogleIcon from "../../assets/images/icons/GOOGLE_ICON.png";
import KakaoLogin from "../../components/KakaoLogin/KakaoLogin";

import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.container}>
      <img
        src={Thumbnail}
        alt=""
        className={styles.thumbnail}
      />
      <div className={styles.loginBox} style={{backgroundColor: "white"}}>
      <img
        src={GoogleIcon}
        alt="kakao icon"
        className={styles.Icon}
      />
        {/* Google Login */}
        <span className={styles.text}>Google로 시작하기</span>
      </div>
      <KakaoLogin />
      <span style={{ fontSize: "10px" }}>문의하기</span>
    </div>
  );
}

export default Login;
