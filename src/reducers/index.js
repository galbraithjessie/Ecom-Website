import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

import HeaderNavbar from './headernabarReducer';

const rootReducer = combineReducers({
  form,
  HeaderNavbar
});

export default rootReducer;