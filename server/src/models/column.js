import { Model, Schema } from 'mongoose'
const Types = Schema.Types

let ColumnSchema = new Schema({
    title: String,
    body: String,
    link: String,
    color: String,
    items: [{
      type: Types.ObjectId,
      ref: 'Item'
    }],
    board: {
      type: Types.ObjectId,
      ref: 'Board'
    }
  })

export default mongoose.model(
  "Column",
  ColumnSchema
)