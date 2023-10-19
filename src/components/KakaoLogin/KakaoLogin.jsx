import { REST_API_KEY, REDIRECT_URI } from "../../data/oauth"
import KakaoIcon from "../../assets/images/icons/KAKAO_ICON.png";

import styles from "./KakaoLogin.module.css";

function KakaoLogin() {
  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");
  const link = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  // useEffect((code) => {
  //     axios.post(`http://skuplate.com.${code}`).then((res) => {
  //       console.log(res.data);
  //       navigate('/loginSuccess');
  //     });
  //   }, []);

  localStorage.setItem("code", code);
  const loginHandler = () => {
    window.location.href = link;
  };
  
  return (
    <div className={styles.loginBox} style={{ backgroundColor: "#FFE812" }} onClick={loginHandler}>
      <img src={KakaoIcon} alt="kakao icon" className={styles.Icon} />
      <span className={styles.text}>카카오톡으로 시작하기</span>
    </div>
  );
}

export default KakaoLogin;
