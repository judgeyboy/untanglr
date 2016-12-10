'use strict';

const db = require('../config/db');

let wordSchema = new db.Schema({
  untangled: { type: String, required: true, unique: true },
  tangled: { type: String, required: true }
});

let word = db.model('Word', wordSchema);

module.exports = word;