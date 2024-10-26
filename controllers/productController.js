import Product from "../models/productModel.js";

// Create Product
export const createProduct = async (req, res) => {
  try {
    const { product_name, product_description, category, original_price, quantity, sale_price } = req.body;
    const filePath = req.file.path;

    const newProduct = new Product({
      product_name,
      product_description,
      category,
      original_price,
      quantity,
      sale_price,
      imageUrl: filePath
    });

    await newProduct.save();
    res.status(201).json({ message: "Product uploaded successfully", product: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Failed to upload product", error: error.message });
  }
};
