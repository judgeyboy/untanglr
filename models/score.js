'use strict';

const db = require('../config/db');

let scoreSchema = new db.Schema({
  name: { type: String, required: true, unique: true },
  score: { type: Number, required: true }
});

let score = db.model('Score', scoreSchema);

module.exports = score;