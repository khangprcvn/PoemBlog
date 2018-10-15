import { combineReducers } from 'redux';
import PageReducer from './Page_reducer';
import PoemReducer from './Post_Poem';
const rootReducer = combineReducers({
  Page: PageReducer,
  PoemReducer
})

export default rootReducer;