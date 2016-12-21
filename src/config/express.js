'use strict'
const path = require('path')
const globbies = require('globbies')
const dotenv = require('dotenv').config()
const expand = require('dotenv-expand')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const cookieParser = require('cookie-parser')
const errorHandler = require('errorhandler')
const morgan = require('morgan')
const compression = require('compression')
const cors = require('cors')
const helmet = require('helmet')

// Load environment variables from .env file.
expand(dotenv)

// Set default node environment to development.
process.env.NODE_ENV = process.env.NODE_ENV || 'development'
process.env.PORT = process.env.PORT || 3000

function authenticated (req, res, next) {
  if (req.headers.authenticated === process.env.AUTHENTICATED) return next()
  res.status(401).json({ message: 'Not authorized!' })
}

function express (app) {
  app
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(bodyParser.json())
    .use(cookieParser())
    .use(methodOverride())
    .use(morgan('dev'))
    .use(errorHandler())
    .use('*', authenticated)

  globbies(path.resolve(__dirname, '../api/**/router.js'), file => {
    app.use(`/${path.basename(path.dirname(file))}s`, require(file))
  })
}

exports.load = express
