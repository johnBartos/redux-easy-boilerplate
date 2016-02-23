const initialState = {
  quoteValues: [],
  quoteTitles: []
};

const mapQuotes = quote => {
  return {
    carrier: {
      value: quote.carrier_name,
    },
    coverage: {
      value: '$' + quote.coverage_amount,
    },
    annualPremium: {
      value: '$' + quote.annual_premium,
    },
    monthlyPremium: {
      value: '$' + quote.monthly_premium,
    },
    term: {
      value: quote.term_in_years + 'yr',
    }
  };
};

const mapQuoteTitles = () => {
  return ['Insurer', 'Coverage Amount', 'Annual Premium', 'Monthly Premium', 'Term'];
};

const explore = {
  explore: {
    value: 'bar'
  }
};

//this is extremely hacky
const exploreQuote = (quoteValues, index) => {
  if (quoteValues[index + 1] === explore) {
    return [
      ...quoteValues.slice(0, index + 1),
      ...quoteValues.slice(index + 2)
    ];
  }
  return [
    ...quoteValues.slice(0, index + 1),
    explore,
    ...quoteValues.slice(index + 1)
  ];
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_QUOTES_SUCCESS':
      return {
        quoteValues: [
          ...state.quoteValues,
          ...action.quotes.map(e => mapQuotes(e))
        ],
        quoteTitles: mapQuoteTitles()
      };

    case 'EXPLORE_QUOTE':
      return {
        quoteTitles: state.quoteTitles,
        quoteValues: exploreQuote(state.quoteValues, action.index)
      };
    default:
      return state;
  }
};


export default reducer;
