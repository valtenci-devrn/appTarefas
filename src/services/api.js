import axios from 'axios'; // npm i axios

const api = axios.create({
    baseURL: 'http://192.168.1.8/apitarefas/'
});

export default api;