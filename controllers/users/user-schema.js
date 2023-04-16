import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    email: {String, unique: true},
    number: Number,
    password: String,
    avatarIcon: Number,
    handle: {String, unique: true},
    userName: String,
    joined: Number,
    bio: String,
    location: String,
    locationPublic: Boolean,
    following: [ObjectId],
    followers: [ObjectId],
    reviews: [ObjectId],
    favoriteSongs: [{date: Date, musicID: ObjectId}],
    newSongs: [{date: Date, musicID: ObjectId}],
    comments:[{date: Date, reviewID: ObjectId, comment: String}]
}, {collection: 'users'});

export default schema;