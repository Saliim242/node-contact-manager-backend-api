const mongoose = require("mongoose");
const contactSchema = mongoose.Schema(
  {
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
