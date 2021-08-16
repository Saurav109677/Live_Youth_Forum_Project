const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },

  lastName: {
    type: String
  },

  address: {
    type: String
  },

  mobile: {
    type: Number,
    required: true
  },
  remark: {
    type: String
  },

  email: {
    type: String,
    required: true
  },

  group: {
    type: String,
    default: "Not Assigned"
  },

  facilitator: {
    type: String,
    default: "Not Assigned"
  },

  sessions: [
    {
      index: {
        type: Number,
        required: true
      },

      status: {
        type: Boolean,
        default: false
      }
    }
  ]
});

// const dataSchema = new mongoose.Schema({
//   group: [
//     {
//       name: {
//         type: String,
//         required: true
//       }
//     }
//   ],
//   facilitator: [
//     {
//       name: {
//         type: String,
//         required: true
//       },
//       group: {
//         type: String,
//         required: true
//       }
//     }
//   ],
//   members: [
//     {
//       firstName: {
//         type: String,
//         required: true
//       },

//       lastName: {
//         type: String,
//         required: true
//       },

//       address: {
//         type: String
//       },

//       mobile: {
//         type: Number,
//         required: true
//       },

//       group: {
//         type: String,
//         default: "Not Assigned"
//       },

//       facilitator: {
//         type: String,
//         default: "Not Assigned"
//       }
//     }
//   ]
// });

module.exports = mongoose.model("DataSheet", dataSchema);
