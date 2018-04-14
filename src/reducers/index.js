import { combineReducers } from 'redux';
import users from './userReducer';
const root = combineReducers({
	users
});

export default root;