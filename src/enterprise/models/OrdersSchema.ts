import mongoose from "mongoose";

const OrderModelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  addressToDelivery: {
    position: { type: String, required: true },
    street: { type: String, required: true },
    number: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    neighborhood: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  products: { type: Array, require: true },
  totalPrice: { type: Number, required: true },
  hasDelivery: { type: Boolean, required: true, default: false },
  accept: { type: Boolean, required: true, default: false },
  finally: { type: Boolean, required: true, default: false },
  canceled : {type :Boolean, required : true, default : false},
  paymentMethod: { type: String, require: true },
  payback: { type: Boolean, require: false },
  paybackFor: { type: String, required: false },
  paybackValue: { type: Number, required: false },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("orders", OrderModelSchema);
