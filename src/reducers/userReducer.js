import { USER } from '../actions/actionTypes';


import initialState from './initialState';

export default function userReducer(state = initialState.users, action) {
	console.log(state, action)
	switch (action.type) {
		case USER.LOAD.SUCCESS:
			return action.users;
		case USER.GET.SUCCESS:
			return action.user;
		default:
			return state;
	}
};