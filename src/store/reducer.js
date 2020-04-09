//reducer.js
import { combineReducers } from 'redux-immutable';
import { reducer as recommendReducer } from '../view/Recommend/store/index';

export default combineReducers({
  recommend: recommendReducer
});