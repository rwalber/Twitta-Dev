const User = require('../models/User');
const crypto = require('crypto');

module.exports = {
    async login(request, response) {
        const data = request.body;
        console.log(data);
        const user = await User.findOne( { login: data.login } );
        console.log(user);
        if (user) {
            password = crypto.createHmac('sha256', data.password).update('anything').digest('hex');
            if (password === user.password) {
                return response.json(user);
            } else {
                return response.json('Login or password incorrect.');
            }
        } else {
            return response.json('Login or password incorrect.');
        }
    }
}