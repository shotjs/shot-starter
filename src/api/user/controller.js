'use strict'
const Model = require('./model')

function index (req, res) {
  Model
    .find()
    .exec((err, data) => {
      if (err || !data) return res.status(500).json(err)
      res.status(200).json(data)
    })
}

function create (req, res) {
  var model = new Model({
    name: req.body.name,
    email: req.body.email,
    bio: req.body.bio,
    gender: req.body.gender,
    birthday: req.body.birthday,
    created: new Date(),
    updated: new Date()
  })
  model
    .save((err, data) => {
      if (err || !data) res.status(500).json(err)
      else {
        Model
          .findOne({ email: req.body.email }).exec((err, data) => {
            if (err || !data) return res.status(500).json(err)
            res.status(200).json(data)
          })
      }
    })
}

function show (req, res) {
  Model
    .findOne({ _id: req.params.id })
    .exec((err, data) => {
      if (err || !data) return res.status(500).json(err)
      res.status(200).json(data)
    })
}

function update (req, res) {
  delete req.body._id
  req.body.updated = new Date()
  Model
    .update({ _id: req.params.id }, req.body, (err, data) => {
      if (err || !data) res.status(500).json(err)
      else {
        Model
          .findOne({ _id: req.params.id })
          .exec((err, data) => {
            if (err || !data) return res.status(500).json(err)
            res.status(200).json(data)
          })
      }
    })
}

function destroy (req, res) {
  Model
    .remove({ _id: req.params.id }, (err, data) => {
      if (err || !data) return res.status(500).json(err)
      res.status(200).json(data)
    })
}

exports.index = index
exports.create = create
exports.show = show
exports.update = update
exports.destroy = destroy
