import axios from 'axios';
import { URL } from '../_constants/URL_API';

const Api = axios.create({
    baseURL: URL
});

export default Api;