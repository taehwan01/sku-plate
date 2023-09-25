import { Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer';
import Header from './components/Header';

function App() {
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
