const mongoose = require('mongoose');
const Schema = mongoose.Schema;
​
const productSchema = new Schema({
    productName: { type: String, required: true, unique: true },
    productPrice: { type: String, required: true },
    productQuantity: { type: Number, required: true },
})
​
module.exports = mongoose.model('Product', productSchema, 'product');