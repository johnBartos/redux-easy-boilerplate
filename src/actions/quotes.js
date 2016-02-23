export function getQuotes() {
  return (dispatch, getState) => {
  fetch('/quotes')
    .then(response => {
      response.json().then(data => {
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

export function applyToQuote(carrier, se, button, event) {
  alert('Applying to ' + carrier);
  return {
    type: 'APPLY_TO_QUOTE',
    carrier
  };
}

export function exploreQuote(index) {
  return {
    type: 'EXPLORE_QUOTE',
    index
  };
}
