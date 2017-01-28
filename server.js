'use strict';

const app = require('express')();
let port = process.env.PORT || 8080;

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(require('./controllers'));

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
});

module.exports = app;