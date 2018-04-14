import axios from 'axios';
import { API_PATH } from '../constants';

class UserApi {
	static fetch() {
		return axios.get(`${API_PATH}/pessoas`)
			.catch(res => Promise.reject('Problemas de comunicação com o servidor'));
	}
}

export default UserApi;