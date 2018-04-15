import { USER } from '../actions/actionTypes';

import initialState from './initialState';

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case USER.LOAD.SUCCESS:
			return {
				...state,
				users: action.users
			};
		case USER.GET.SUCCESS:
			return {
				...state,
				user: Object.assign({}, action.user)
			};
		case USER.CREATE.SUCCESS:
			const users = [...state.users];
			users.push(action.user);
			return {
				...state,
				user: Object.assign({}, action.user),
				users: users
			};;
		default:
			return state;
	}
};