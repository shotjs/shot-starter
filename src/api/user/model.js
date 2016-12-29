'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Model = mongoose.model('User', new Schema({
  name: { type: String, trim: true },
  email: { type: String, lowercase: true, trim: true },
  bio: { type: String, trim: true },
  gender: { type: String, trim: true },
  birthday: { type: String, trim: true },
  created: { type: Date },
  updated: { type: Date }
}));

module.exports = Model;
