import { USER } from '../actions/actionTypes';


import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {

	switch (action.type) {
		case USER.LOAD.SUCCESS:
			return action.users;
		default:
			return state;
	}
};