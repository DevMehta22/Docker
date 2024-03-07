const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Title is necessary"] },
  image: { type: Buffer },
  description: { type: String },
  body: { type: String, required: [true, "Body text is necessary"] },
});

module.exports = mongoose.model("Post", postSchema);
