const DarkModeReducer = (state, action) => {
  if (action.type === 'DARK') {
    return {
      DarkMode: true,
    };
  }
  if (action.type === 'LIGHT') {
    return {
      DarkMode: false,
    };
  }
  if (action.type === 'TOGGLE') {
    return {
      DarkMode: !state.DarkMode,
    };
  }

  return state;
};

export default DarkModeReducer;
