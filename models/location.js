const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const locationSchema = new Schema({
  city: { type: String, required: true },
  state: {  type: String, 
            required: true, 
            minlength: 2,
            maxlength: 2},
  stores: [{    type: Schema.Types.ObjectId,
                ref: "Store"}]
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;