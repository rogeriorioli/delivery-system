import mongoose from 'mongoose'

const EnterpriseCatalogModelSchema = new mongoose.Schema({

  enterpriseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "enterprise",
    require: true,
  },
  name: { type: String, required: true },
  image :{ type: String ,required: true},
  description: { type: String, required: true },
  price: {type :Number , required : true},
  hasOffer: { type: Boolean, required: true, default: false },
  offerDiscountPercentage :  { type : Number, required : false },
  avaliable: { type: Boolean, required: true, default: true },
  createdAt: { type: Date, default: Date.now }

})

export default mongoose.model('catalog', EnterpriseCatalogModelSchema);