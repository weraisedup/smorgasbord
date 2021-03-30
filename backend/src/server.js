import dotenv from 'dotenv'
import express from 'express'
import path from 'path'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import indexRouter from './routes/index.js'
import usersRouter from './routes/users.js'
import models, { connectDB } from './config/database.js'

import findConfig from 'find-config'
dotenv.config({ path: findConfig('.env') })

const HOST_PORT = process.env.PORT || 8080
const app = express()
export const router = express.Router()

router.use(logger('dev'))
router.use(express.json())
router.use(express.urlencoded({ extended: false }))
router.use(cookieParser())

if (__dirname) {
  console.log('dirname exists.')
}
else {
  console.log('assigning working directory.')
  var __dirname = path.resolve()
}

router.use(express.static(path.join(__dirname, 'public')))
router.use('/', indexRouter)
router.use('/users', usersRouter)

/* GET base. */
router.get('/', (_a, res, _b) => {
  res.send('respond with a resource')
})

// setup router before adding it as middleware
// to the express application

app.use(router)

connectDB().then(async () => {
  app.listen(HOST_PORT, () => {
    console.log(`Server Listening on ${HOST_PORT}`)
  })
})

export default app
