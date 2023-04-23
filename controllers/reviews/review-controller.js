import * as reviewDao from './review-dao.js'
import * as userDao from "./../users/user-dao.js"

const findReviews = async (req, res) => {
    const reviews = await reviewDao.findReviews();
    res.json(reviews);
}

const findReviewsBySongId = async (req, res) => {
    const songId = req.params.songId;
    console.log(songId)
    const review = await reviewDao.findReviewsBySongId(songId);
    console.log(review)
    res.json(review);
}

const findReviewsByUserId = async (req, res) => {
    const userId = req.params.userId;
    const review = await reviewDao.findReviewsByUserId(userId);
    res.json(review);
}

const findReviewById = async (req, res) => {
    const reviewId = req.params.reviewId;
    const review = await reviewDao.findReviewById(reviewId);
    res.json(review);
}

const createReview = async (req, res) => {
    const newReview = req.body;
    newReview.date = Date.now();
    const insertedReview = await reviewDao
        .createReview(newReview);
    const user = await userDao.findUserById(newReview.userId);
    const rev = {"itemID": newReview.itemID, "rating": newReview.rating,
        "artist": newReview.artist,
        "itemName": newReview.itemName,
        "review": newReview.review,
        "date": newReview.date, "art": newReview.art}
    await userDao.updateUser(req.body.userId, {...user, "reviews": [...user.reviews, rev]})
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
    app.get('/api/reviews/song/:songId', findReviewsBySongId);
    app.get('/api/reviews/user/:userId', findReviewsByUserId);
    app.get('/api/reviews/:reviewId', findReviewById);
    app.put('/api/reviews/:reviewId', updateReview);
    app.delete('/api/reviews/:reviewId', deleteReview);
}
