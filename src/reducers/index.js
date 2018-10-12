import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'; 
import PageReducer from './Page_reducer';
const reducer = combineReducers({
  Page: PageReducer,
  form: formReducer 
})

export default reducer;