const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../middleware/auth-middleware');
const userRouter = require('../users/user-router.js');
const reviewRouter = require('../reviews/review-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/users', userRouter);

server.use('/api/reviews', reviewRouter);

module.exports = server;