var express = require('express');
var router = express.Router();


const authRouter = require('../routes/auth.router.js');
router.use('/auth', authRouter);






module.exports = router;