import axios from 'axios';
import { API_PATH } from '../constants';

class UserApi {
	static ERROR_MSG = 'Problemas de comunicação com o servidor';
	static fetch() {
		return axios.get(`${API_PATH}/pessoas`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
	static get(id) {
		return axios.get(`${API_PATH}/pessoas/${id}`)
			.catch(res => Promise.reject(UserApi.ERROR_MSG));
	}
}

export default UserApi;