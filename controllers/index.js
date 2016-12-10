'use strict';

const express = require('express'),
      router = express.Router();

router.use('/', require('./home.controller'));
router.use('/api/scores', require('./scores.controller'));
router.use('/api/words', require('./words.controller'));

module.exports = router;