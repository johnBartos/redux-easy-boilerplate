const mapQuotes = quote => {
  return {
    carrier: {
      value: quote.carrier_name,
      title: 'Insurer'
    },
    coverage: {
      value: '$' + quote.coverage_amount,
      title: 'Coverage Amount'
    },
    annualPremium: {
      value: '$' + quote.annual_premium,
      title: 'Annual Premium'
    },
    monthlyPremium: {
      value: '$' + quote.monthly_premium,
      title: 'Monthly Premium'
    },
    term: {
      value: quote.term_in_years + 'yr',
      title: 'Term'
    }
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'GET_QUOTES_SUCCESS':
      return [
        ...state,
        ...action.quotes.map(e => mapQuotes(e))
      ];
    default:
      return state;
  }
};


export default reducer;
