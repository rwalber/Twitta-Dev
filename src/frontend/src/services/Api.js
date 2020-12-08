import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://localhost:3333'
});

export default Api;