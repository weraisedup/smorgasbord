import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Types = Schema.Types

export default mongoose.model('User',
  new Schema({
    email: String,
    password: String,
    boards: [ {
      type: Types.ObjectId,
      ref: 'boards'
    } ],
    created: {
      type: Date,
      default: Date.now
    }
  })
)

export const createUser = async (opts) => {
  return mongoose.model('User').create({
    username: opts.username
  }).then(user => {
    console.log(user)
    return user
  }).catch(error =>
    console.error(error.stack)
  )
}

export const getUser = async (opts) => {
  return mongoose.model('User').findById(opts.userI)
    .exec()
    .then(user => {
      console.log(user)
      return user
    }).catch(error =>
      console.error(error.stack)
    )
}
