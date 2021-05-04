const mongoose = require("mongoose");

// user schema
const userSchema = new mongoose.Schema({
  mobile: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  name: {
    type: String,
    required: true,
    trim: true
  },
  state: {
    type: String,
    trim: true
  },
  district: {
    type: String,
    trim: true
  },
  age: {
    type: Number
  }
});

// export
export const User = mongoose.model("user", userSchema);
