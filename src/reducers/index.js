import { combineReducers } from 'redux';
import PageReducer from './Page_reducer';
const rootReducer = combineReducers({
  Page: PageReducer
})

export default rootReducer;