const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    addressLine1: { type: String, required: true },
    addressLine2: { type: String, required: true },
    city: { type: String, required: true },
    state: {    type: String, 
                required: true, 
                minlength: 2,
                maxlength: 2},
    zip: {  type: String, 
            required: true, 
            minlength: 5,
            maxlength: 5},
    location: {type: String, required: true },
    products: [{    type: Schema.Types.ObjectId,
                    ref: "Product"}],
    storecomments: [{   type: Schema.Types.ObjectId,
                        ref: "StoreComment"}]
});

const Store = mongoose.model("Store", storeSchema);

module.exports = Store;