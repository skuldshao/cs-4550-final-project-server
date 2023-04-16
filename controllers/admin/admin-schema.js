import mongoose from 'mongoose';

const schema = mongoose.Schema({
    email: {String, unique: true},
    number: Number,
    adminKey: String,
    password: String,
    avatarIcon: Number,
    handle: {String, unique: true},
    userName: String,
    joined: Number,
}, {collection: 'admin'});

export default schema;