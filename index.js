import express from "express";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Database Connection
connectDB();

// Routes
app.use("/api/products", productRoutes);

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
