import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    itemID: String,
    userId: ObjectId,
    itemName: String,
    artist: String,
    comments: [{date: Number, userId: ObjectId, comment: String, avatarIcon: String, handle: String}],
    art: String,
    date: Number,
    review: String,
    rating: Number,
    itemType: String
}, {collection: 'review'});

export default schema;