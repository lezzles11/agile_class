const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  country: {
    type: String
  },
  mailingAddress: {
    type: String
  },
  contactNumber: {
    type: String
  },
  courses: {
    type: String
  },
  paymentInfo: {
    type: String
  }
});

module.exports = mongoose.model("User", UserSchema);
