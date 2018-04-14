import { USER } from './actionTypes';
import userApi from '../api/userApi';

export function load() {
	return function (dispatch) {
		return userApi.fetch()
			.then(res => dispatch(loadSuccess(res.data)));
	};
};

export function loadSuccess(users) {
	return { type: USER.LOAD.SUCCESS, users };
};

