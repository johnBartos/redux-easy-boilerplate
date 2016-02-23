export function getQuotes() {
  console.log('works');
  return (dispatch, getState) => {
  fetch('/quotes')
    .then(response => {
      response.json().then(data => {
        console.log(data);
        dispatch({
          type: 'GET_QUOTES_SUCCESS',
          quotes: data
        });
      })
      .catch(err => {
        console.log(err);
      });
    });
    return {
      type: 'GET_QUOTES_PENDING'
    };
  };
}

export function applyToQuote(carrier) {
  alert(carrier);
  return {
    type: 'APPLY_TO_QUOTE',
    carrier
  };
}
