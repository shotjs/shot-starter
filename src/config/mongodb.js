'use strict'

function mongodb (mongoose) {
  mongoose
    .set('debug', false)
    .connect(process.env.MONGO_URI)
    .connection
    .on('error', err => console.error('[error] Error during connection', err))
    .once('open', data => console.info('[info] Connection to the database successfully'))
}

exports.load = mongodb
