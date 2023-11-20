import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';
import Restaurant from './pages/Restaurant/Restaurant';
import MyPage from './pages/MyPage/MyPage';
import Login from './pages/Login/Login';
import KakaoOauth from './components/KakaoLogin/KakaoOauth';
import SearchedRestaurants from './pages/SearchedRestaurants/SearchedRestaurants';

function App() {
  useEffect(() => {
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setVh);
    setVh();
  }, []);

  return (
    // TODO: https로 수정 후 PWA 적용
    <div className='App'>
      <Header />
      <Routes style={{ flex: 1 }}>
        <Route path='/' element={<Home />} />
        <Route path='/categories/:categoryParam' element={<Restaurants />} />
        <Route path='/restaurant/:restaurantParam' element={<Restaurant />} />
        <Route path='/restaurants/search/:searchParam' element={<SearchedRestaurants />} />
        <Route path='/my-page/:myContents' element={<MyPage />} />
        <Route path='/oauth' element={<Login />} />
        <Route path='/oauth/kakaoLogin' element={<KakaoOauth />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
