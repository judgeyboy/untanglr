const app = require('express')();

app.use(require('./controllers'));

app.listen(3000, () => console.log('App listening on port 3000'));

module.exports = app;