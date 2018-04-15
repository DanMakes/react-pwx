import axios from 'axios';
import { API_PATH } from '../constants';
import * as utils from '../util/utils';
// import {  } from 'moment';

class UserApi {
	static ERROR_MSG = 'Problemas de comunicação com o servidor';
	static fetch({ query, page = 1 }) {
		const queryString = utils.buildQueryString(query);
		return axios.get(`${API_PATH}/pessoas${queryString}&_page=${page}`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static get(id) {
		return axios.get(`${API_PATH}/pessoas/${id}`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static create(user) {
		return axios.post(`${API_PATH}/pessoas`, user)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static update(user) {
		return axios.put(`${API_PATH}/pessoas/${user.id}`, user)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static put(user) {
		if (user.isCreation) return this.create(user);
		return this.update(user);
	}
}

export default UserApi;