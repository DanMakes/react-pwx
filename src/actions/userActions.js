import { USER } from './actionTypes';
import userApi from '../api/userApi';

export function load(args) {
	return (dispatch) => userApi.fetch(args).then(res => dispatch(loadSuccess(res.data)));
};

export function get(id) {
	return (dispatch) => userApi.get(id).then(res => dispatch(getSuccess(res.data, USER.GET.SUCCESS)));
};

export function put(user) {
	return (dispatch) => userApi.put(user).then(res => dispatch(getSuccess(res.data, user.isCreation ? USER.CREATE.SUCCESS : USER.UPDATE.SUCCESS)));
};

export function remove(id) {
	return (dispatch) => userApi.delete(id).then(res => dispatch(getSuccess({ id }, USER.DELETE.SUCCESS)));
};

export function loadSuccess(users) {
	return { type: USER.LOAD.SUCCESS, users };
};

export function getSuccess(user, type) {
	return { type, user };
};

