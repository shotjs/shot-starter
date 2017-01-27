'use strict';
const Model = require('./model');

function register (socket) {
  Model.schema.post('save', doc => onSave(socket, doc));
  Model.schema.post('remove', doc => onRemove(socket, doc));
};

function onSave (socket, doc, cb) {
  socket.emit('user:save', doc);
};

function onRemove (socket, doc, cb) {
  socket.emit('user:remove', doc);
};

exports.register = register;
