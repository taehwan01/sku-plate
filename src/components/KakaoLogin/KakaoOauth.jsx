import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function KakaoOauth() {
  const navigate = useNavigate();
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    async function getAccessToken() {
      const params = new URL(window.location.href).searchParams;
      const code = params.get('code');

      const response = await axios.post(`${process.env.REACT_APP_SERVER_API_URL}/users/kakao/login`, { code });

      console.log(response.data);

      localStorage.setItem('token', response.data.accessToken);
      localStorage.setItem('user', response.data.user);
      navigate('/');
    }
    getAccessToken();
  }, []);

  return <div></div>;
}

export default KakaoOauth;
