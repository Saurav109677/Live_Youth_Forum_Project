const mongoose = require("mongoose");

const groupSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  leader: {
    type: String,
    required: true
  },
  detail: {
    type: String
  }
});

module.exports = mongoose.model("Group", groupSchema);
