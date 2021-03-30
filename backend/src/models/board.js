import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Types = Schema.Types


let EnabledUserSchema = new Schema({
  is_admin: Boolean,
  user_id: {
    type: Types.ObjectId,
    ref: 'users',
    required: true
  }
})

export default mongoose.model('Board',
  new Schema({
    title: String,
    columns: [
      {
        type: Types.ObjectId,
        ref: 'columns'
      }
    ],
    users: [ EnabledUserSchema ],
    created: {
      type: Date,
      default: Date.now
    }
  })
)
