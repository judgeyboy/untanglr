const express = require('express'),
      router = express.Router();

router.get('/', (request, response) => {
  // todo: load these words from database via repository
  let words = ['node', 'angular', 'bootstrap', 'express'];
  response.json(words);
});

module.exports = router;