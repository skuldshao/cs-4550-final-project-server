import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    itemId: String,
    userId: ObjectId,
    itemName: String,
    artist: String,
    comments: [{date: Number, reviewID: ObjectId, comment: String}],
    art: String,
    date: Number,
    review: String,
    rating: Number,
}, {collection: 'review'});

export default schema;