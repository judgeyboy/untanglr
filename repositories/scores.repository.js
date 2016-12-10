'use strict';

const scoreCollection = require('../models/score');

class ScoresRepository{
  getAllScores(){
    return new Promise((resolve, reject) => {
      scoreCollection.find({}, (error, words) => {
        if (error) {
          reject(error);
        } else {
          resolve(words);
        }
      });
    });
  }
}

module.exports = new ScoresRepository();