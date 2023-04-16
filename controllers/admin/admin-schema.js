import mongoose from 'mongoose';

const schema = mongoose.Schema({
    email: {type: String, unique: true},
    number: Number,
    adminKey: String,
    password: String,
    avatarIcon: Number,
    handle: {type: String, unique: true},
    userName: String,
    joined: Number,
}, {collection: 'admin'});

export default schema;