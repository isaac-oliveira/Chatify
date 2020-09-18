import { create } from 'apisauce';

const api = create({
	baseURL: 'https://api-chatify.herokuapp.com',
	timeout: 7000,
});

export default api;
