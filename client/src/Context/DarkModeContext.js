import React, { useContext, useReducer } from 'react';
import DarkModeReducer from './DarkModeReducer';

const initialState = {
  DarkMode: false,
};

const DarkModeContext = React.createContext();

export const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DarkModeReducer, initialState);
  return (
    <DarkModeContext.Provider value={{ state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(DarkModeContext);
};
