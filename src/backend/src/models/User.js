const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    thumbnail: String,
    name: String,
    email: String,
    login: String,
    password: String
}, {
    toJSON: {
        virtuals: true,
    }
});

UserSchema.virtual('thumbnail_url').get(function () {
    return `http://localhost:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model("User", UserSchema);