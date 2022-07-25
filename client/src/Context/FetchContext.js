import React, { useReducer, useContext, useEffect } from 'react';
import axios from 'axios';
import { FetchReducer } from './FetchReducer';

const url = 'http://localhost:8000/api/v1/products';

const FetchContext = React.createContext();

const initialState = {
  loading: true,
  orders: [],
  profit: 0,
  revenue: 0,
  error: false,
};

export const FetchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(FetchReducer, initialState);

  const fetchData = async () => {
    try {
      dispatch({ type: 'LOADING' });
      const productList = await axios.get(url);
      dispatch({ type: 'DISPLAY_ORDERS', payload: productList });
      // console.log(productList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS' });
  }, [state.orders]);

  return (
    <FetchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </FetchContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(FetchContext);
};
