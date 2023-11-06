const mongoose = require("mongoose");
const product_schema = new mongoose.Schema({
    productCode: {
        type: String,
        required: true
    },
    productName: {
        type: String,
        required: true
    },
    
    productDate: {
        type: String,
        required: true
        
    },
    productOriginPrice: {
        type: String,
        required: true
        
    },
    quantity: {
        type: String,
        required: true
        
    },
    productStoreCode: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("ProductCollection",product_schema);