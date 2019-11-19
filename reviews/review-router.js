const express = require('express');


const Review = require("./review-model")
const reviewRouter = express.Router();



reviewRouter.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Review.findBy({'books_id': id})
    .then(rev => {
      if (rev) {
        res.json(rev);
      } else {
        res.status(404).json({ message: 'Could not find review.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get review: ' + err });
    });
  });

  reviewRouter.post('/:id', (req, res) => {
    const reviewData = req.body;
  
    Review.add(reviewData)
    .then(review => {
      res.status(201).json(review);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new review' });
    });
  });


  module.exports = reviewRouter;