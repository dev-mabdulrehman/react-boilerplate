import axios from 'axios';
const baseDomain = '';
const baseURL = `${baseDomain}/api`;

let authToken = localStorage.getItem('authToken');
console.log('authToken:', authToken);
let axiosOptions = {
	baseURL,
	headers: {
		'Cache-Control': 'no-cache',
		'Content-Type': 'application/json',
		...(authToken && { Authorization: 'Bearer ' + authToken }),
	},
};

export default axios.create(axiosOptions);
