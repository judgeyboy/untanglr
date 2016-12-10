'use strict';

const wordCollection = require('../models/word');

class WordsRepository{
  getAllWords(){
    // todo: randomize the words
    return new Promise((resolve, reject) => {
      wordCollection.find({}, (error, words) => {
        if (error) {
          reject(error);
        } else {
          resolve(words);
        }
      });
    });
  }
}

module.exports = new WordsRepository();