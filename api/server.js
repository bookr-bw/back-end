const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../middleware/auth-middleware');
const authRouter = require('./auth-router.js');
const userRouter = require('./user-router')

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use('/api/auth' , authRouter);
server.use('/api/users', authenticate, userRouter);



module.exports = server;