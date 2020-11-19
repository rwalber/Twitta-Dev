const crypto = require('crypto');

const User = require('../models/User');

module.exports = {
    async create(request, response) {
        
        const userData = request.body;
        const file  = request.file;

        let passwordCrypto = crypto.createHmac('sha256', userData.password).update('anything').digest('hex');
        
        const newUser = {
            thumbnail: file.filename,
            name: userData.name,
            email: userData.email,
            login: userData.login,
            password: passwordCrypto
        }

        await User.create(newUser, {unique: true});

        return response.json("User successfully registered!");
    }
}