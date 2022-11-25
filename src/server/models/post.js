const mongoose = require('mongoose')
const schema = mongoose.Schema

const postSchema = new schema({
  student: {
    type: String,
    require: true,
    points: Number
  }
})