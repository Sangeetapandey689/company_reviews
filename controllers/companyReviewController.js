const CompanyReview = require('../models/companyReview');

// Controller functions for CRUD operations

// Create a new company review
const createReview = (req, res) => {
  const { companyName, industry, location, rating, review } = req.body;
  CompanyReview.create({ companyName, industry, location, rating, review })
    .then((review) => {
      res.status(201).json(review);
    })
    .catch((error) => {
      console.error('Error creating review:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Get all company reviews
const getAllReviews = (req, res) => {
  CompanyReview.findAll()
    .then((reviews) => {
      res.status(200).json(reviews);
    })
    .catch((error) => {
      console.error('Error fetching reviews:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Get a review by ID
const getReviewById = (req, res) => {
  const { id } = req.params;
  CompanyReview.findByPk(id)
    .then((review) => {
      if (review) {
        res.status(200).json(review);
      } else {
        res.status(404).json({ error: 'Review not found' });
      }
    })
    .catch((error) => {
      console.error('Error fetching review by ID:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Update a review by ID
const updateReview = (req, res) => {
  const { id } = req.params;
  const { companyName, industry, location, rating, review } = req.body;
  CompanyReview.findByPk(id)
    .then((existingReview) => {
      if (existingReview) {
        existingReview.companyName = companyName;
        existingReview.industry = industry;
        existingReview.location = location;
        existingReview.rating = rating;
        existingReview.review = review;
        return existingReview.save();
      } else {
        res.status(404).json({ error: 'Review not found' });
      }
    })
    .then((updatedReview) => {
      res.status(200).json(updatedReview);
    })
    .catch((error) => {
      console.error('Error updating review:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

// Delete a review by ID
const deleteReview = (req, res) => {
  const { id } = req.params;
  CompanyReview.findByPk(id)
    .then((review) => {
      if (review) {
        return review.destroy();
      } else {
        res.status(404).json({ error: 'Review not found' });
      }
    })
    .then(() => {
      res.status(204).send();
    })
    .catch((error) => {
      console.error('Error deleting review:', error);
      res.status(500).json({ error: 'Internal server error' });
    });
};

module.exports = {
  createReview,
  getAllReviews,
  getReviewById,
  updateReview,
  deleteReview,
};
