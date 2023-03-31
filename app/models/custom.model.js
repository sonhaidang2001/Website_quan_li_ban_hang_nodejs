const mongoose = require("mongoose");

const CustomSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
      unique: true,
    },
    email: {
      type: String,
      default:" "
    },
    address: {
      type: String,
      default:" "
    },
    phone: {
      type: String,
      default:" "
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Custom", CustomSchema);