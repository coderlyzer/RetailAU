export const FetchReducer = (state, action) => {
  if (action.type === 'LOADING') {
    return { ...state, loading: true };
  }

  if (action.type === 'DISPLAY_ORDERS') {
    console.log(state);
    return { ...state, loading: false, orders: action.payload };
  }

  return state;
};
