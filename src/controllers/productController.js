const Product = require('../models/productModel');

exports.createProduct = async(req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json({
            message: "Product Add Successfully",
            data:product
        })
    } catch (error) {
        res.status(400).json({
            message: "Error creating product",
            error:error.message
        })
    }
}

exports.getProducts = async(req, res) => {
    try {
        const products = await Product.find().sort({ createdAt: -1 });
        res.status(200).json({
             message: "Get All Products Successfully",
            data:products
        })
    } catch (error) {
         res.status(500).json({
            message: "Error fetching product",
            error:error.message
        })
    }
}

exports.getProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({
                 message: "product not found",
            })
        }
        res.status(200).json({
              message: "Get Product Successfully",
            data:product
        })
    } catch (error) {
        res.status(500).json({
            message: "Error fetching product",
            error:error.message
        })
    }
}

exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!product) {
            return res.status(404).json({
                 message: "product not found",
            })
        }
        res.status(200).json({
              message: "Update Product Successfully",
            data:product
        })
    } catch (error) {
         res.status(400).json({
            message: "Error updating product",
            error:error.message
        })
    }
}

exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
         if (!product) {
            return res.status(404).json({
                 message: "product not found",
            })
        }
         res.status(200).json({ message: "Product deleted successfully" });

    } catch (error) {
            res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
    }
}