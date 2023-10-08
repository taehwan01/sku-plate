import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect } from 'react';
import Home from './pages/Home/Home';
import Restaurants from './pages/Restaurants/Restaurants';

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
        <Route path='/categories/:currentCategory' element={<Restaurants />} />
        <Route path='/inquiries' element={<h1>문의하기</h1>} />
        <Route path='/my-page' element={<h1>MY 페이지</h1>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
