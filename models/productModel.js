import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  product_name: { type: String, required: true, index: true },
  product_description: { type: String, required: true },
  category: { type: String, required: true },
  original_price: { type: Number },
  quantity: { type: Number },
  sale_price: { type: Number, required: true },
  imageUrl: { type: String, required: true }
});

const Product = mongoose.model("Product", productSchema);

export default Product;
