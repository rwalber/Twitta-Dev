import axios from 'axios';

const Api = axios.create({
    baseURL: 'https://54.173.240.173:3333'
});

export default Api;