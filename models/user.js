const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  admin: { type: Boolean, required: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  storecomments: [{ type: Schema.Types.ObjectId,
                    ref: "StoreComment"}]
});

const User = mongoose.model("User", userSchema);

module.exports = User;