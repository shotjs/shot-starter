'use strict'
const controller = require('./controller')
const router = require('express').Router()

router
  .get('/', controller.index)
  .post('/', controller.create)
  .get('/:id', controller.show)
  .patch('/:id', controller.update)
  .delete('/:id', controller.destroy)

module.exports = router
