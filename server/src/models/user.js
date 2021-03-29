import { Model, Schema } from 'mongoose'
const Types = Schema.Types

let UserSchema = new Schema({
    email: String,
    password: String,
    boards: [{
      type: Types.ObjectId,
      ref: 'Board'
    }]
  })

export default mongoose.model(
  "User",
  UserSchema
)