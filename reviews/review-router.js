const express = require('express');


const Review = require("./review-model")
const reviewRouter = express.Router();

const user = require('../users/users-model');

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
    const { id } = req.params;

    const reviewData = req.body;

    reviewData.books_id = id;


    user.findBy({'username': req.decodedJwt.username})
    .first()
    .then(currentUser => {
reviewData.user_id = currentUser.id;
    });
  
    Review.add(reviewData)
    .then(review => {
      res.status(201).json(review);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new review' });
    });
  });


  module.exports = reviewRouter;