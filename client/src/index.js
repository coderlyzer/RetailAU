import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { DarkModeContextProvider } from './Context/DarkModeContext';
import { BasketContextProvider } from './Context/BasketContext';
import { FetchContextProvider } from './Context/FetchContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FetchContextProvider>
      <DarkModeContextProvider>
        <BasketContextProvider>
          <App />
        </BasketContextProvider>
      </DarkModeContextProvider>
    </FetchContextProvider>
  </React.StrictMode>
);
