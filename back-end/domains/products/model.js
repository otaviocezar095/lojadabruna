import { Schema, model } from "mongoose";

const ProductSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  collection: { type: String },
  installments: { type: Number, default: 1 },
  stock: { type: Number, default: 0 },
  active: { type: Boolean, default: true },
}, {
  timestamps: true,
});

export default model("Product", ProductSchema);