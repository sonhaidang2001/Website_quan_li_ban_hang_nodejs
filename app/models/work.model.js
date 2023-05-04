const mongoose = require("mongoose");

const WorkSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
    }
    
  },
  { timestamps: true }
);

module.exports = mongoose.model("Work", WorkSchema);