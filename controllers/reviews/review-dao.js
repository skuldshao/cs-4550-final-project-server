import reviewModel from "./review-model.js";
export const findReviews = () => reviewModel.find();
export const findReviewsBySongId = (itemId) => reviewModel.find({itemID: itemId});
export const findReviewsByUserId = (userId) => reviewModel.find({userId: userId});
export const findReviewById = (reviewId) => reviewModel.find({_id: reviewId});
export const createReview = (review) => reviewModel.create(review);
export const deleteReview = (reviewId) => reviewModel.deleteOne({_id: reviewId});
export const updateReview = (reviewId, review) => reviewModel.updateOne({_id: reviewId}, {$set: review})