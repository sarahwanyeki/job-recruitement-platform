const mongoose = require("mongoose");

const UserTypeSchema = new mongoose.Schema({
  type: { type: String, required: true },
});

const UserType = mongoose.model("userType", UserTypeSchema);

module.exports = UserType;
