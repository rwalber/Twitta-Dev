const User = require('../models/User');
const crypto = require('crypto');

module.exports = {
    async login(request, response) {
        const data = request.body;
        const user = await User.findOne( { login: data.login } );
        if (user) {
            password = crypto.createHmac('sha256', data.password).update('anything').digest('hex');
            if (password === user.password) {
                let userData = {
                    thumbnail: user.thumbnail,
                    name: user.name
                }
                return response.json(userData);
            } else {
                return response.json('Login or password incorrect.');
            }
        } else {
            return response.json('Login or password incorrect.');
        }
    }
}