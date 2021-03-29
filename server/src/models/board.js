import { Model, Schema } from 'mongoose'
const Types = Schema.Types

let EnabledUserSchema = new Schema({
  is_admin: Boolean,
  user_id: {
    type: Types.ObjectId,
    ref: 'User',
    required: true
  }
})

let BoardSchema = new Schema({
    title: String,
    columns: [{
      type: Types.ObjectId,
      ref: 'Column'
    }],
    users: [EnabledUserSchema]
  })

export default mongoose.model(
  "Board",
  BoardSchema
)