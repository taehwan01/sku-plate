import { axios } from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function KakaoOauth() {
  const navigate = useNavigate();

  //인가코드
  let code = new URL(window.location.href).searchParams.get("code");

  // useEffect((code) => {
  //     axios.post(`http://skuplate.com.${code}`).then((res) => {
  //       console.log(res.data);
  //       navigate('/loginSuccess');
  //     });
  //   }, []);

  localStorage.setItem("code", code);

  return <div></div>;
}

export default KakaoOauth;
