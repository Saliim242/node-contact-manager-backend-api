const mongoose = require("mongoose");

const UserSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a user name"],
    },
    email: {
      type: String,
      required: [true, "Please enter a user email address"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter a user password"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", UserSchema);
