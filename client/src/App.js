import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useGlobalContext } from './Context/DarkModeContext';
import Home from './pages/Home/Home';
import List from './pages/List/List';
import Login from './pages/Login/Login';
import New from './pages/New/New';
import Single from './pages/Single/Single';
import './style/dark.scss';

const App = () => {
  const { state } = useGlobalContext();
  const darkMode = state.DarkMode;

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="orders">
            <Route index element={<List />} />
            <Route path=":productId" element={<Single />} />
            <Route path="new" element={<New />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
