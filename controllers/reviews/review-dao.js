import reviewModel from "./review-model.js";
export const findReviews = () => reviewModel.find();
export const findReviewById = (reviewId) => reviewModel.findOne({_id: reviewId});
export const findReviewBySongId = (songId) => reviewModel.findOne({songId: songId});
export const findReviewByUserId = (userId) => reviewModel.findOne({userId: userId});
export const createReview = (review) => reviewModel.create(review);
export const deleteReview = (reviewId) => reviewModel.deleteOne({_id: reviewId});
export const updateReview = (reviewId, review) => reviewModel.updateOne({_id: reviewId}, {$set: review})