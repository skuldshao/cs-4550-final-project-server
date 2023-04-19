import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    itemID: String,
    userId: ObjectId,
    itemName: String,
    artist: String,
    comments: [{date: Number, reviewID: ObjectId, comment: String}],
    art: String,
    date: String,
    review: String,
    rating: Number,
}, {collection: 'review'});

export default schema;