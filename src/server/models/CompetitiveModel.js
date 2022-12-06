import mongoose from 'mongoose'

const CompetitiveSchema = new mongoose.Schema({
  competitiveTitle: {
    type: String,
    required: true
  },
  competitiveData: {
    type: String
  },
  students: {
    type: Array,
    default: []
  }
})

export default mongoose.model('Competitive', CompetitiveSchema)