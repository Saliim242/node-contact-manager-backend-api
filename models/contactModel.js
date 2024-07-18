const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required."],
    },
    name: {
      type: String,
      required: [true, "Please enter a contact name."],
    },
    email: {
      type: String,
      required: [true, "Please enter a contact email."],
      unique: true,
    },
    phone: {
      type: String,
      required: [true, "Please enter a contact phone number."],
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
