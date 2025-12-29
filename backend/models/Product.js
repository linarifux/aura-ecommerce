const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true }, // Custom ID (e.g., 'aura-one') to match URL params
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: Number, default: 0 },
  description: { type: String },
  specs: [{ type: String }],
  colors: [{ type: String }],
});

module.exports = mongoose.model("Product", productSchema);