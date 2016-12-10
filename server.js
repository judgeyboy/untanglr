'use strict';

const app = require('express')();
let port = process.env.PORT || 8080;

app.use(require('./controllers'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = app;