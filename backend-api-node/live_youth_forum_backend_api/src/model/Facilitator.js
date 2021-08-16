const mongoose = require("mongoose");

const facilitatorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  group: {
    type: String,
    required: true
  },
  passingYear: {
    type: String,
    required: true
  },
  code: {
    type: String,
    required: true
  },
  totalMembers: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Facilitator", facilitatorSchema);
