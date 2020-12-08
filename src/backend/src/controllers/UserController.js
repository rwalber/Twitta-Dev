const crypto = require('crypto');

const User = require('../models/User');

module.exports = {
    async create(request, response) {
        
        const userData = request.body;

        let passwordCrypto = crypto.createHmac('sha256', userData.password).update('anything').digest('hex');
        const newUser = {
            thumbnail: userData.thumbnail,
            name: userData.name,
            email: userData.email,
            login: userData.login,
            password: passwordCrypto
        }

        await User.create(newUser, {unique: true});

        return response.json("User successfully registered!");
    }
}