import { USER } from './actionTypes';
import userApi from '../api/userApi';

export function load() {
	return (dispatch) => userApi.fetch().then(res => dispatch(loadSuccess(res.data)));
};

export function get(id) {
	return (dispatch) => userApi.get(id).then(res => dispatch(getSuccess(res.data)));
};

export function loadSuccess(users) {
	return { type: USER.LOAD.SUCCESS, users };
};

export function getSuccess(user) {
	return { type: USER.GET.SUCCESS, user };
}

