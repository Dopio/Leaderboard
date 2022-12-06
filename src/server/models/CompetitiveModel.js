import mongoose from 'mongoose'

const CompetitiveSchema = new mongoose.Schema({
  competitiveTitle: {
    type: String,
    required: true
  },
  competitiveData: {
    type: String
  },
  studentName: {
    type: String
  },
  studentPoints: {
    type: Number
  }
})

export default mongoose.model('Competitive', CompetitiveSchema)