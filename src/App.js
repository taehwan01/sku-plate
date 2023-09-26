import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // const setVh = () => {
    //   document.documentElement.style.setProperty('--vh', `${window.innerHeight}px`);
    // };
    // window.addEventListener('resize', setVh);
    // setVh();
    const setVh = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };
    window.addEventListener('resize', setVh);
    setVh();
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div style={{ flex: 1 }}>
              <h1>홈화면</h1>
            </div>
          }
        />
        <Route
          path='/inquiries'
          element={
            <div style={{ flex: 1 }}>
              <h1>문의하기</h1>
            </div>
          }
        />
        <Route
          path='/my-page'
          element={
            <div style={{ flex: 1 }}>
              <h1>MY 페이지</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
