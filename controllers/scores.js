const express = require('express'),
      router = express.Router();

router.get('/', (request, response) => {
  // todo: load the scores from database via repository
  let staticScores = [
    { name: 'Jane', score: 18 },
    { name: 'John', score: 14 },
    { name: 'Ben', score: 13 }
  ];

  response.json(staticScores);
});

// todo: implement post to handle new incoming results

module.exports = router;