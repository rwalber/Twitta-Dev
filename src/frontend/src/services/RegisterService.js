import Api from './Api';

export default {
    
    async create(user) {
        let registered = false;
        await Api.post('/register', user).then(user => {
            if(user.data === 'User successfully registered!') {
                registered = true;
            }
        });
        return registered;
    }

}