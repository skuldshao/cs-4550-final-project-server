import * as reviewDao from './review-dao.js'

const findReviews = async (req, res) => {
    const reviews = await reviewDao.findReviews();
    res.json(reviews);
}

const findReviewById = async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await reviewDao.findReviewById(reviewId);
    res.json(review);
}

const findReviewBySongId = async (req, res) => {
    const songId = req.params.songId;
    const review = await reviewDao.findReviewBySongId(songId);
    res.json(review);
}

const findReviewByUserId = async (req, res) => {
    const userId = req.params.userId;
    const review = await reviewDao.findReviewByUserId(userId);
    res.json(review);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    newReview.date = Date.now();
    const insertedReview = await reviewDao
        .createReview(newReview);
    res.json(insertedReview);
}

const updateReview = async (req, res) => {
    const reviewIdToUpdate = req.params.reviewId;
    const updates = req.body;
    const status = await reviewDao
        .updateReview(reviewIdToUpdate,
            updates);
    res.json(status);
}

const deleteReview = async (req, res) => {
    const reviewIdToDelete = req.params.reviewId;
    const status = await reviewDao
        .deleteReview(reviewIdToDelete);
    res.json(status);
}

export default (app) => {
    app.post('/api/reviews', createReview);
    app.get('/api/reviews', findReviews);
    app.get('/api/reviews/:reviewId', findReviewById);
    app.get('/api/reviews/song/:songId', findReviewBySongId);
    app.get('/api/reviews/user/:userId', findReviewByUserId);
    app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}
