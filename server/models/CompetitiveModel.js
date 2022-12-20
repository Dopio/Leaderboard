import mongoose, { Schema } from 'mongoose'

const CompetitiveSchema = new mongoose.Schema({
  competitiveTitle: {
    type: String,
    required: true
  },
  competitiveData: {
    type: String,
    default: ''
  },
  students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'student'
    }
  ]
})

export default mongoose.model('competitive', CompetitiveSchema)
