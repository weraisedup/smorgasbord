import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Types = Schema.Types

export default mongoose.model('Column',
  new Schema({
    title: String,
    body: String,
    link: String,
    color: String,
    items: [ {
      type: Types.ObjectId,
      ref: 'items'
    } ],
    board: {
      type: Types.ObjectId,
      ref: 'boards'
    },
    created: {
      type: Date,
      default: Date.now
    }
  })
)
