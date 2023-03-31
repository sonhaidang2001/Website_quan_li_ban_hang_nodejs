const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
    },
    cost: {
      type: String,
      default:" "
    },
    note: {
      type: String,
      default:" "
    },
    supplier: {
      type: String,
      default:" "
    },
  
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);