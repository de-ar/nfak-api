const express = require('express');
const router = express.Router();

router.use('/intro', require('./intro'));

module.exports = router;
