import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Types = Schema.Types

export default mongoose.model('Item',
  new Schema({
    title: String,
    body: String,
    link: String,
    color: String,
    owner: {
      type: Types.ObjectId,
      ref: 'users',
      required: true
    },
    created: {
      type: Date,
      default: Date.now
    }
  })
)
