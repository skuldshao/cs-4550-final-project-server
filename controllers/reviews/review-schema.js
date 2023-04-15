import mongoose from 'mongoose';

const ObjectId = mongoose.Types.ObjectId;

const schema = mongoose.Schema({
    songId: String,
    userId: ObjectId,
    date: Date,
    review: String,
    rating: Number,
}, {collection: 'review'});

export default schema;