import mongoose from "mongoose";

// Create a schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
}, {
    timestamps: true // createdAt and updatedAt fields
});

// Create a model name Product from schema, this model is used for CRUD in schema
// Product (model name) --> products (collection name)
const Product = mongoose.model('Product', productSchema);

export default Product;