import mongoose from 'mongoose'
import dotenv from 'dotenv'
import User from '../models/user.js'
import Board from '../models/board.js'
import Column from '../models/column.js'
import Item from '../models/item.js'

import findConfig from 'find-config'
dotenv.config({ path: findConfig('.env') })

const options = {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
  useUnifiedTopology: true,
  autoIndex: false,
  poolSize: 10,
  bufferMaxEntries: 0
}

const {
  MONGO_HOSTNAME_AND_PORT,
  MONGO_DB
} = process.env

const dbConnectionURL = {
  'LOCALURL': `mongodb://${MONGO_HOSTNAME_AND_PORT}/${MONGO_DB}`
}
console.log(`mongodb://${MONGO_HOSTNAME_AND_PORT}/${MONGO_DB}`)

const connectDB = () => {
  return mongoose.connect(dbConnectionURL.LOCALURL, options)
}
const db = mongoose.connection

db.on('error', console.error.bind(
  console, 'Mongodb Connection Error:' + dbConnectionURL.LOCALURL
))
db.once('open', () => {
  console.log('Mongodb Connection Successful')
})

const models = { User, Board, Column, Item }

export { connectDB }
export default models
