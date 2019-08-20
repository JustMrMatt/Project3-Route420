const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const storeCommentSchema = new Schema({
  comment: { type: String, required: true },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
  user: {type: String, required: true },
  store: {type: String, required: true }
});

const StoreComment = mongoose.model("StoreComment", storeCommentSchema);

module.exports = StoreComment;