import mongoose from 'mongoose'

const EnterpriseModelSchema = new mongoose.Schema({

  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  cnpj: {type : String , required : true},
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }

})

export default mongoose.model('enterprise', EnterpriseModelSchema);