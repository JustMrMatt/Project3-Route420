const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  brand: { type: String, required: true },
  type: [String],
  store: {type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;