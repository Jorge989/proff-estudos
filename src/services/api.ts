import axios from 'axios';

const api = axios.create({
 baseURL: 'https://git.heroku.com/backendprof.git'
})

export default api;
