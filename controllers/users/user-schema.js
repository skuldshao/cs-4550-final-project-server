import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    email: String,
    phoneNumber: Number,
    password: String,
    avatarIcon: Number,
    handle: String,
    userName: String,
    joined: Date,
    bio: String,
    location: String,
    locationPublic: Boolean,
    following: [ObjectId],
    followers: [ObjectId],
    reviews: [ObjectId],
    favoriteSongs: [String],
}, {collection: 'user'});

export default schema;