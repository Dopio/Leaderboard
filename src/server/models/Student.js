import mongoose, { Schema } from 'mongoose'

const StudentSchema = new mongoose.Schema({
  studentName: {
    type: String,
    required: true
  },
  studentPoints: {
    type: Number,
    required: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Competitive"
  }
})

export default mongoose.model('Students', StudentSchema)