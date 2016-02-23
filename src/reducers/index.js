import { combineReducers } from 'redux';
import { routeReducer } from 'redux-simple-router';
import { reducer as formReducer } from 'redux-form';
import quoteReducer from './quotes';

const rootReducer = combineReducers({
  form: formReducer,
  routing: routeReducer,
  quoteReducer
});

export default rootReducer;
