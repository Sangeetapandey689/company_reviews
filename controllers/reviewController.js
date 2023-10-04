const Review = require('../models/review'); // Assuming your model file is named 'review.js'

// Controller functions for CRUD operations
const createReview = async (req, res) => {
  try {
    const { companyName, pros, cons, rating } = req.body;
    const review = await Review.create({ companyName, pros, cons, rating });
    res.status(201).json(review);
  } catch (error) {
    console.error('Error creating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getAllReviews = async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.status(200).json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const getReviewById = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (review) {
      res.status(200).json(review);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    console.error('Error fetching review by ID:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const updateReview = async (req, res) => {
  try {
    const { id } = req.params;
    const { companyName, pros, cons, rating } = req.body;
    const existingReview = await Review.findByPk(id);
    if (existingReview) {
      existingReview.companyName = companyName;
      existingReview.pros = pros;
      existingReview.cons = cons;
      existingReview.rating = rating;
      await existingReview.save();
      res.status(200).json(existingReview);
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    console.error('Error updating review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = await Review.findByPk(id);
    if (review) {
      await review.destroy();
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Review not found' });
    }
  } catch (error) {
    console.error('Error deleting review:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
