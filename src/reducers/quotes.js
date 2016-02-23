const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUOTES_SUCCESS':
      return [
        ...state,
        ...action.quotes
      ];
    default:
      return state;
  }
};


export default reducer;
