import * as reviewDao from './review-dao.js'

const findReviews = async (req, res) => {
    const reviews = await reviewDao.findReviews();
    res.json(reviews);
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
    app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}
