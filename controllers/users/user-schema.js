import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    email: {type: String, unique: true},
    number: Number,
    password: String,
    avatarIcon: String,
    handle: {type: String, unique: true},
    userName: String,
    joined: Number,
    bio: String,
    location: String,
    locationPublic: Boolean,
    following: [ObjectId],
    followers: [ObjectId],
    reviews: [ObjectId],
    favoriteSongs: [{date: Number, musicID: String}],
    newSongs: [{date: Number, musicID: String}],
    comments:[{date: Number, reviewID: ObjectId, comment: String}]
}, {collection: 'users'});

export default schema;