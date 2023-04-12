import mongoose from 'mongoose';

const schema = mongoose.Schema({
    email: String,
    phoneNumber: Number,
    adminKey: String,
    password: String,
    avatarIcon: Number,
    handle: String,
    userName: String,
    joined: Date,
    
}, {collection: 'admin'});

export default schema;