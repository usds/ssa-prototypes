import { combineReducers } from 'redux'
import counterReducer from '../features/counter/counterSlice';
import navBarReducer from '../features/navbar/navBarSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  auth: navBarReducer,
})

export default rootReducer