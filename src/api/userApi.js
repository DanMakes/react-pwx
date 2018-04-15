import axios from 'axios';
import { API_PATH } from '../constants';
import * as utils from '../util/utils';

class UserApi {
	static ERROR_MSG = 'Problemas de comunicação com o servidor';
	static fetch({ query, page = 1 }) {
		const queryString = utils.buildQueryString(query);
		console.log(queryString)

		return axios.get(`${API_PATH}/pessoas${queryString}&_page=${page}`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static get(id) {
		return axios.get(`${API_PATH}/pessoas/${id}`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
}

export default UserApi;