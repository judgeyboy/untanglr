'use strict';

const express = require('express'),
      router = express.Router(),
      wordRepository = require('../repositories/words.repository');

router.get('/', (request, response) => {
  wordRepository.getAllWords()
    .then(words => response.json(words))
    .catch(error => response.sendStatus(500)); // todo: create middleware to handle errors globally
});

module.exports = router;