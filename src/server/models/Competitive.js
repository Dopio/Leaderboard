import mongoose from 'mongoose'

const CompetitiveSchema = new mongoose.Schema({
  competitive: {
    type: String,
    required: true
  },
  competitiveData: {
    type: Number
  }
})

export default mongoose.model('Competitive', CompetitiveSchema)