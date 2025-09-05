import { fileURLToPath } from 'url'
import path, { dirname }  from 'path'

import express from 'express'
import createError from 'http-errors'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'

import { pagesRouter } from './routes/pages.router.js'
import { usersRouter } from './routes/users.router.js'
import { productsRouter } from './routes/products.router.js'
import { purchasesRouter } from './routes/purchase.router.js'

// Get __dirname
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

// Start express app
const app = express()

// App setup
app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(cookieParser())

// View engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname, '../public')))

// Middelware for requests
app.use(logger('dev'))

// Routes
app.use('/', pagesRouter)
app.use('/api/users', usersRouter)
app.use('/api/products', productsRouter)
app.use('/api/purchases', purchasesRouter)

// Middelware for catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
});

// Middleware error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
});

export { app }