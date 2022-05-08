import mongoose from "mongoose";

const AddressModelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true,
  },
  namePlace : {type : String, required : true},
  position: { type: String, required: true },
  reference : {type : String, required : false},
  street: { type: String, required: true },
  number: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  neighborhood: { type: String, required: true },
  zipcode: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("address", AddressModelSchema);
