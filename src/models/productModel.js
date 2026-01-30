const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    metaTitle: String,
    name: String,
    slug: { type: String, unique: true },
    galleryImage: String,
    price: Number,
    discountedPrice: Number,
    description:String
}, {
    timestamps:true
})


module.exports = mongoose.model('Product',productSchema)