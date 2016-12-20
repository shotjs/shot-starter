'use strict'
const path = require('path')
const globbies = require('globbies')

function socketio (io) {
  io.on('connection', socket => {
    socket.address = socket.handshake.address !== null ? socket.handshake.address.address + ':' + socket.handshake.address.port : process.env.DOMAIN
    socket.connectedAt = new Date()

    // Call onDisconnect.
    socket.on('disconnect', socket => console.warn(`[warn] ${socket.address} DISCONNECTED`))

    // Call onConnect.
    console.info(`[info] ${socket.address} CONNECTED`)

    // When the client emits 'info', this listens and executes
    socket.on('info', data => console.info(`[info] ${socket.address} ${JSON.stringify(data, null, 2)}`))

    // Insert sockets below
    globbies(path.resolve(__dirname, '../api/**/socket.js'), file => require(file).register())
  })
}

exports.load = socketio
