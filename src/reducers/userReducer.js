import { USER } from '../actions/actionTypes';

import initialState from './initialState';

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case USER.LOAD.SUCCESS: {
			return {
				...state,
				users: action.users
			};
		}
		case USER.GET.SUCCESS: {
			return {
				...state,
				user: Object.assign({}, action.user)
			};
		}
		case USER.CREATE.SUCCESS: {
			const users = [...state.users];
			users.push(action.user);
			return {
				...state,
				users,
				user: Object.assign({}, action.user)
			};
		}
		case USER.DELETE.SUCCESS: {
			const users = [...state.users].filter(item => item.id !== action.user.id);
			return {
				...state,
				users
			};
		}

		default:
			return state;
	}
};