const express = require('express');
const router = express.Router();
const companyReviewController = require('../controllers/companyReviewController');

router.post('/reviews', companyReviewController.createReview);
router.get('/reviews', companyReviewController.getAllReviews);
router.get('/reviews/:id', companyReviewController.getReviewById);
router.put('/reviews/:id', companyReviewController.updateReview);
router.delete('/reviews/:id', companyReviewController.deleteReview);

module.exports = router;
