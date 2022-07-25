import React, { useReducer, useContext } from 'react';
import { BasketReducer } from './BasketReducer';

const initialState = {
  order_count: 0,
};

export const BasketContext = React.createContext();

export const BasketContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(BasketReducer, initialState);
  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasketGlobalContext = () => {
  return useContext(BasketContext);
};
