const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  topic: {
    type: String,
    default: "Unknown"
  }

  // attendedMemberId: [
  //   {
  //     memId: {
  //       type: String,
  //       default: null
  //     }
  //   }
  // ]
});

module.exports = mongoose.model("Session", sessionSchema);
