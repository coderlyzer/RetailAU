export const BasketReducer = (state, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      order_count: state.order_count + 1,
    };
  }
  if (action.type === 'DECREMENT') {
    if (state.order_count !== 0) {
      return {
        ...state,
        order_count: state.order_count - 1,
      };
    }
  }

  return state;
};
