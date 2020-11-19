import Login from '../pages/Login';
import Api from './Api';

export default {
    
    async create(login, password) {
        return Api.post('/login', { login, password });
    }
}