const router = require('express').Router();

// Import routers

const apiRouter = require('./api');


router.use('/api', apiRouter);


module.exports = router;
