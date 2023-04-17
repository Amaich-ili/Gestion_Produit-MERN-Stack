const mongoose = require('mongoose');

const PhoneSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
},
quantity: {
    type: Number,
    required: true,
    default: 0
},
price: {
    type: Number,
    required: true,
    default: 0
},
version : {
    type: String
},
chargeur: {
    type: String
},
image: {
    type: String
},
});

module.exports = Phone = mongoose.model('phone', PhoneSchema);