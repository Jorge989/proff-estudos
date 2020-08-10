import axios from 'axios';

const api = axios.create({
 baseURL:
  'https://git.heroku.com/backend-professores.git'
})

export default api;
