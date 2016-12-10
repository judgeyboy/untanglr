const express = require('express'),
      router = express.Router();

router.use('/api/scores', require('./scores'));
router.use('/api/words', require('./words'));

module.exports = router;