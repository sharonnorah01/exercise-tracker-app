const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//users schema
const UserSchema = new Schema({
    username:{
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
},{ timestamps: true,
})

//binding the users model and users schema
const User = mongoose.model('users', UserSchema);  //users is the name of the users collection in the db

module.exports = User;
