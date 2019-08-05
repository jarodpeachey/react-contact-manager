import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import connectionReducer from './connectionReducer';

export default combineReducers({
  contacts: contactReducer,
  connectionStatus: connectionReducer,
});
