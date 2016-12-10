'use strict';

var mongoose = require('mongoose');

mongoose.connect('mongodb://untanglr:secret2016@ds119508.mlab.com:19508/heroku_d7zcq037');

module.exports = mongoose;