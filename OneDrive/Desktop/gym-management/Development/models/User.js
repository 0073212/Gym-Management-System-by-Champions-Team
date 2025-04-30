const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: Number,
  gender: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["gym member", "gym owner"] },
});

module.exports = mongoose.model("User", userSchema);
