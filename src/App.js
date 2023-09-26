import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header';
import { useEffect } from 'react';

function App() {
  let vh = 0;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <div style={{ flex: 1 }}>
              <h1>CONTENT</h1>
            </div>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
