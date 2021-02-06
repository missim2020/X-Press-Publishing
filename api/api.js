const express = require('express');
const apiRouter = express.Router();
const artistRouter = require('./artist');

apiRouter.use('/artist', artistRouter);


module.exports=apiRouter;