'use strict';
const express = require('./config/express');
const mongodb = require('./config/mongodb');
const socketio = require('./config/socketio');
const mongoose = require('mongoose');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.serveClient(false);
io.path('/socket.io-client');

/**
 * Load MongonDB configuration.
 */
mongodb.init(mongoose);

/**
 * Load Express configuration.
 */
express.init(app);

/**
 * Socket.io configuration.
 */
socketio.init(io);

/**
 * Run.
 */
server.listen(process.env.PORT);
console.info(`[info] The server listening on ${process.env.PORT}, in ${process.env.NODE_ENV} mode`);
