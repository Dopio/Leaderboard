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
      type: Schema.Types.ObjectId,
      ref: 'Students'
    }
  ]
})

export default mongoose.model('Competitive', CompetitiveSchema)