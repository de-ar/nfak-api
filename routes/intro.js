const express = require('express');
const router = express.Router();
const Intro = require('../models/Intro');

router.get('/', (req, res) => {
  res.status(200).json(Intro.getIntro());
});

module.exports = router;
