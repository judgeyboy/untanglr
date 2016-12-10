'use strict';

const express = require('express'),
      router = express.Router(),
      scoresRepository = require('../repositories/scores.repository');

router.get('/', (request, response) => {
  scoresRepository.getAllScores()
    .then(scores => response.json(scores))
    .catch(error => response.sendStatus(500)); // todo: create middleware to handle errors globally
});

// todo: implement post to handle new incoming results

module.exports = router;