import { Model, Schema } from 'mongoose'
const Types = Schema.Types

let ItemSchema = new Schema({
    title: String,
    body: String,
    link: String,
    color: String,
    owner: {
      type: Types.ObjectId,
      ref: 'User',
      required: true
    }
  })

export default mongoose.model(
  "Item",
  ItemSchema
)