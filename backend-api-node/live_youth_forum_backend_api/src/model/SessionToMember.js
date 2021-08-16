const mongoose = require("mongoose");

const sessionToMemberSchema = new mongoose.Schema({
  sessionId: {
    type: String
  },
  memberId: {
    type: String
  },
  status: {
    type: Boolean
  }
});

module.exports = mongoose.model("SessionToMember", sessionToMemberSchema);
