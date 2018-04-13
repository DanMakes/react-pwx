import { USER } from './actionTypes';

export function load() {
	return function (dispatch) {
		return new Promise((resolve, reject) => {

			resolve([]);
			dispatch(loadSuccess([]));
		});
	};
};

export function loadSuccess(users) {
	return { type: USER.LOAD.SUCCESS, users };
};

