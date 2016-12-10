'use strict';

const express = require('express'),
      router = express.Router();

router.get('/', (request, response) => {
  response.sendFile(process.cwd() + '/public/index.html');
});

module.exports = router;